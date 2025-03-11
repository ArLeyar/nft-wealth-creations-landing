
import React from 'react';
import { Shield, TrendingUp, Wallet } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-6">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-display font-bold text-wealth-dark">NFT Wealth Creations</h1>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-wealth-accent" />
            <span className="text-sm font-medium">Proven Track Record</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-wealth-accent" />
            <span className="text-sm font-medium">Arbitrage Strategy</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wallet className="h-5 w-5 text-wealth-accent" />
            <span className="text-sm font-medium">Asset Management</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
