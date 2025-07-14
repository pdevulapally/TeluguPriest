export interface TestimonialForm {
  id: string;
  title: string;
  description?: string;
  formUrl: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  responsesCount: number;
  maxResponses?: number; // Maximum number of responses allowed
  expiryDate?: string; // ISO date string for when the form expires
  isExpired: boolean; // Computed field to check if form is expired
}

export interface TestimonialResponse {
  id: string;
  formId: string;
  customerName: string;
  customerEmail?: string;
  rating: number;
  review: string;
  service?: string;
  date?: string;
  isApproved: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TestimonialStats {
  totalForms: number;
  totalResponses: number;
  averageRating: number;
  approvedResponses: number;
  pendingResponses: number;
} 