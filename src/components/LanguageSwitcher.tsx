
import React, { useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import { LanguageContext } from '@/context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleLanguage} 
      className="rounded-full"
      title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
    >
      <Languages className="w-5 h-5" />
      <span className="ml-2 sr-only">{language === 'en' ? 'AR' : 'EN'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
