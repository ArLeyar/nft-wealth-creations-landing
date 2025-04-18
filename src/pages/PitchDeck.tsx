import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Area, 
  AreaChart, 
  CartesianGrid, 
  Line, 
  LineChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from 'recharts';
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, BarChart4, Users, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PitchDeck = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Data for the yield comparison chart
  const yieldComparisonData = [
    { month: 'Jan', standard: 100, enhanced: 100 },
    { month: 'Feb', standard: 100.29, enhanced: 101.67 },
    { month: 'Mar', standard: 100.58, enhanced: 103.33 },
    { month: 'Apr', standard: 100.88, enhanced: 105.00 },
    { month: 'May', standard: 101.17, enhanced: 106.67 },
    { month: 'Jun', standard: 101.46, enhanced: 108.33 },
    { month: 'Jul', standard: 101.75, enhanced: 110.00 },
    { month: 'Aug', standard: 102.04, enhanced: 111.67 },
    { month: 'Sep', standard: 102.33, enhanced: 113.33 },
    { month: 'Oct', standard: 102.63, enhanced: 115.00 },
    { month: 'Nov', standard: 102.92, enhanced: 116.67 },
    { month: 'Dec', standard: 103.21, enhanced: 118.33 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll-to-top button when page is scrolled down
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['hero', 'performance', 'offer', 'team', 'contact'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // Adjust based on header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/3965db5b-655d-44b3-b211-28964b3b2bf5.png" 
                alt="NWC Logo" 
                className="h-10" 
              />
              <span className="text-lg font-semibold text-gray-100">NFT Wealth Creations</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'performance', label: 'Performance' },
                { id: 'offer', label: 'Investment' },
                { id: 'team', label: 'Team' },
                { id: 'contact', label: 'Contact' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-gray-100 border-b-2 border-gray-300' : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-gray-800/80 text-white z-50 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ChevronUp className="h-5 w-5" />
      </button>

      {/* Hero Section */}
      <section id="hero" className="py-32 pt-36 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900 opacity-20"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)",
            backgroundSize: "50px 50px" 
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-100 animate-fade-in">
            NFT Wealth Creations
          </h1>
          <h2 className="text-2xl text-gray-300 mb-8 animate-fade-in animate-delay-200">Smart NFT & ETH Asset Management</h2>
          <div className="max-w-3xl mx-auto animate-fade-in animate-delay-300">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              NWC is a first ETH-based asset management firm focusing on proprietary trading strategy leverages bid-ask spread inefficiencies, ensuring stable, above-market returns and enhanced with AI instruments.
            </p>
            <div className="mt-8 mb-10">
              <p className="text-xl font-medium mb-6">
                We don't chase hype. We uncover value.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our in-house analytics framework selects only the most asymmetric NFT opportunities — with an average asset-to-ETH value premium of 28%.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
                <div className="bg-gray-800/80 rounded-xl p-6 border border-gray-700 w-full md:w-auto">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">1,300+ ETH</h3>
                  <p className="text-gray-400">in cumulative trading volume</p>
                </div>
                <div className="bg-gray-800/80 rounded-xl p-6 border border-gray-700 w-full md:w-auto">
                  <h3 className="text-xl font-bold text-gray-100 mb-2">Top 5</h3>
                  <p className="text-gray-400">trading volume on Blur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record & Performance */}
      <section id="performance" className="py-20 bg-gray-950 relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%)",
            backgroundSize: "50px 50px" 
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-100">Track Record & Performance</h2>
          <div className="w-24 h-1 bg-gray-500 mx-auto mb-16 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:border-gray-600/30 transition-all shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-200 flex items-center">
                <TrendingUp className="mr-2 h-6 w-6" /> Performance Highlights
              </h3>
              <ul className="space-y-6 text-xl">
                <li className="flex items-start p-3 hover:bg-gray-800/50 rounded-lg transition-colors">
                  <span className="text-gray-300 mr-3 mt-1"><CheckCircle className="h-6 w-6" /></span>
                  <span className="text-gray-200">3 years of active trading – <strong className="text-white">0 loss days</strong></span>
                </li>
                <li className="flex items-start p-3 hover:bg-gray-800/50 rounded-lg transition-colors">
                  <span className="text-gray-300 mr-3 mt-1"><CheckCircle className="h-6 w-6" /></span>
                  <span className="text-gray-200"><strong className="text-white">536 NFTs</strong> under management</span>
                </li>
                <li className="flex items-start p-3 hover:bg-gray-800/50 rounded-lg transition-colors">
                  <span className="text-gray-300 mr-3 mt-1"><CheckCircle className="h-6 w-6" /></span>
                  <span className="text-gray-200">Consistent annualized returns: <strong className="text-white">15% in ETH/NFT</strong></span>
                </li>
                <li className="flex items-start p-3 hover:bg-gray-800/50 rounded-lg transition-colors">
                  <span className="text-gray-300 mr-3 mt-1"><CheckCircle className="h-6 w-6" /></span>
                  <span className="text-gray-200">Full liquidity coverage at all times</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800 hover:border-gray-600/30 transition-all shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-200 flex items-center">
                <BarChart4 className="mr-2 h-6 w-6" /> Key Performance Indicators
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/80 p-5 rounded-xl border border-gray-700 hover:border-gray-600/30 hover:bg-gray-800 transition-all">
                  <div className="flex items-center mb-2">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                    <p className="text-gray-400 text-sm">Total Portfolio</p>
                  </div>
                  <p className="text-2xl font-bold">549.1 ETH</p>
                </div>
                <div className="bg-gray-800/80 p-5 rounded-xl border border-gray-700 hover:border-gray-600/30 hover:bg-gray-800 transition-all">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-5 w-5 text-gray-400 mr-2" />
                    <p className="text-gray-400 text-sm">Portfolio Growth</p>
                  </div>
                  <p className="text-2xl font-bold text-gray-200">+28.44%</p>
                </div>
                <div className="bg-gray-800/80 p-5 rounded-xl border border-gray-700 hover:border-gray-600/30 hover:bg-gray-800 transition-all">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-5 w-5 text-gray-400 mr-2" />
                    <p className="text-gray-400 text-sm">Unrealized Gains</p>
                  </div>
                  <p className="text-2xl font-bold text-gray-200">+132.5 ETH</p>
                </div>
                <div className="bg-gray-800/80 p-5 rounded-xl border border-gray-700 hover:border-gray-600/30 hover:bg-gray-800 transition-all">
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 text-gray-400 mr-2" />
                    <p className="text-gray-400 text-sm">NFTs Count</p>
                  </div>
                  <p className="text-2xl font-bold">5568</p>
                </div>
                <div className="col-span-2 bg-gray-800/80 p-5 rounded-xl border border-gray-700 hover:border-gray-500/30 hover:bg-gray-800 transition-all">
                  <div className="flex items-center mb-2">
                    <BarChart4 className="h-5 w-5 text-gray-400 mr-2" />
                    <p className="text-gray-400 text-sm">Total Profit</p>
                  </div>
                  <p className="text-2xl font-bold text-[#4CAF50]">Over 180 ETH</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16 bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800 hover:border-gray-500/30 transition-all shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-gray-200 flex items-center">
              <TrendingUp className="mr-2 h-6 w-6" /> Performance Chart
            </h3>
            <div className="rounded-xl overflow-hidden p-4 bg-gray-800/50 border border-gray-700">
              <img 
                src="/lovable-uploads/d58523e3-8295-4193-acd8-d2d151c0d944.png" 
                alt="AUM Growth and Performance Chart" 
                className="w-full mx-auto rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Offers */}
      <section id="offer" className="py-20 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-100">Investment Offers</h2>
          <div className="w-24 h-1 bg-gray-500 mx-auto mb-16 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* ETH Investment Offer */}
            <Card className="bg-gray-900/80 border-gray-800 hover:border-gray-600/50 transition-all duration-300 overflow-hidden hover:-translate-y-2 shadow-xl">
              <div className="absolute top-0 right-0 px-4 py-2 bg-gray-700 text-gray-200 font-semibold rounded-bl-lg">
                Limited Offer
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-gray-200">ETH Investment Offer</CardTitle>
                <CardDescription className="text-lg text-gray-300">500 ETH Managed Portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="text-xl font-medium mb-4 text-white">Investment Terms</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400 mr-3">➤</span>
                    <span className="text-gray-200">Up to <strong className="text-white">500 ETH</strong> under management</span>
                  </li>
                  <li className="flex items-start p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400 mr-3">➤</span>
                    <span className="text-gray-200">Fixed <strong className="text-white">20% annual return</strong> in ETH</span>
                  </li>
                  <li className="flex items-start p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400 mr-3">➤</span>
                    <span className="text-gray-200">Minimum commitment: <strong className="text-white">12 months</strong></span>
                  </li>
                  <li className="flex items-start p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400 mr-3">➤</span>
                    <span className="text-gray-200">Structured as a loan agreement</span>
                  </li>
                </ul>
                
                <div className="bg-gray-800/80 rounded-xl p-6 mb-6 border border-gray-700">
                  <h5 className="text-lg font-medium mb-4 text-white">Yield Comparison: 20% in ETH vs Standard ETH Staking (2024)</h5>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={yieldComparisonData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="month" stroke="#888" />
                        <YAxis domain={[95, 125]} stroke="#888" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="standard" 
                          stroke="#5A6978" 
                          strokeWidth={2}
                          name="Standard ETH Staking (3.5%)" 
                          dot={false}
                          activeDot={{ r: 6 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="enhanced" 
                          stroke="#4CAF50" 
                          strokeWidth={2}
                          name="20% in ETH" 
                          dot={false}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-between text-sm mt-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gray-600 rounded-full mr-2"></div>
                      <span className="text-gray-300">Standard ETH Staking: 103.5 ETH</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-[#4CAF50] rounded-full mr-2"></div>
                      <span className="text-gray-300">20% in ETH: 120 ETH</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* NFT Investment Offer */}
            <Card className="bg-gray-900/80 border-gray-800 hover:border-gray-600/50 transition-all duration-300 overflow-hidden hover:-translate-y-2 shadow-xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-gray-200">NFT Investment Offer</CardTitle>
                <CardDescription className="text-lg text-gray-300">NFT Portfolio Management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400 mr-3">➤</span>
                    <span className="text-gray-200">Algorithmic arbitrage strategy on bids & listings</span>
                  </li>
                  <li className="flex items-start p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400 mr-3">➤</span>
                    <span className="text-gray-200">Target return: <strong className="text-white">15% annually</strong> in ETH/NFT</span>
                  </li>
                  <li className="flex items-start p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400 mr-3">➤</span>
                    <span className="text-gray-200">Minimum entry: <strong className="text-white">10 NFTs</strong> from a single collection</span>
                  </li>
                  <li className="flex items-start p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400 mr-3">➤</span>
                    <span className="text-gray-200">Minimum collection value: <strong className="text-white">20 ETH</strong></span>
                  </li>
                  <li className="flex items-start p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400 mr-3">➤</span>
                    <span className="text-gray-200">Max allocation: <strong className="text-white">300 ETH</strong> (as of March 11, 2025)</span>
                  </li>
                  <li className="flex items-start p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400 mr-3">➤</span>
                    <span className="text-gray-200"><strong className="text-white">2 weeks</strong> guaranteed asset liquidity</span>
                  </li>
                </ul>
                
                <div className="bg-gray-800/80 rounded-xl p-6 mb-8 border border-gray-700">
                  <h5 className="text-lg font-medium mb-4 text-white">NFT Strategy Benefits</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-400 mr-3"><CheckCircle className="h-5 w-5" /></span>
                      <span className="text-gray-200">Market-neutral approach minimizes risk exposure</span>
                    </li>
                    <li className="flex items-start p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-400 mr-3"><CheckCircle className="h-5 w-5" /></span>
                      <span className="text-gray-200">Proprietary algorithms identify optimal arbitrage opportunities</span>
                    </li>
                    <li className="flex items-start p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-400 mr-3"><CheckCircle className="h-5 w-5" /></span>
                      <span className="text-gray-200">Real-time market monitoring ensures best execution</span>
                    </li>
                    <li className="flex items-start p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-400 mr-3"><CheckCircle className="h-5 w-5" /></span>
                      <span className="text-gray-200">Risk management protocols for capital preservation</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="py-20 bg-gray-950 relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%)",
            backgroundSize: "50px 50px" 
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-100">Leadership Team</h2>
          <div className="w-24 h-1 bg-gray-500 mx-auto mb-16 rounded-full"></div>
          <p className="text-center text-xl mb-12 text-gray-300">Industry Experts & Proven Operators</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member Cards */}
            <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-gray-600/30 transition-all duration-300 overflow-hidden hover:-translate-y-2 shadow-xl h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-white">Alex Blagirev</CardTitle>
                <CardDescription className="text-gray-300 font-medium">Chief Strategy & Growth Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>15+ years in Innovations, data management, fintech, ecosystem development and partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>Strategic Initiative Officer at SingularityNET (over 25 deals since 2023), top50 token on marketcap</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>Former Executive Sensorium, R3, Alfa Bank, Otrkitie Bank, others</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>Former non-exec Board member of QIwi a largest payment provider in CIS with over 150m$ net profit annually</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-gray-600/30 transition-all duration-300 overflow-hidden hover:-translate-y-2 shadow-xl h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-white">Vladimir Makarov</CardTitle>
                <CardDescription className="text-gray-300 font-medium">Chief Executive Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>Serial tech entrepreneur with 3 successful exits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>Extensive product development experience, 80M+ user reach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>Deep expertise in scaling operations and building effective teams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>Recognized industry leader in blockchain and web3 technologies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 backdrop-blur-md border-gray-800 hover:border-gray-600/30 transition-all duration-300 overflow-hidden hover:-translate-y-2 shadow-xl h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-white">Evgeny Shkarovski</CardTitle>
                <CardDescription className="text-gray-300 font-medium">Chief Trading and Investment Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>Multi-time startup founder & product leader</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>Veteran NFT trader with 100,000+ transactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>Expert in market analysis and trading strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>Proven track record of maximizing returns in volatile markets</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-100">Next Steps – Let's Talk</h2>
          <div className="w-24 h-1 bg-gray-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl mb-12 text-gray-300">Open to discussing strategic investment and partnership opportunities</p>
          
          <div className="max-w-md mx-auto bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-800 hover:border-gray-600/30 transition-all shadow-xl">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-3 bg-gray-800/10 rounded-full">
                <span className="text-gray-300 text-xl">✉</span>
              </div>
              <a 
                href="mailto:contact@nwctrading.xyz" 
                className="text-white hover:text-gray-300 transition-colors text-lg"
              >
                contact@nwctrading.xyz
              </a>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="p-3 bg-gray-800/10 rounded-full">
                <span className="text-gray-300 text-xl">🌐</span>
              </div>
              <a 
                href="https://nwctrading.xyz" 
                className="text-white hover:text-gray-300 transition-colors text-lg"
              >
                https://nwctrading.xyz
              </a>
            </div>
            
            <Button 
              variant="static" 
              className="mt-8 w-full py-6 text-lg rounded-lg shadow-lg shadow-gray-800/20 bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900/50 backdrop-blur-md border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/3965db5b-655d-44b3-b211-28964b3b2bf5.png" 
                alt="NWC Logo" 
                className="h-10" 
              />
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} NFT Wealth Creations. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PitchDeck;
