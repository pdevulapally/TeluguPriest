import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Copy, 
  ExternalLink, 
  Star, 
  CheckCircle, 
  XCircle, 
  Trash2,
  MessageSquare,
  FileText,
  Users,
  BarChart3
} from "lucide-react";
import { 
  createTestimonialForm, 
  getTestimonialForms, 
  updateTestimonialForm, 
  deleteTestimonialForm,
  getTestimonialResponses,
  updateTestimonialResponse,
  deleteTestimonialResponse,
  getTestimonialStats,
  subscribeToTestimonialForms,
  subscribeToTestimonialResponses
} from "@/services/testimonialService";
import { TestimonialForm, TestimonialResponse, TestimonialStats } from "@/types/testimonial";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const TestimonialManager = () => {
  const [forms, setForms] = useState<TestimonialForm[]>([]);
  const [responses, setResponses] = useState<TestimonialResponse[]>([]);
  const [stats, setStats] = useState<TestimonialStats>({
    totalForms: 0,
    totalResponses: 0,
    averageRating: 0,
    approvedResponses: 0,
    pendingResponses: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isCreatingForm, setIsCreatingForm] = useState(false);
  const [newFormTitle, setNewFormTitle] = useState("");
  const [newFormDescription, setNewFormDescription] = useState("");
  const [newFormMaxResponses, setNewFormMaxResponses] = useState<number | undefined>(undefined);
  const [newFormExpiryDate, setNewFormExpiryDate] = useState<string>("");
  const [selectedForm, setSelectedForm] = useState<TestimonialForm | null>(null);
  const [activeTab, setActiveTab] = useState("forms");
  const { toast } = useToast();

  useEffect(() => {
    loadData();
    
    // Set up real-time listeners
    const unsubscribeForms = subscribeToTestimonialForms(setForms);
    const unsubscribeResponses = subscribeToTestimonialResponses(setResponses);
    
    return () => {
      unsubscribeForms();
      unsubscribeResponses();
    };
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const [formsData, responsesData, statsData] = await Promise.all([
        getTestimonialForms(),
        getTestimonialResponses(),
        getTestimonialStats()
      ]);
      
      setForms(formsData);
      setResponses(responsesData);
      setStats(statsData);
    } catch (error) {
      console.error("Error loading testimonial data:", error);
      toast({
        title: "Error",
        description: "Failed to load testimonial data",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateForm = async () => {
    if (!newFormTitle.trim()) {
      toast({
        title: "Error",
        description: "Please enter a form title",
        variant: "destructive",
      });
      return;
    }

    // Validate expiry date if provided
    if (newFormExpiryDate && new Date(newFormExpiryDate) <= new Date()) {
      toast({
        title: "Error",
        description: "Expiry date must be in the future",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsCreatingForm(true);
      await createTestimonialForm(
        newFormTitle.trim(), 
        newFormDescription.trim(),
        newFormMaxResponses,
        newFormExpiryDate || undefined
      );
      setNewFormTitle("");
      setNewFormDescription("");
      setNewFormMaxResponses(undefined);
      setNewFormExpiryDate("");
      toast({
        title: "Success",
        description: "Testimonial form created successfully",
      });
    } catch (error) {
      console.error("Error creating form:", error);
      toast({
        title: "Error",
        description: "Failed to create testimonial form",
        variant: "destructive",
      });
    } finally {
      setIsCreatingForm(false);
    }
  };

  const handleToggleFormStatus = async (form: TestimonialForm) => {
    try {
      await updateTestimonialForm(form.id, { isActive: !form.isActive });
      toast({
        title: "Success",
        description: `Form ${form.isActive ? 'deactivated' : 'activated'} successfully`,
      });
    } catch (error) {
      console.error("Error updating form status:", error);
      toast({
        title: "Error",
        description: "Failed to update form status",
        variant: "destructive",
      });
    }
  };

  const handleDeleteForm = async (formId: string) => {
    if (!confirm("Are you sure you want to delete this form? This will also delete all responses.")) {
      return;
    }

    try {
      await deleteTestimonialForm(formId);
      toast({
        title: "Success",
        description: "Form deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting form:", error);
      toast({
        title: "Error",
        description: "Failed to delete form",
        variant: "destructive",
      });
    }
  };

  const handleToggleResponseApproval = async (response: TestimonialResponse) => {
    try {
      await updateTestimonialResponse(response.id, { isApproved: !response.isApproved });
      toast({
        title: "Success",
        description: `Response ${response.isApproved ? 'unapproved' : 'approved'} successfully`,
      });
    } catch (error) {
      console.error("Error updating response:", error);
      toast({
        title: "Error",
        description: "Failed to update response",
        variant: "destructive",
      });
    }
  };

  const handleDeleteResponse = async (responseId: string) => {
    if (!confirm("Are you sure you want to delete this response?")) {
      return;
    }

    try {
      await deleteTestimonialResponse(responseId);
      toast({
        title: "Success",
        description: "Response deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting response:", error);
      toast({
        title: "Error",
        description: "Failed to delete response",
        variant: "destructive",
      });
    }
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
      });
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const generateTestimonialEmbedCode = (responseId: string) => {
    const baseUrl = window.location.origin;
    return `<iframe src="${baseUrl}/embed/testimonials?responseId=${responseId}" width="100%" height="200" frameborder="0" style="border: none; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"></iframe>`;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Forms</p>
                <p className="text-2xl font-bold">{stats.totalForms}</p>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Responses</p>
                <p className="text-2xl font-bold">{stats.totalResponses}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Rating</p>
                <p className="text-2xl font-bold">{stats.averageRating}</p>
              </div>
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Approved</p>
                <p className="text-2xl font-bold">{stats.approvedResponses}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="forms">Feedback Forms</TabsTrigger>
          <TabsTrigger value="responses">Responses</TabsTrigger>
        </TabsList>

        <TabsContent value="forms" className="space-y-4">
          {/* Create Form Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full sm:w-auto">
                <Plus className="w-4 h-4 mr-2" />
                Create New Form
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Testimonial Form</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Form Title</label>
                  <Input
                    value={newFormTitle}
                    onChange={(e) => setNewFormTitle(e.target.value)}
                    placeholder="Enter form title"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Description (Optional)</label>
                  <Textarea
                    value={newFormDescription}
                    onChange={(e) => setNewFormDescription(e.target.value)}
                    placeholder="Enter form description"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Max Responses (Optional)</label>
                    <Input
                      type="number"
                      min="1"
                      value={newFormMaxResponses || ""}
                      onChange={(e) => setNewFormMaxResponses(e.target.value ? parseInt(e.target.value) : undefined)}
                      placeholder="No limit"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Expiry Date (Optional)</label>
                    <Input
                      type="date"
                      value={newFormExpiryDate}
                      onChange={(e) => setNewFormExpiryDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
                <Button 
                  onClick={handleCreateForm} 
                  disabled={isCreatingForm || !newFormTitle.trim()}
                  className="w-full"
                >
                  {isCreatingForm ? "Creating..." : "Create Form"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Forms List */}
          <Card>
            <CardHeader>
              <CardTitle>Feedback Forms</CardTitle>
            </CardHeader>
            <CardContent>
              {forms.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No feedback forms created yet
                </p>
              ) : (
                <div className="space-y-4">
                  {forms.map((form) => (
                    <Card key={form.id} className="p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold">{form.title}</h3>
                            <Badge variant={form.isActive ? "default" : "secondary"}>
                              {form.isActive ? "Active" : "Inactive"}
                            </Badge>
                            {form.isExpired && (
                              <Badge variant="destructive">Expired</Badge>
                            )}
                          </div>
                          {form.description && (
                            <p className="text-sm text-muted-foreground mb-2">
                              {form.description}
                            </p>
                          )}
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                            <span>{form.responsesCount} responses</span>
                            {form.maxResponses && (
                              <span>Limit: {form.maxResponses}</span>
                            )}
                            <span>Created: {format(new Date(form.createdAt), "MMM dd, yyyy")}</span>
                          </div>
                          {(form.expiryDate || form.maxResponses) && (
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              {form.expiryDate && (
                                <span>Expires: {format(new Date(form.expiryDate), "MMM dd, yyyy")}</span>
                              )}
                              {form.maxResponses && (
                                <span className={form.responsesCount >= form.maxResponses ? "text-red-600 font-medium" : ""}>
                                  {form.responsesCount >= form.maxResponses ? "Limit reached" : `${form.maxResponses - form.responsesCount} remaining`}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(form.formUrl, "Form URL")}
                          >
                            <Copy className="w-4 h-4 mr-1" />
                            Copy URL
                          </Button>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(form.formUrl, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          
                          <Switch
                            checked={form.isActive}
                            onCheckedChange={() => handleToggleFormStatus(form)}
                          />
                          
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteForm(form.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="responses" className="space-y-4">


          {/* Responses List */}
          <Card>
            <CardHeader>
              <CardTitle>Testimonial Responses</CardTitle>
            </CardHeader>
            <CardContent>
              {responses.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No responses received yet
                </p>
              ) : (
                <div className="space-y-4">
                  {responses.map((response) => (
                    <Card key={response.id} className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold">{response.customerName}</h3>
                              <Badge variant={response.isApproved ? "default" : "secondary"}>
                                {response.isApproved ? "Approved" : "Pending"}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                              {response.customerEmail && (
                                <span>{response.customerEmail}</span>
                              )}
                              {response.service && (
                                <span>Service: {response.service}</span>
                              )}
                              <span>{format(new Date(response.createdAt), "MMM dd, yyyy")}</span>
                            </div>
                            
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-sm font-medium">Rating:</span>
                              <div className="flex items-center space-x-1">
                                {renderStars(response.rating)}
                                <span className="text-sm text-muted-foreground ml-1">
                                  ({response.rating}/5)
                                </span>
                              </div>
                            </div>
                            
                            <p className="text-sm">{response.review}</p>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyToClipboard(generateTestimonialEmbedCode(response.id), "Testimonial Embed Code")}
                            >
                              <Copy className="w-4 h-4 mr-1" />
                              Embed
                            </Button>
                            
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleToggleResponseApproval(response)}
                            >
                              {response.isApproved ? (
                                <XCircle className="w-4 h-4 mr-1" />
                              ) : (
                                <CheckCircle className="w-4 h-4 mr-1" />
                              )}
                              {response.isApproved ? "Unapprove" : "Approve"}
                            </Button>
                            
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDeleteResponse(response.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TestimonialManager; 