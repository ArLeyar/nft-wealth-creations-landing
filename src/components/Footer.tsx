
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-wealth-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4 text-wealth-accent">NFT Wealth Creations</h3>
            <p className="text-gray-400 max-w-md">
              Professional services for NFT asset management, leveraging algorithmic trading strategy based on arbitrage.
            </p>
          </div>
          
          <div className="md:text-right">
            <h3 className="text-xl font-display font-bold mb-4 text-wealth-accent">Contact</h3>
            <div className="flex items-center md:justify-end mt-2">
              <Mail className="h-5 w-5 text-wealth-accent mr-2" />
              <a href="mailto:contact@nftwealthcreations.com" className="text-gray-300 hover:text-wealth-accent transition-colors">
                contact@nftwealthcreations.com
              </a>
            </div>
            <div className="flex items-center md:justify-end mt-2">
              <MapPin className="h-5 w-5 text-wealth-accent mr-2" />
              <span className="text-gray-300">
                House Of Francis, Room 303, Ile Du Port, Mahe, Seychelles
              </span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} NFT Wealth Creations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
