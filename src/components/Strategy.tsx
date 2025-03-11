
import React from 'react';
import { ArrowRightLeft, LineChart, ShieldCheck } from 'lucide-react';

const Strategy = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-wealth-dark mb-4">Our Investment Strategy</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            By optimizing asset flows and creating wealth opportunities, we help clients capitalize on the future of decentralized finance and digital collectibles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-full bg-wealth-accent/10 flex items-center justify-center mb-6">
              <ArrowRightLeft className="h-7 w-7 text-wealth-accent" />
            </div>
            <h3 className="text-xl font-display font-bold mb-4 text-wealth-dark">Arbitrage Trading</h3>
            <p className="text-gray-600">
              Our strategy is based on the spread between offers and listings, ensuring consistent returns with minimal risk exposure.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-full bg-wealth-accent/10 flex items-center justify-center mb-6">
              <ShieldCheck className="h-7 w-7 text-wealth-accent" />
            </div>
            <h3 className="text-xl font-display font-bold mb-4 text-wealth-dark">Proven Track Record</h3>
            <p className="text-gray-600">
              2 years of trading with zero loss days demonstrates our commitment to risk management and sustainable growth.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-full bg-wealth-accent/10 flex items-center justify-center mb-6">
              <LineChart className="h-7 w-7 text-wealth-accent" />
            </div>
            <h3 className="text-xl font-display font-bold mb-4 text-wealth-dark">Algorithmic Trading</h3>
            <p className="text-gray-600">
              Our proprietary algorithms identify and execute opportunities across more than 200 NFT collections in our portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
