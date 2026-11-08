import { useState } from 'react';
import { BRANCHES, ROOM_TYPES } from '@/src/data';
import { generateWhatsAppLink } from '@/src/utils';
import { Button } from '@/src/components/ui/Button';

export const BookingEnquiryPanel = () => {
  const [formData, setFormData] = useState({
    branch: '',
    room: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(generateWhatsAppLink(formData), '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-xl -mt-20 container mx-auto relative z-10 grid md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-emerald-900">Branch</label>
        <select className="w-full p-2 border border-stone-300 rounded" onChange={(e) => setFormData({...formData, branch: e.target.value})}>
          <option value="">Select Branch</option>
          {BRANCHES.map(b => <option key={b.id} value={b.name}>{b.name}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-emerald-900">Check-in</label>
        <input type="date" className="w-full p-2 border border-stone-300 rounded" onChange={(e) => setFormData({...formData, checkIn: e.target.value})} />
      </div>
      <div>
        <label className="block text-sm font-medium text-emerald-900">Check-out</label>
        <input type="date" className="w-full p-2 border border-stone-300 rounded" onChange={(e) => setFormData({...formData, checkOut: e.target.value})} />
      </div>
      <div>
        <label className="block text-sm font-medium text-emerald-900">Guests</label>
        <input type="number" min="1" className="w-full p-2 border border-stone-300 rounded" value={formData.guests} onChange={(e) => setFormData({...formData, guests: e.target.value})} />
      </div>
      <Button type="submit" className="w-full">Check Availability</Button>
    </form>
  );
};
