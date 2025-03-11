
import React from 'react';

const Hero = () => {
  return (
    <section className="w-full gradient-bg py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 animate-fade-in">
          Digital Asset <span className="text-wealth-accent">Arbitrage</span> Experts
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          A cutting-edge company specializing in digital asset arbitrage and NFT-driven investment strategies. 
          We leverage advanced DeFi tools and innovative technologies to unlock value in the evolving blockchain ecosystem.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-wealth-medium/30 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-wealth-accent text-3xl font-bold mb-2">523 ETH</h3>
            <p className="text-gray-300">Assets Under Management</p>
          </div>
          <div className="bg-wealth-medium/30 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-wealth-accent text-3xl font-bold mb-2">2 Years</h3>
            <p className="text-gray-300">Zero Loss Days</p>
          </div>
          <div className="bg-wealth-medium/30 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-wealth-accent text-3xl font-bold mb-2">200+</h3>
            <p className="text-gray-300">NFT Collections in Portfolio</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
