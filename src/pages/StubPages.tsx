import { BRANCHES, getMapsUrl } from '@/src/data';
import { Button } from '@/src/components/ui/Button';
import { WHATSAPP_URL } from '@/src/data';

export const AccommodationPage = () => (
  <div className="container mx-auto py-16 px-4">
    <h1 className="text-4xl font-serif text-emerald-900 mb-8 text-center">Our Accommodation</h1>
    <div className="grid md:grid-cols-3 gap-8">
      {['Comfort Double', 'Executive Double', 'Family Room', 'Self-Catering'].map((room) => (
        <div key={room} className="border border-stone-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold text-emerald-900 mb-2">{room}</h3>
          <p className="text-stone-600 mb-4">Comfortable stay for your needs.</p>
          <Button variant="outline" className="w-full" onClick={() => window.open(WHATSAPP_URL, '_blank')}>Book on WhatsApp: +27 68 868 0158</Button>
        </div>
      ))}
    </div>
  </div>
);

export const LocationsPage = () => (
  <div className="container mx-auto py-16 px-4">
    <h1 className="text-4xl font-serif text-emerald-900 mb-8 text-center">Our Locations</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {BRANCHES.map((branch) => (
        <div key={branch.id} className="border border-stone-200 rounded-lg p-6 bg-white shadow-sm">
          <h3 className="text-lg font-bold text-emerald-900">{branch.name}</h3>
          <p className="text-stone-600 text-sm mb-4">{branch.address}</p>
          <a href={getMapsUrl(branch.address)} target="_blank" rel="noopener noreferrer" className="text-amber-600 font-semibold hover:underline">Get Directions</a>
        </div>
      ))}
    </div>
  </div>
);

export const GalleryPage = () => (
  <div className="container mx-auto py-16 px-4">
    <h1 className="text-4xl font-serif text-emerald-900 mb-8 text-center">Gallery</h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[...Array(12)].map((_, i) => (
        <img key={i} src={`/assets/aistudio/QK${i + 1}_${['9efefad4', '714a4801', 'a1a9b91b', '8f14a9e2', 'e4cfa8f9', 'ea078754', 'ea078754', '82a71aa9', '6b0d7790', '1822c7d8', 'ca13ec04', 'dc4afffe', 'b8b8d9b5'][i]}.webp`} alt="Property" className="w-full h-48 object-cover rounded-lg" />
      ))}
    </div>
  </div>
);

export const AboutPage = () => (
  <div className="container mx-auto py-16 px-4 max-w-3xl">
    <h1 className="text-4xl font-serif text-emerald-900 mb-6 text-center">About Queens & Kings</h1>
    <p className="text-lg text-stone-700 leading-relaxed mb-6">Welcome to Queens & Kings Guest Houses, where finding comfortable accommodation in Cape Town is made easier.</p>
    <p className="text-lg text-stone-700 leading-relaxed">With properties across several Cape Town neighbourhoods, we offer accommodation options for different travel needs. Whether you are visiting for business, leisure or an extended stay, explore our locations, discover your preferred accommodation and speak directly with our team.</p>
  </div>
);

export const FaqPage = () => (
  <div className="container mx-auto py-16 px-4 max-w-2xl">
    <h1 className="text-4xl font-serif text-emerald-900 mb-8 text-center">Frequently Asked Questions</h1>
    {[
      { q: "How do I book a room?", a: "Please use our WhatsApp booking system by selecting your preferred details and clicking the 'Book Now' button." },
      { q: "What are check-in/out times?", a: "Check-in generally starts at 14:00 and check-out is at 10:00, but please confirm with your specific branch." },
      { q: "How do I contact management?", a: "You can reach us directly via WhatsApp at +27 68 868 0158." }
    ].map((faq, i) => (
      <div key={i} className="mb-6">
        <h3 className="font-bold text-emerald-900">{faq.q}</h3>
        <p className="text-stone-700">{faq.a}</p>
      </div>
    ))}
  </div>
);

export const ContactPage = () => (
  <div className="container mx-auto py-16 px-4 text-center">
    <h1 className="text-4xl font-serif text-emerald-900 mb-8">Contact Us</h1>
    <p className="text-lg text-stone-700 mb-4">Queens & Kings Guest Houses, Cape Town.</p>
    <Button onClick={() => window.open(WHATSAPP_URL, '_blank')} className="mt-4">Book on WhatsApp: +27 68 868 0158</Button>
  </div>
);
