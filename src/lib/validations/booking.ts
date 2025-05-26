
import { z } from "zod";

export const bookingSchema = z.object({
  customerName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  customerPhone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  customerEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  date: z.date({
    required_error: "A date is required.",
  }),
  location: z.string().min(1, {
    message: "Location is required.",
  }),
  address: z.string().min(1, {
    message: "Address is required.",
  }),
  city: z.string().min(1, {
    message: "City is required.",
  }),
  country: z.string().min(1, {
    message: "Country is required.",
  }),
  notes: z.string().optional(),
});
