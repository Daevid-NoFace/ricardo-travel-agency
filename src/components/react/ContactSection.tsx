import { useState, type FormEvent, type ChangeEvent } from 'react';
import { FaEnvelope, FaWhatsapp, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

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
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Ingresa un correo válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation, you would send the form data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
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
            Conectemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comienza tu <span className="text-caribbean-blue">aventura cubana</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            ¿Listo para explorar Cuba? Ponte en contacto y diseñemos juntos una experiencia auténtica hecha a tu medida.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ponte en contacto</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              ¿Tienes preguntas sobre Cuba o quieres planificar tu viaje? ¡Estoy aquí para ayudarte! Escríbeme por correo, WhatsApp o mediante el formulario y te responderé lo antes posible.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {/* Email */}
              <a 
                href="mailto:info@cubavibes.com"
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-caribbean-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-caribbean-blue/20 transition-colors">
                  <FaEnvelope className="text-caribbean-blue text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Correo electrónico</h4>
                  <p className="text-caribbean-blue hover:underline">info@cubavibes.com</p>
                  <p className="text-sm text-gray-600 mt-1">Respondemos en menos de 24 horas</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/1234567890?text=%C2%A1Hola!%20Quiero%20planear%20mi%20viaje%20a%20Cuba.%20%C2%BFPodemos%20conversar?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-tropical-green/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-tropical-green/20 transition-colors">
                  <FaWhatsapp className="text-tropical-green text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-tropical-green hover:underline">+1 (234) 567-890</p>
                  <p className="text-sm text-gray-600 mt-1">Respuestas rápidas los 7 días de la semana</p>
                </div>
              </a>

              {/* Business Hours */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-coral text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Horario de atención</h4>
                  <p className="text-gray-700">Lunes a domingo</p>
                  <p className="text-gray-700">8:00 AM - 8:00 PM</p>
                  <p className="text-sm text-gray-600 mt-1">Hora de La Habana (GMT-5)</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Síguenos en redes</h4>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-caribbean-blue text-white rounded-lg flex items-center justify-center hover:bg-ocean-blue transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-coral text-white rounded-lg flex items-center justify-center hover:bg-sunset-orange transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-ocean-blue text-white rounded-lg flex items-center justify-center hover:bg-caribbean-blue transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Enviar un mensaje</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tu nombre *
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
                    placeholder="Juan Pérez"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tu correo electrónico *
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
                    placeholder="juan@ejemplo.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tu mensaje *
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
                    placeholder="Cuéntame sobre la experiencia cubana de tus sueños..."
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-caribbean-blue text-white rounded-lg font-semibold text-lg hover:bg-ocean-blue transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-tropical-green/10 border border-tropical-green rounded-lg">
                    <p className="text-tropical-green font-semibold">
                      ✓ ¡Mensaje enviado con éxito! Te responderé muy pronto.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-500 rounded-lg">
                    <p className="text-red-600 font-semibold">
                      ✗ Algo salió mal. Intenta de nuevo o contáctame directamente.
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