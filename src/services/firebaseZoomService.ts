
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface ZoomTokenData {
  access_token: string;
  refresh_token: string;
  expires_at: number;
  created_at: number;
}

const ZOOM_CONFIG_DOC = 'zoom_config';
const ADMIN_COLLECTION = 'admin_settings';

export const storeZoomTokens = async (tokenData: {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}) => {
  const now = Date.now();
  const zoomTokenData: ZoomTokenData = {
    access_token: tokenData.access_token,
    refresh_token: tokenData.refresh_token,
    expires_at: now + (tokenData.expires_in * 1000),
    created_at: now
  };

  await setDoc(doc(db, ADMIN_COLLECTION, ZOOM_CONFIG_DOC), zoomTokenData);
  return zoomTokenData;
};

export const getZoomTokens = async (): Promise<ZoomTokenData | null> => {
  const docRef = doc(db, ADMIN_COLLECTION, ZOOM_CONFIG_DOC);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data() as ZoomTokenData;
  }
  
  return null;
};

export const isTokenExpired = (tokenData: ZoomTokenData): boolean => {
  const now = Date.now();
  // Add 5 minute buffer
  return now >= (tokenData.expires_at - 300000);
};

export const refreshZoomToken = async (refreshToken: string) => {
  const response = await fetch('https://zoom.us/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(`${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`)}`
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    })
  });

  if (!response.ok) {
    throw new Error('Failed to refresh token');
  }

  const tokenData = await response.json();
  return storeZoomTokens(tokenData);
};
