
import { collection, addDoc, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import { format } from 'date-fns';
import { db } from '@/lib/firebase';

export interface PriestAvailability {
  id?: string;
  date: string; // ISO date string
  reason?: string; // Optional reason for unavailability
  createdAt: string;
}

export const markDateUnavailable = async (date: Date, reason?: string): Promise<string> => {
  try {
    const availabilityRef = collection(db, 'priest-unavailable');
    const formattedDate = format(date, 'yyyy-MM-dd');
    
    // Check if date is already marked unavailable
    const existing = await isDateUnavailable(date);
    if (existing) {
      throw new Error('Date is already marked as unavailable');
    }
    
    const newUnavailability = {
      date: formattedDate,
      reason: reason || '',
      createdAt: new Date().toISOString(),
    };
    
    const docRef = await addDoc(availabilityRef, newUnavailability);
    return docRef.id;
  } catch (error) {
    console.error('Error marking date unavailable:', error);
    throw new Error('Failed to mark date as unavailable');
  }
};

export const markDateAvailable = async (date: Date): Promise<boolean> => {
  try {
    const formattedDate = format(date, 'yyyy-MM-dd');
    const availabilityRef = collection(db, 'priest-unavailable');
    const q = query(availabilityRef, where('date', '==', formattedDate));
    
    const snapshot = await getDocs(q);
    const deletePromises = snapshot.docs.map(docSnapshot => 
      deleteDoc(doc(db, 'priest-unavailable', docSnapshot.id))
    );
    
    await Promise.all(deletePromises);
    return true;
  } catch (error) {
    console.error('Error marking date available:', error);
    return false;
  }
};

export const getUnavailableDates = async (): Promise<string[]> => {
  try {
    const availabilityRef = collection(db, 'priest-unavailable');
    const snapshot = await getDocs(availabilityRef);
    return snapshot.docs.map(doc => doc.data().date);
  } catch (error) {
    console.error('Error getting unavailable dates:', error);
    return [];
  }
};

export const isDateUnavailable = async (date: Date): Promise<boolean> => {
  try {
    const formattedDate = format(date, 'yyyy-MM-dd');
    const availabilityRef = collection(db, 'priest-unavailable');
    const q = query(availabilityRef, where('date', '==', formattedDate));
    
    const snapshot = await getDocs(q);
    return !snapshot.empty;
  } catch (error) {
    console.error('Error checking date availability:', error);
    return false;
  }
};

export const getPriestUnavailability = async (): Promise<PriestAvailability[]> => {
  try {
    const availabilityRef = collection(db, 'priest-unavailable');
    const snapshot = await getDocs(availabilityRef);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as PriestAvailability[];
  } catch (error) {
    console.error('Error getting priest unavailability:', error);
    return [];
  }
};
