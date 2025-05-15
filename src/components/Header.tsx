
import React, { useState, useEffect, useContext } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import LanguageSwitcher from './LanguageSwitcher';
import { LanguageContext } from '@/context/LanguageContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'ar';

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    ar: {
      home: 'الرئيسية',
      about: 'عني',
      skills: 'المهارات',
      projects: 'المشاريع',
      contact: 'اتصل بي',
    }
  };

  const t = translations[language];

  const navItems = [
    { label: t.home, href: '#hero' },
    { label: t.about, href: '#about' },
    { label: t.skills, href: '#skills' },
    { label: t.projects, href: '#projects' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container-custom flex items-center justify-between h-20">
        <a href="#hero" className="text-xl font-bold font-serif text-primary">
          Hemdan
        </a>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors ${
                isRTL ? 'ml-4' : 'mr-4'
              }`}
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
        </nav>
        
        {/* Mobile navigation */}
        <div className="flex items-center space-x-4 md:hidden">
          <LanguageSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={isRTL ? "right" : "left"}>
              <nav className="flex flex-col space-y-4 mt-10">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`px-4 py-2 text-foreground/70 hover:text-foreground transition-colors ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
