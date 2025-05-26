
import { addBooking } from '@/services/bookingService';
import { Booking } from '@/types/booking';

export const createBooking = async (bookingData: Omit<Booking, 'id'>) => {
  try {
    const id = await addBooking(bookingData);
    return { success: true, id };
  } catch (error) {
    console.error('Error creating booking:', error);
    throw new Error('Failed to create booking');
  }
};
