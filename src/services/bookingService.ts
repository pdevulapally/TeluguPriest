
import { Booking } from '@/types/booking';
import { collection, addDoc, getDocs, query, where, Timestamp, getFirestore } from 'firebase/firestore';
import { format, parseISO } from 'date-fns';

const db = getFirestore();

export const addBooking = async (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>): Promise<string> => {
  try {
    const bookingsRef = collection(db, 'bookings');
    const newBooking = {
      ...booking,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    
    const docRef = await addDoc(bookingsRef, newBooking);
    return docRef.id;
  } catch (error) {
    console.error('Error adding booking:', error);
    throw new Error('Failed to create booking');
  }
};

export const getBookings = async (): Promise<Booking[]> => {
  try {
    const bookingsRef = collection(db, 'bookings');
    const snapshot = await getDocs(bookingsRef);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Booking[];
  } catch (error) {
    console.error('Error getting bookings:', error);
    return [];
  }
};

export const getBookedDates = async (): Promise<string[]> => {
  try {
    const bookings = await getBookings();
    return bookings
      .filter(booking => booking.status !== 'cancelled')
      .map(booking => format(parseISO(booking.date), 'yyyy-MM-dd'));
  } catch (error) {
    console.error('Error getting booked dates:', error);
    return [];
  }
};

export const isDateBooked = async (date: Date): Promise<boolean> => {
  try {
    const formattedDate = format(date, 'yyyy-MM-dd');
    const bookingsRef = collection(db, 'bookings');
    const q = query(
      bookingsRef, 
      where('date', '>=', formattedDate + 'T00:00:00'),
      where('date', '<=', formattedDate + 'T23:59:59')
    );
    
    const snapshot = await getDocs(q);
    return !snapshot.empty;
  } catch (error) {
    console.error('Error checking if date is booked:', error);
    return false;
  }
};

export const updateBookingStatus = async (
  id: string, 
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
): Promise<boolean> => {
  try {
    const docRef = collection(db, 'bookings', id);
    await addDoc(docRef, { status });
    return true;
  } catch (error) {
    console.error('Error updating booking status:', error);
    return false;
  }
};
