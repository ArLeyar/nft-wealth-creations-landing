
import React, { useEffect, useRef } from 'react';
import FadeIn from '@/components/animations/FadeIn';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = event;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const bgElement = heroRef.current.querySelector('.hero-bg');
      const contentElement = heroRef.current.querySelector('.hero-content');
      
      if (bgElement instanceof HTMLElement) {
        bgElement.style.transform = `translate(${-x * 15}px, ${-y * 15}px)`;
      }
      
      if (contentElement instanceof HTMLElement) {
        contentElement.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" 
      id="hero"
    >
      <div className="hero-bg absolute inset-0 z-0 transition-transform duration-500 ease-out">
        <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent opacity-50"></div>
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E40AF' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="hero-content grid lg:grid-cols-2 gap-16 items-center transition-transform duration-500 ease-out">
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <FadeIn direction="up" delay={100}>
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full mb-6">
                Smm AI-agent
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={300}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-balance">
                Твои аккаунты будут зарабатывать, <br />
                пока ты заказываешь кофе
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={500}>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 text-balance">
                Soft-Launch платформы 30 апреля 2025г. Лимит на старте - 150 регистраций SMM-специалистов.
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={700}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#pricing"
                  className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  Регистрация
                </a>
                <a
                  href="#faq"
                  className="px-8 py-3 rounded-full bg-white text-gray-800 font-medium hover:bg-gray-50 transition-all border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  Как это работает
                </a>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={900}>
              <div className="mt-10">
                <LaunchCountdown targetDate="2025-04-30" />
              </div>
            </FadeIn>
          </div>
          
          <div className="relative hidden lg:block">
            <FadeIn delay={500}>
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm animate-pulse-slow"></div>
                <div className="absolute inset-4 rounded-xl glass shadow-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-medium text-2xl mb-2">Твой профиль</div>
                    <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4"></div>
                    <div className="w-32 h-3 rounded-full bg-gray-200 mx-auto mb-2"></div>
                    <div className="w-24 h-3 rounded-full bg-gray-200 mx-auto mb-8"></div>
                    
                    <div className="space-y-3 max-w-xs mx-auto px-6">
                      <div className="w-full h-12 rounded-lg bg-gray-200"></div>
                      <div className="w-full h-12 rounded-lg bg-gray-200"></div>
                      <div className="w-full h-12 rounded-lg bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-3xl glass shadow-lg rotate-12 animate-float animate-delay-300 z-10">
              <div className="p-4 flex flex-col h-full justify-between">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium mb-0.5">Свободное время</div>
                  <div className="flex items-center space-x-1">
                    <span className="text-lg font-semibold">+247%</span>
                    <span className="text-xs text-green-500">↑</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-5 -left-10 w-40 h-40 rounded-3xl glass shadow-lg -rotate-6 animate-float animate-delay-500 z-10">
              <div className="p-4 flex flex-col h-full justify-between">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium mb-0.5">Доход в месяц</div>
                  <div className="flex items-center">
                    <span className="text-lg font-semibold">$2,450</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 text-center z-10">
        <div className="inline-flex animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

// Countdown component
const LaunchCountdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
      <p className="text-sm text-gray-600 mb-2">До запуска платформы осталось:</p>
      <div className="grid grid-cols-4 gap-2">
        {Object.entries(timeLeft).map(([key, value]) => (
          <div key={key} className="text-center">
            <div className="bg-primary/10 rounded-lg p-2">
              <span className="text-xl font-bold text-primary">{value}</span>
            </div>
            <span className="text-xs text-gray-500 mt-1 block">
              {key === 'days' ? 'дней' : 
               key === 'hours' ? 'часов' : 
               key === 'minutes' ? 'минут' : 
               'секунд'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
