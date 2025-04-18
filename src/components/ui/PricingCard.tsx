
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  className?: string;
  commission?: {
    percent: number;
    limit: string;
  };
  potentialEarnings: string;
  onClick?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  popular = false,
  className,
  commission,
  potentialEarnings,
  onClick
}) => {
  const isFree = price === "$0";

  return (
    <div 
      className={cn(
        "relative rounded-2xl transition-all duration-300",
        popular ? "shadow-xl scale-105 z-10 border-2 border-primary" : "border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1",
        className
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-0 right-0 text-center">
          <span className="inline-block px-4 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-md">
            Хит продаж
          </span>
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
          {title}
        </h3>
        
        <div className="mb-4">
          <span className="text-3xl md:text-4xl font-bold">{price}</span>
          {!isFree && <span className="text-gray-500 ml-1">/месяц</span>}
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        {commission && (
          <div className="mb-6 p-3 rounded-lg bg-gray-50 border border-gray-100">
            <div className="text-sm font-medium mb-1">Партнёрская комиссия</div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-primary">{commission.percent}%</span>
              <span className="text-sm text-gray-500">{commission.limit}</span>
            </div>
          </div>
        )}
        
        <div className="mb-6 p-3 rounded-lg bg-green-50 border border-green-100">
          <div className="text-sm font-medium mb-1">Потенциальный доход</div>
          <div className="text-lg font-semibold text-green-600">{potentialEarnings}</div>
        </div>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        <button
          onClick={onClick}
          className={cn(
            "w-full py-3 rounded-lg font-medium transition-all",
            popular 
              ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30" 
              : isFree 
                ? "bg-white text-primary border border-primary/50 hover:bg-primary/5"
                : "bg-white text-primary border border-primary/50 hover:bg-primary/5"
          )}
        >
          {isFree ? "Начать бесплатно" : "Выбрать тариф"}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
