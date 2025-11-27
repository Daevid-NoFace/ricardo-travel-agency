import { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  country: string;
  rating: number;
  review: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "Estados Unidos",
    rating: 5,
    review: "¡Una experiencia absolutamente increíble! El conocimiento de nuestro guía sobre la historia y cultura cubana hizo que cada momento fuera especial. El itinerario personalizado fue perfecto para nuestra familia, y descubrimos lugares que nunca habríamos encontrado por nuestra cuenta. ¡Muy recomendado!",
    image: "SJ"
  },
  {
    id: 2,
    name: "Marco Rossi",
    country: "Italia",
    rating: 5,
    review: "Cuba superó todas mis expectativas, gracias a este increíble guía local. Desde las vibrantes calles de La Habana hasta los pacíficos campos de tabaco de Viñales, cada día fue una aventura. Las experiencias auténticas y las conexiones locales hicieron este viaje inolvidable.",
    image: "MR"
  },
  {
    id: 3,
    name: "Emma Thompson",
    country: "Reino Unido",
    rating: 5,
    review: "He viajado extensamente, pero Cuba con este guía fue verdaderamente especial. La atención al detalle, el acceso privilegiado a lugares locales y la calidez genuina me hicieron sentir como si estuviera viajando con un amigo en lugar de un operador turístico. ¡Simplemente excepcional!",
    image: "ET"
  },
  {
    id: 4,
    name: "Hans Mueller",
    country: "Alemania",
    rating: 5,
    review: "Profesional, conocedor e increíblemente amigable. Nuestro guía nos ayudó a navegar Cuba con facilidad y nos mostró el verdadero corazón de la isla. Las experiencias culturales y las perspectivas históricas fueron fascinantes. ¡Ya estamos planeando nuestro próximo viaje!",
    image: "HM"
  },
  {
    id: 5,
    name: "Sophie Dubois",
    country: "Francia",
    rating: 5,
    review: "¡Magnífique! La combinación perfecta de aventura, cultura y relajación. La pasión de nuestro guía por Cuba fue contagiosa, y su experiencia local abrió puertas a experiencias auténticas que atesoraremos para siempre. ¡La mejor experiencia de viaje que hemos tenido!",
    image: "SD"
  },
  {
    id: 6,
    name: "Carlos Méndez",
    country: "España",
    rating: 5,
    review: "¡Un viaje extraordinario por Cuba! El servicio personalizado, las perspectivas locales y las experiencias cuidadosamente seleccionadas hicieron que este viaje fuera excepcional. Desde clases de salsa hasta días de playa, todo estuvo perfectamente organizado. ¡Absolutamente recomendado!",
    image: "CM"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToTestimonial = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-sand/20 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-coral font-semibold text-sm uppercase tracking-wider mb-4 block">
            Lo que dicen los viajeros
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Historias reales de <span className="text-caribbean-blue">alegres viajeros</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            No solo creemos en la magia de Cuba, sino que también creemos en la magia de tus historias. Escucha de los que han experimentado la magia de Cuba con nosotros.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-caribbean-blue/10">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className={`relative transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-caribbean-blue to-ocean-blue flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {current.image}
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <FaStar key={i} className="text-sunset-orange text-xl" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-lg leading-relaxed text-center mb-6 italic">
                "{current.review}"
              </p>

              {/* Name and Country */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900">{current.name}</h4>
                <p className="text-gray-600">{current.country}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
              <button
                onClick={prevTestimonial}
                className="pointer-events-auto w-12 h-12 rounded-full bg-caribbean-blue text-white hover:bg-ocean-blue transition-colors shadow-lg flex items-center justify-center -ml-6 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous testimonial"
                disabled={isAnimating}
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="pointer-events-auto w-12 h-12 rounded-full bg-caribbean-blue text-white hover:bg-ocean-blue transition-colors shadow-lg flex items-center justify-center -mr-6 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next testimonial"
                disabled={isAnimating}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-caribbean-blue w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4 text-gray-600">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
}