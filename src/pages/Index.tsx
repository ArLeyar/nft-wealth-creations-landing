
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PerformanceChart from '../components/PerformanceChart';
import Strategy from '../components/Strategy';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PerformanceChart />
        <Strategy />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
