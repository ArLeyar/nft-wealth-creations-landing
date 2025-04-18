
import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Как работает создание контента?",
      answer: "Создай новый аккаунт в соц сетях, прикрепи партнерскую ссылку, подключись к платформе. Контент, продвигающий нашу платформу автоматически публикуется по оптимальному расписанию, ты получаешь партнерские выплаты"
    },
    {
      question: "Как зарабатывать в качестве партнёра?",
      answer: "Вы получаете комиссию, когда люди регистрируются по вашей реферальной ссылке. В зависимости от вашего тарифа, вы можете получать доход как от привлечения других партнеров, так и от привлечения корпоративных клиентов, которые заказывают нам создание и продвижение AI- аватаров. Ставки комиссии варьируются от 3% до 50%."
    },
    {
      question: "Это финансовая пирамида или сетевой маркетинг?",
      answer: "Нет, мы — продюссерский центр, который продвигает реальные услуги - ИИ-генерациею контента и продвижение в соцсетях. Все партнёры или клиенты получают реальную ценность, независимо от того, приглашают они других или нет."
    },
    {
      question: "Какой доступ нужен к моим соцсетям?",
      answer: "Только разрешения на публикацию через официальные API платформ. Мы никогда не запрашиваем пароли, и вы сохраняете полный контроль. Доступ можно отозвать в любой момент."
    },
    {
      question: "Как быстро я увижу результаты?",
      answer: "Для получения первых продаж обычно уходит от 1 до 3 месяцев. Заработок сильно зависит от тарифа. Мы делаем все, чтобы наш контент был интересен и обладал вирусным потенциалом."
    },
    {
      question: "Могу ли я просматривать контент до публикации?",
      answer: "Да, тарифы выше базового включают функцию предпросмотра. Ты можешь добавлять в ленту любой дополнительный контент или изменять тот, который создает система автоматически."
    },
    {
      question: "Что если я захочу отменить подписку?",
      answer: "Отменить можно в любой момент без штрафов. При отмене мы сразу прекращаем публикации в ваших аккаунтах, Комиссионные от ваших рефералов будут начисляться до конца срока действия тарифа. Некоторые тарифы предусматривают получение комиссионных и после окончания срока подписки"
    },
    {
      question: "Какие соцсети поддерживаются?",
      answer: "Сейчас мы поддерживаем Instagram, TikTok, YouTube, Twitter и Facebook. Дополнительные платформы могут быть доступны в зависимости от вашего тарифа."
    },
    {
      question: "Чем вы отличаетесь от платформ автопостинга контента?",
      answer: "У нас нет сложных интерфейсов, наш продукт идеально подойдет для тех клиентов, кто не хочет «менеджерить» SMM, а хочет, чтобы оно само просто «работало». Сейчас на рынке нет таких продуктов. В следующей версии платформы появится больше возможностей для настроек."
    },
    {
      question: "Получается, я должен рекламировать вашу платформу и отдавать вам клиентов?",
      answer: "Получается именно так! Если вы большой молодец и зарабатываете много, наша платформа пока не для вас. Если у вас проблемы с постоянством дохода и хочется получать пассивный заработок за счет технологий, которые все равно рано или поздно «переедут» всех специалистов, до добро пожаловать!"
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full mb-3">
              Вопросы и ответы
            </span>
          </FadeIn>
          <FadeIn delay={200}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Часто задаваемые вопросы
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-lg text-gray-600">
              Всё, что нужно знать о нашей партнёрской программе и как она работает.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={400}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left font-medium data-[state=open]:bg-gray-50">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Остались вопросы? Мы всегда на связи.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium transition-colors"
              >
                Написать в поддержку
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
