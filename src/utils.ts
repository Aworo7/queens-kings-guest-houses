import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateWhatsAppLink = (data: {
  branch: string;
  room: string;
  checkIn: string;
  checkOut: string;
  guests: string;
}) => {
  const message = `Hello Queens & Kings Guest Houses.

I would like to enquire about accommodation.

Preferred Branch: ${data.branch}
Room Preference: ${data.room}
Check-in Date: ${data.checkIn}
Check-out Date: ${data.checkOut}
Number of Guests: ${data.guests}

Please confirm availability and your current rates.

Thank you.`;

  return `https://wa.me/27688680158?text=${encodeURIComponent(message)}`;
};
