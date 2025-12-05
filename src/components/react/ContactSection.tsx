import { useState, type FormEvent, type ChangeEvent, useEffect } from 'react';
import { FaEnvelope, FaWhatsapp, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { ui, defaultLang } from '../i18n/ui';
import emailjs from '@emailjs/browser';
import ReCaptchaWrapper from './ReCaptchaWrapper';

// Hook para obtener el idioma actual desde la URL (SSR compatible)
function useCurrentLang() {
  const [lang, setLang] = useState<keyof typeof ui>(defaultLang);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const [, currentLang] = window.location.pathname.split('/');
      const newLang = (currentLang in ui ? currentLang : defaultLang) as keyof typeof ui;
      setLang(newLang);
    } else {
      setLang(defaultLang);
    }
  }, [defaultLang]);

  return lang;
}

// Hook para traducciones
function useTranslations() {
  const lang = useCurrentLang();
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const t = useTranslations();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.nameRequired');
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t('contact.nameMinLength');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.emailRequired');
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('contact.emailInvalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.messageMinLength');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
          to_email: 'cubabrillante@gmail.com',
        },
        publicKey
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setRecaptchaToken(null);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-sand/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-coral font-semibold text-sm uppercase tracking-wider mb-4 block">
            {t('contact.label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.title')} <span className="text-caribbean-blue">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.getInTouch')}</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              {t('contact.description')}
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {/* Email */}
              <a 
                href="mailto:cubabrillante@gmail.com"
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-caribbean-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-caribbean-blue/20 transition-colors">
                  <FaEnvelope className="text-caribbean-blue text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('contact.email')}</h4>
                  <p className="text-caribbean-blue hover:underline">cubabrillante@gmail.com</p>
                  <p className="text-sm text-gray-600 mt-1">{t('contact.emailResponse')}</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/5351598370?text=%C2%A1Hola!%20Quiero%20planear%20mi%20viaje%20a%20Cuba.%20%C2%BFPodemos%20conversar?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-tropical-green/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-tropical-green/20 transition-colors">
                  <FaWhatsapp className="text-tropical-green text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('contact.whatsapp')}</h4>
                  <p className="text-tropical-green hover:underline">+53 5 1598370</p>
                  <p className="text-sm text-gray-600 mt-1">{t('contact.whatsappResponse')}</p>
                </div>
              </a>

              {/* Business Hours */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-coral text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('contact.businessHours')}</h4>
                  <p className="text-gray-700">{t('contact.mondayToSunday')}</p>
                  <p className="text-gray-700">{t('contact.hours')}</p>
                  <p className="text-sm text-gray-600 mt-1">{t('contact.timezone')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.sendMessage')}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.yourName')} {t('contact.required')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-caribbean-blue focus:border-caribbean-blue'
                    }`}
                    placeholder={t('contact.namePlaceholder')}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.yourEmail')} {t('contact.required')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-caribbean-blue focus:border-caribbean-blue'
                    }`}
                    placeholder={t('contact.emailPlaceholder')}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.yourMessage')} {t('contact.required')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-caribbean-blue focus:border-caribbean-blue'
                    }`}
                    placeholder={t('contact.messagePlaceholder')}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* reCAPTCHA */}
                <div className="flex justify-center">
                  <ReCaptchaWrapper
                    sitekey={import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={handleRecaptchaChange}
                    onExpired={() => setRecaptchaToken(null)}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !recaptchaToken}
                  className="w-full px-8 py-4 bg-caribbean-blue text-white rounded-lg font-semibold text-lg hover:bg-ocean-blue transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? t('contact.sending') : t('contact.sendButton')}
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-tropical-green/10 border border-tropical-green rounded-lg">
                    <p className="text-tropical-green font-semibold">
                      {t('contact.successMessage')}
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-500 rounded-lg">
                    <p className="text-red-600 font-semibold">
                      {t('contact.errorMessage')}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}