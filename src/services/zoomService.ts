
import { zoomConfig } from '@/lib/zoomConfig';

export interface ZoomMeeting {
  id: string;
  topic: string;
  start_time: string;
  duration: number;
  join_url: string;
  password?: string;
}

export const exchangeCodeForToken = async (code: string) => {
  console.log('Exchanging code for token with config:', {
    clientId: zoomConfig.clientId,
    redirectUri: zoomConfig.redirectUri
  });

  const response = await fetch('https://zoom.us/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(`${zoomConfig.clientId}:${zoomConfig.clientSecret}`)}`
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: zoomConfig.redirectUri
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Token exchange failed:', response.status, errorText);
    throw new Error(`Failed to exchange code for token: ${response.status} ${errorText}`);
  }

  const tokenData = await response.json();
  console.log('Token exchange successful');
  return tokenData;
};

export const createZoomMeeting = async (accessToken: string, meetingData: {
  topic: string;
  start_time: string;
  duration: number;
  agenda?: string;
}): Promise<ZoomMeeting> => {
  const response = await fetch(`${zoomConfig.baseUrl}/users/me/meetings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      topic: meetingData.topic,
      type: 2, // Scheduled meeting
      start_time: meetingData.start_time,
      duration: meetingData.duration,
      agenda: meetingData.agenda,
      settings: {
        host_video: true,
        participant_video: true,
        join_before_host: false,
        mute_upon_entry: true,
        watermark: false,
        use_pmi: false,
        approval_type: 2,
        audio: 'both',
        auto_recording: 'none'
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Meeting creation failed:', response.status, errorText);
    throw new Error(`Failed to create Zoom meeting: ${response.status}`);
  }

  const meetingDataResponse = await response.json();
  return meetingDataResponse as ZoomMeeting;
};

export const getZoomMeetings = async (accessToken: string) => {
  const response = await fetch(`${zoomConfig.baseUrl}/users/me/meetings`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Failed to fetch meetings:', response.status, errorText);
    throw new Error(`Failed to fetch meetings: ${response.status}`);
  }

  return response.json();
};
