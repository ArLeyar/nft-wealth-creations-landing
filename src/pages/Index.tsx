
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      const elementId = href.slice(1);
      
      // If clicking on "как это работает", scroll to FAQ section
      if (elementId === 'how-it-works') {
        const faqElement = document.getElementById('faq');
        if (faqElement) {
          window.scrollTo({
            top: faqElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
        return;
      }
      
      const element = document.getElementById(elementId);
      
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        
        {/* Link to Pitch Deck */}
        <div className="py-8 bg-primary/5 text-center">
          <Link 
            to="/pitch-deck" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            View NFT Wealth Creations Pitch Deck
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-1 h-4 w-4"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </main>
      
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-1 md:col-span-1">
              <a href="/" className="text-xl font-semibold tracking-tight mb-4 block">
                <span className="text-primary">SMM</span>Freedom
              </a>
              <p className="text-gray-600 max-w-xs mb-4">
                Пассивный доход без вложений. SMM работа переходит в руки AI агентов.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'instagram', 'youtube'].map((platform) => (
                  <a 
                    key={platform} 
                    href={`#${platform}`} 
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary/10 transition-colors"
                    aria-label={platform}
                  >
                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-4">Контакты</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
                    Связаться с нами
                  </a>
                </li>
                <li>
                  <a href="#support" className="text-gray-600 hover:text-primary transition-colors">
                    Поддержка
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} SMMFreedom. Все права защищены.
            </p>
            
            <div className="flex space-x-6">
              {['Условия использования', 'Политика конфиденциальности', 'Cookies'].map((item) => (
                <a key={item} href="#" className="text-gray-500 text-sm hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
