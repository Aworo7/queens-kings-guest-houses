import { Link } from 'react-router-dom';
import { Button } from '@/src/components/ui/Button';
import { BookingEnquiryPanel } from '@/src/components/BookingEnquiryPanel';

export const HomePage = () => {
  return (
    <main>
      <section className="relative h-[80vh] flex items-center justify-center bg-stone-200">
        <img src="/assets/aistudio/QK1_9efefad4.webp" alt="Queens & Kings Exterior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white p-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Your Cape Town Stay, Your Way.</h1>
          <p className="text-xl mb-8">Discover comfortable, welcoming accommodation across Cape Town.</p>
          <div className="flex gap-4 justify-center">
            <Button variant="primary" onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}>Check Availability</Button>
            <Link to="/accommodation">
              <Button variant="outline" className="bg-white/20 border-white text-white">Explore Accommodation</Button>
            </Link>
          </div>
        </div>
      </section>
      
      <BookingEnquiryPanel />
      
      <section className="py-16 container mx-auto text-center px-4">
        <h2 className="text-3xl font-serif text-emerald-900 mb-6">Welcome to Queens & Kings</h2>
        <p className="max-w-2xl mx-auto text-stone-700">Whether you are visiting for business, leisure or an extended stay, explore our locations, discover your preferred accommodation and speak directly with our team to arrange your visit.</p>
      </section>
    </main>
  );
};
