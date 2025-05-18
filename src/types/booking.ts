
export interface Booking {
  id: string;
  location: string;
  service: string;
  date: string; // ISO date string
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: string;
}

export type BookingService = 
  | 'satyanarayana'
  | 'barasala'
  | 'gruhapravesam'
  | 'wedding'
  | 'annaprasana'
  | 'upanayanam'
  | 'custom';
