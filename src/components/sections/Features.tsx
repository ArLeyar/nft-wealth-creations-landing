
import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import { cn } from '@/lib/utils';
import { 
  Rocket, 
  Network, 
  Users, 
  CheckCircle, 
  XCircle, 
  BarChart
} from 'lucide-react';

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  delay,
  className
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  delay: number;
  className?: string;
}) => (
  <FadeIn delay={delay} className={cn("group", className)}>
    <div className="h-full p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </FadeIn>
);

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: "Деньги на автопилоте",
      description: "AI-агент автоматически публикует интересные посты на аккаунтах SMM-партнера и продвигает сервис. Партнер получает процент с продаж.",
      delay: 100
    },
    {
      icon: Network,
      title: "Сетевой эффект",
      description: "Чем больше партнеров и клиентов платформы, тем более эффективными становятся публикации (AI обучается) = партнеры зарабатываю больше со временем.",
      delay: 200
    },
    {
      icon: Users,
      title: "Не нужно искать клиентов",
      description: "Мы берем на себя весь процесс привлечения и конвертации клиентов. Вы получаете комиссию, не тратя время на продажи и переговоры.",
      delay: 300
    },
    {
      icon: CheckCircle,
      title: "Не хочешь рисковать?",
      description: "Подключи к платформе новый аккаунт соц сети и проследи за результатом.",
      delay: 400
    },
    {
      icon: XCircle,
      title: "Может купить курс, как заработать больше?",
      description: "У нас такое не продается :)",
      delay: 500
    },
    {
      icon: BarChart,
      title: "Продажи VS публикации",
      description: "AI-агент самообучается и создает контент, направленный на достижение продаж.",
      delay: 600
    }
  ];

  return (
    <section id="features" className="section-padding relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full mb-3">
              Наши преимущества
            </span>
          </FadeIn>
          <FadeIn delay={200}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Все, что нужно для настройки пассивного дохода для SMM-специалистов
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-lg text-gray-600">
              Наша платформа берет на себя все аспекты бизнеса, позволяя зарабатывать на автомате. Мы не автоматизируем - мы работаем за вас на все 100%
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>

        <FadeIn delay={700}>
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/10">
            <div className="md:flex items-center justify-between">
              <div className="md:max-w-xl mb-6 md:mb-0">
                <h3 className="text-2xl font-semibold mb-2">Заявка на получение анкеты партнера</h3>
              </div>
              <a
                href="#pricing"
                className="inline-block px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Регистрация
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Features;
