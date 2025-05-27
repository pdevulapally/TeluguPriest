
// Zoom API Configuration for Online Events
export const zoomConfig = {
  clientId: 'tWcw9_0iQzaEP1ZwRLu1w',
  clientSecret: 'm7U87FeLFWnBvlBNWtPr24MrrOf7GNZ9',
  redirectUri: window.location.origin + '/auth/zoom/callback',
  baseUrl: 'https://api.zoom.us/v2'
};

export const getZoomAuthUrl = () => {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: zoomConfig.clientId,
    redirect_uri: zoomConfig.redirectUri,
    scope: 'meeting:write meeting:read'
  });
  
  return `https://zoom.us/oauth/authorize?${params.toString()}`;
};
