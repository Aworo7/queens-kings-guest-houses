import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/src/components/ui/Button';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-stone-50 p-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-emerald-900">Queens & Kings</Link>
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-emerald-900 hover:text-amber-600">Home</Link>
          <Link to="/accommodation" className="text-emerald-900 hover:text-amber-600">Accommodation</Link>
          <Link to="/locations" className="text-emerald-900 hover:text-amber-600">Locations</Link>
          <Link to="/gallery" className="text-emerald-900 hover:text-amber-600">Gallery</Link>
          <Link to="/contact">
            <Button variant="primary">Book Now</Button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};
