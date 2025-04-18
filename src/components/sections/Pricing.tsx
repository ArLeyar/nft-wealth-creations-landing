
import React from 'react';
import PricingCard from '@/components/ui/PricingCard';
import FadeIn from '@/components/animations/FadeIn';
import { useToast } from '@/hooks/use-toast';

const Pricing = () => {
  const { toast } = useToast();

  const handlePlanSelection = (planName: string) => {
    toast({
      title: "Тариф выбран",
      description: `Вы выбрали тариф ${planName}. Мы свяжемся с вами для обсуждения деталей.`,
      duration: 5000,
    });
  };

  const pricingPlans = [
    {
      title: "Free",
      price: "$0",
      description: "Идеально для знакомства с возможностями ИИ в SMM.",
      features: [
        "Рекомендации по публикациям",
        "10% комиссия с рефералов",
        "Базовый доступ к сообществу"
      ],
      commission: {
        percent: 10,
        limit: "Ограниченные рефералы"
      },
      potentialEarnings: "До $100/месяц",
      delay: 100
    },
    {
      title: "Silver",
      price: "$70",
      description: "Для фрилансеров, желающих автоматизировать рутину.",
      features: [
        "150 постов от ИИ в месяц",
        "Публикации в 3 соцсетях",
        "Базовая персонализация",
        "30% комиссия с рефералов",
        "Комиссия с первых 3 рефералов",
        "Поддержка по email"
      ],
      commission: {
        percent: 30,
        limit: "Первые 3 реферала"
      },
      potentialEarnings: "До $500/месяц",
      delay: 200
    },
    {
      title: "Gold",
      price: "$199",
      description: "Для SMM-специалисток, нацеленных на рост и стабильный доход.",
      features: [
        "250 постов от ИИ в месяц",
        "Публикации в 5 соцсетях",
        "Расширенная персонализация",
        "35% комиссия со всех рефералов",
        "Неограниченное число рефералов",
        "Приоритетная поддержка",
        "Ежемесячные отчёты"
      ],
      popular: true,
      commission: {
        percent: 35,
        limit: "Неограниченные рефералы"
      },
      potentialEarnings: "До $2,000/месяц",
      delay: 300
    },
    {
      title: "Platinum",
      price: "$499",
      description: "Максимальная автоматизация для опытных специалисток.",
      features: [
        "350 постов от ИИ в месяц",
        "Публикации во всех соцсетях",
        "Премиум персонализация",
        "40% комиссия со всех рефералов",
        "20% с рефералов второго уровня",
        "Персональный менеджер",
        "Еженедельные стратегические звонки",
        "Продвинутая аналитика"
      ],
      commission: {
        percent: 40,
        limit: "Все уровни + 20% второй уровень"
      },
      potentialEarnings: "До $5,000/месяц",
      delay: 400
    },
    {
      title: "Black",
      price: "$6,990",
      description: "Полная свобода и максимальный пассивный доход.",
      features: [
        "Безлимитный контент от ИИ",
        "Индивидуальные стратегии",
        "Эксклюзивные темы и сюжеты",
        "50% комиссия с прямых рефералов",
        "25% с рефералов второго уровня",
        "10% с рефералов третьего уровня",
        "Пожизненная структура комиссионных",
        "VIP-поддержка 24/7",
        "Ранний доступ к новинкам"
      ],
      commission: {
        percent: 50,
        limit: "Все уровни + 25% второй + 10% третий"
      },
      potentialEarnings: "От $25,000/месяц",
      delay: 500
    }
  ];

  return (
    <section id="pricing" className="section-padding relative bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full mb-3">
              Партнёрские тарифы
            </span>
          </FadeIn>
          <FadeIn delay={200}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Тарифы для SMM-партнеров
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-lg text-gray-600">
              Выберите тариф, соответствующий вашим целям. Каждый включает доступ к поддержке и возможность заработка на рефералах.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 lg:gap-4">
          {pricingPlans.map((plan, index) => (
            <FadeIn key={index} delay={plan.delay} className="h-full">
              <PricingCard
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
                commission={plan.commission}
                potentialEarnings={plan.potentialEarnings}
                onClick={() => handlePlanSelection(plan.title)}
              />
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={600}>
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-center">Решения для агентств</h3>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {[
                {
                  title: "Персональный ИИ-аватар",
                  price: "$10,000",
                  description: "Создание индивидуального ИИ-аватара с вашим фирменным стилем и под ваш бренд."
                },
                {
                  title: "Ведение 6 месяцев",
                  price: "$30,000",
                  description: "Полное управление контентом для вашего агентства на всех платформах полгода."
                },
                {
                  title: "Ведение 12 месяцев",
                  price: "$50,000",
                  description: "Годовая стратегия контента и полное управление с ежеквартальными ревью."
                }
              ].map((plan, index) => (
                <div key={index} className="text-center p-6 rounded-xl border border-gray-100 hover:border-primary/20 transition-all hover:shadow-md">
                  <h4 className="text-xl font-medium mb-2">{plan.title}</h4>
                  <div className="text-2xl font-bold mb-2">{plan.price}</div>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <button 
                    onClick={() => handlePlanSelection(`Enterprise ${plan.title}`)}
                    className="px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200 text-sm font-medium transition-colors"
                  >
                    Связаться с менеджером
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-gray-600">
              Партнёры получают 20% комиссии со всех рефералов агентств независимо от вашего тарифа.
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Pricing;
