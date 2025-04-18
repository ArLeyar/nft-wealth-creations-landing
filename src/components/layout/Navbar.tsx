
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        scrolled
          ? 'py-2 bg-white/80 backdrop-blur-md border-b border-gray-200/20 shadow-sm'
          : 'py-4 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl font-semibold tracking-tight">
              <span className="text-primary">SMM</span>Freedom
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              {label: 'Преимущества', href: '#features'},
              {label: 'Тарифы', href: '#pricing'},
              {label: 'Как работает', href: '#how-it-works'},
              {label: 'Вопросы', href: '#faq'}
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Присоединиться
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-x-0 top-[60px] z-40 bg-white/90 backdrop-blur-md border-b border-gray-200/20 shadow-lg md:hidden transition-all duration-300 ease-in-out',
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
        )}
      >
        <div className="py-4 px-4 space-y-4">
          {[
            {label: 'Преимущества', href: '#features'},
            {label: 'Тарифы', href: '#pricing'},
            {label: 'Как работает', href: '#how-it-works'},
            {label: 'Вопросы', href: '#faq'}
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="block w-full py-3 mt-4 text-center rounded-full bg-primary text-white text-base font-medium hover:bg-primary/90 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Присоединиться
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
