import React, { useState, useContext } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Mail, Phone, MessageSquare, Send, Languages } from 'lucide-react';
import { LanguageContext } from '@/context/LanguageContext';

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const translations = {
    en: {
      sectionTitle: 'Get In Touch',
      sectionSubtitle: 'Have a project in mind or want to explore opportunities? Let\'s connect!',
      contactInfo: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      followMe: 'Follow Me',
      sendMessage: 'Send Me a Message',
      name: 'Name',
      subject: 'Subject',
      message: 'Message',
      sendButton: 'Send Message via WhatsApp',
      sending: 'Sending...',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      subjectPlaceholder: 'Subject',
      messagePlaceholder: 'Your message',
    },
    ar: {
      sectionTitle: 'تواصل معي',
      sectionSubtitle: 'هل لديك مشروع في ذهنك أو تريد استكشاف الفرص؟ دعنا نتواصل!',
      contactInfo: 'معلومات الاتصال',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      location: 'الموقع',
      followMe: 'تابعني',
      sendMessage: 'أرسل لي رسالة',
      name: 'الاسم',
      subject: 'الموضوع',
      message: 'الرسالة',
      sendButton: 'إرسال رسالة عبر واتساب',
      sending: 'جاري الإرسال...',
      namePlaceholder: 'اسمك',
      emailPlaceholder: 'بريدك الإلكتروني',
      subjectPlaceholder: 'الموضوع',
      messagePlaceholder: 'رسالتك',
    },
  };

  const t = translations[language];
  const isRTL = language === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(language === 'en' ? 'Please fill all required fields' : 'يرجى ملء جميع الحقول المطلوبة');
      setIsSubmitting(false);
      return;
    }
    
    // Prepare WhatsApp message
    const phoneNumber = '201142170980'; // Format: country code + phone number without +
    const messageText = `Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form and show success message
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    toast.success(language === 'en' ? 'WhatsApp opened with your message!' : 'تم فتح واتساب برسالتك!');
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: t.email,
      value: 'hemdannada65@gmail.com',
      href: 'mailto:hemdannada65@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: t.phone,
      value: '+20 1142170980',
      href: 'tel:+201142170980'
    },
    {
      icon: (
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
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      label: t.location,
      value: 'Menoufia, Egypt',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="section-padding" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container-custom">
        <h2 className="section-title">{t.sectionTitle}</h2>
        <p className="section-subtitle">
          {t.sectionSubtitle}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-medium mb-6">{t.contactInfo}</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 hover:text-primary transition-colors"
                >
                  <div className="p-3 bg-secondary rounded-full text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{info.label}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-medium mb-6">{t.followMe}</h3>
              <div className="flex gap-4">
                {['github', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a key={social} href={`#${social}`} className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-white transition-colors">
                    <span className="sr-only">{social}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <Card className={`lg:col-span-2 p-6 ${isRTL ? 'text-right' : ''}`}>
            <h3 className="text-xl font-medium mb-6">{t.sendMessage}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    {t.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t.namePlaceholder}
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    {t.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t.emailPlaceholder}
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  {t.subject}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder={t.subjectPlaceholder}
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  {t.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t.messagePlaceholder}
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? t.sending : t.sendButton}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
