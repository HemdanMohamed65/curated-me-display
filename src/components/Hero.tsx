
import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LanguageContext } from "@/context/LanguageContext";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';

  const translations = {
    en: {
      greeting: "Hello, I'm",
      role: "BackEnd .NET Developer",
      description: "I create efficient and scalable applications with a focus on .NET technologies and backend development.",
      viewWork: "View My Work",
      contactMe: "Contact Me",
      scrollDown: "Scroll Down"
    },
    ar: {
      greeting: "مرحباً، أنا",
      role: "مطور BackEnd .NET",
      description: "أقوم بإنشاء تطبيقات فعالة وقابلة للتوسع مع التركيز على تقنيات .NET وتطوير الخادم.",
      viewWork: "عرض أعمالي",
      contactMe: "تواصل معي",
      scrollDown: "مرر لأسفل"
    }
  };

  const t = translations[language];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-24" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container-custom">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Circular Profile Image */}
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl bg-muted">
              <img
                src="/lovable-uploads/25d8c34a-d7a9-45bd-b35f-757a90c0f6d4.png"
                alt="Hemdan Mohamed"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Decorative Ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-primary/30 animate-pulse"></div>
          </div>

          {/* Content */}
          <div className="animate-fade-in max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">{t.greeting}</span>
              <br />
              <span className="relative inline-block">
                Hemdan Mohamed
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30"></span>
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              {t.role}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              {t.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">
                {t.viewWork}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('#contact', '_self')}
              >
                {t.contactMe}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">{t.scrollDown}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
