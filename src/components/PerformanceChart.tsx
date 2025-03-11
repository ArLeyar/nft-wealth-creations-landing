
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'May 24', profit: 12 },
  { month: 'Jun 24', profit: 18 },
  { month: 'Jul 24', profit: 15 },
  { month: 'Aug 24', profit: 20 },
  { month: 'Sep 24', profit: 19 },
  { month: 'Oct 24', profit: 8 },
  { month: 'Nov 24', profit: 13 },
  { month: 'Dec 24', profit: 19 },
  { month: 'Jan 25', profit: 20 },
  { month: 'Feb 25', profit: 18 },
  { month: 'Mar 25', profit: 9 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-wealth-dark p-4 rounded-md shadow-lg border border-wealth-accent/20">
        <p className="font-display text-wealth-accent">{`${label}`}</p>
        <p className="text-white font-medium">{`${payload[0].value} ETH`}</p>
      </div>
    );
  }

  return null;
};

const PerformanceChart = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-wealth-dark mb-4">Trading Performance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our arbitrage strategy consistently delivers positive returns by capitalizing on the spread between offers and listings.
          </p>
        </div>
        
        <div className="bg-wealth-light p-6 rounded-xl shadow-md border border-gray-100">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="month" stroke="#64748B" />
                <YAxis stroke="#64748B" />
                <Tooltip content={<CustomTooltip />} />
                <defs>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="profit" 
                  stroke="#6366F1" 
                  fillOpacity={1} 
                  fill="url(#colorProfit)" 
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500">
            Monthly profit/loss in ETH
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceChart;
