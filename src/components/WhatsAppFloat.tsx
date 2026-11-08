import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/src/data';

export const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition flex items-center gap-2"
  >
    <MessageCircle size={28} />
    <span className="hidden md:inline font-semibold">Book on WhatsApp: +27 68 868 0158</span>
  </a>
);
