
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Plus, ExternalLink, Calendar, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';
import { getZoomAuthUrl } from '@/lib/zoomConfig';
import { createZoomMeeting, ZoomMeeting } from '@/services/zoomService';
import { getZoomTokens, isTokenExpired, refreshZoomToken } from '@/services/firebaseZoomService';
import { format } from 'date-fns';

const ZoomMeetingManager = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [meetings, setMeetings] = useState<ZoomMeeting[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    topic: '',
    start_time: '',
    duration: 60,
    agenda: ''
  });

  useEffect(() => {
    checkZoomConnection();
  }, []);

  const checkZoomConnection = async () => {
    try {
      setConnectionError(null);
      const tokenData = await getZoomTokens();
      setIsConnected(!!tokenData);
      
      if (tokenData && isTokenExpired(tokenData)) {
        toast.info('Zoom token expired. Please reconnect.');
        setIsConnected(false);
      }
    } catch (error) {
      console.error('Error checking Zoom connection:', error);
      setConnectionError('Failed to check Zoom connection status');
      setIsConnected(false);
    } finally {
      setIsLoading(false);
    }
  };

  const getValidAccessToken = async () => {
    const tokenData = await getZoomTokens();
    
    if (!tokenData) {
      throw new Error('No Zoom tokens found. Please reconnect your Zoom account.');
    }

    if (isTokenExpired(tokenData)) {
      console.log('Token expired, refreshing...');
      try {
        const refreshedTokens = await refreshZoomToken(tokenData.refresh_token);
        return refreshedTokens.access_token;
      } catch (refreshError) {
        console.error('Failed to refresh token:', refreshError);
        throw new Error('Token expired and refresh failed. Please reconnect your Zoom account.');
      }
    }

    return tokenData.access_token;
  };

  const handleConnectZoom = () => {
    try {
      const authUrl = getZoomAuthUrl();
      console.log('Redirecting to Zoom auth URL:', authUrl);
      window.location.href = authUrl;
    } catch (error) {
      console.error('Error generating Zoom auth URL:', error);
      toast.error('Failed to generate Zoom authorization URL');
    }
  };

  const handleCreateMeeting = async () => {
    if (!formData.topic.trim() || !formData.start_time) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      setIsCreating(true);
      
      const accessToken = await getValidAccessToken();
      
      const meeting = await createZoomMeeting(accessToken, {
        topic: formData.topic,
        start_time: new Date(formData.start_time).toISOString(),
        duration: formData.duration,
        agenda: formData.agenda
      });

      setMeetings(prev => [...prev, meeting]);
      toast.success('Zoom meeting created successfully!');
      
      // Reset form
      setFormData({
        topic: '',
        start_time: '',
        duration: 60,
        agenda: ''
      });
    } catch (error) {
      console.error('Error creating meeting:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to create Zoom meeting';
      toast.error(errorMessage);
      
      if (errorMessage.includes('reconnect')) {
        setIsConnected(false);
      }
    } finally {
      setIsCreating(false);
    }
  };

  const copyJoinLink = (joinUrl: string) => {
    navigator.clipboard.writeText(joinUrl);
    toast.success('Join link copied to clipboard!');
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5" />
            Zoom Meeting Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          {connectionError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <span className="text-red-700">{connectionError}</span>
            </div>
          )}
          
          {!isConnected ? (
            <div className="text-center py-8">
              <Video className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Connect to Zoom</h3>
              <p className="text-muted-foreground mb-4">
                Connect your Zoom account to create and manage online events
              </p>
              <Button onClick={handleConnectZoom}>
                Connect Zoom Account
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Create Meeting Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="topic">Meeting Topic *</Label>
                  <Input
                    id="topic"
                    value={formData.topic}
                    onChange={(e) => setFormData(prev => ({ ...prev, topic: e.target.value }))}
                    placeholder="e.g., Satyanarayana Vratam Online"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="start_time">Start Time *</Label>
                  <Input
                    id="start_time"
                    type="datetime-local"
                    value={formData.start_time}
                    onChange={(e) => setFormData(prev => ({ ...prev, start_time: e.target.value }))}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={formData.duration}
                    onChange={(e) => setFormData(prev => ({ ...prev, duration: parseInt(e.target.value) || 60 }))}
                    min="15"
                    max="480"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="agenda">Agenda (Optional)</Label>
                  <Textarea
                    id="agenda"
                    value={formData.agenda}
                    onChange={(e) => setFormData(prev => ({ ...prev, agenda: e.target.value }))}
                    placeholder="Meeting agenda or description"
                    className="h-20"
                  />
                </div>
              </div>
              
              <Button 
                onClick={handleCreateMeeting} 
                disabled={!formData.topic.trim() || !formData.start_time || isCreating}
                className="w-full md:w-auto"
              >
                <Plus className="h-4 w-4 mr-2" />
                {isCreating ? 'Creating Meeting...' : 'Create Zoom Meeting'}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Meetings List */}
      {meetings.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Scheduled Meetings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {meetings.map((meeting) => (
                <div key={meeting.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium">{meeting.topic}</h4>
                      <p className="text-sm text-muted-foreground">
                        {format(new Date(meeting.start_time), 'PPP p')} • {meeting.duration} minutes
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyJoinLink(meeting.join_url)}
                    >
                      Copy Join Link
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(meeting.join_url, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Join Meeting
                    </Button>
                  </div>
                  
                  {meeting.password && (
                    <p className="text-sm text-muted-foreground">
                      Password: <code className="bg-muted px-1 rounded">{meeting.password}</code>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ZoomMeetingManager;
