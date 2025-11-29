import { useState, useEffect, useRef } from 'react';

interface GalleryPhoto {
  url: string;
  thumb: string;
  alt: string;
  photographer: string;
  photographerUrl: string;
}

interface GalleryItem {
  title: string;
  description: string;
}

interface GalleryCarouselProps {
  photos: GalleryPhoto[];
  items: GalleryItem[];
}

export default function GalleryCarousel({ photos, items }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Get 8 visible items (2 rows x 4 columns)
  const visiblePhotos = [...photos, ...photos].slice(currentIndex, currentIndex + 8);

  // Auto-advance carousel every 3 seconds with fade effect
  useEffect(() => {
    if (!isHovered && lightboxIndex === null) {
      intervalRef.current = setInterval(() => {
        setIsFading(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % photos.length);
          setIsFading(false);
        }, 500); // Fade duration
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, lightboxIndex, photos.length]);

  const openLightbox = (index: number) => {
    const actualIndex = (currentIndex + index) % photos.length;
    setLightboxIndex(actualIndex);
    // Trigger visibility after mounting to ensure animation plays
    setTimeout(() => {
      setIsLightboxVisible(true);
    }, 10);
  };

  const closeLightbox = () => {
    setIsLightboxVisible(false);
    setTimeout(() => {
      setLightboxIndex(null);
    }, 300);
  };

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (lightboxIndex === null) return;
    
    if (e.key === 'ArrowRight') nextPhoto();
    if (e.key === 'ArrowLeft') prevPhoto();
    if (e.key === 'Escape') closeLightbox();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <>
      {/* Carousel Grid - 2 rows x 4 columns */}
      <div 
        className={`grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 md:gap-6 max-w-7xl mx-auto transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {visiblePhotos.map((photo, index) => {
          const itemIndex = (currentIndex + index) % items.length;
          const item = items[itemIndex];
          
          return (
            <div 
              key={`photo-${currentIndex}-${index}`}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square transform hover:scale-105"
            >
              {/* Image */}
              <img 
                src={photo.url} 
                alt={photo.alt || item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />

              {/* Overlay with hover effect */}
              <div className="absolute inset-0 group-hover:bg-black/60 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white transform group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  {item.description}
                </p>
              </div>

              {/* Zoom icon on hover */}
              <button
                onClick={() => openLightbox(index)}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:scale-110 transform"
                aria-label="Ampliar imagen"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
                </svg>
              </button>

              {/* Photo credit */}
              {photo.photographer !== 'Placeholder' && (
                <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={photo.photographerUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-white/80 hover:text-white"
                  >
                    📷 {photo.photographer}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div 
          className={`fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isLightboxVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className={`absolute top-4 right-4 text-white hover:text-gray-300 transition-all duration-300 z-10 transform hover:scale-110 hover:rotate-90 ${isLightboxVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            aria-label="Cerrar"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className={`absolute left-4 text-white hover:text-gray-300 transition-all duration-300 hover:scale-125 transform z-10 ${isLightboxVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            aria-label="Anterior"
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          {/* Image container */}
          <div 
            className={`relative max-w-6xl max-h-[90vh] flex flex-col items-center transition-all duration-300 transform ${isLightboxVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={photos[lightboxIndex].url}
              alt={photos[lightboxIndex].alt || items[lightboxIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image info */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">
                {items[lightboxIndex].title}
              </h3>
              <p className="text-gray-300 mb-2">
                {items[lightboxIndex].description}
              </p>
              {photos[lightboxIndex].photographer !== 'Placeholder' && (
                <a 
                  href={photos[lightboxIndex].photographerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  📷 Foto por {photos[lightboxIndex].photographer}
                </a>
              )}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className={`absolute right-4 text-white hover:text-gray-300 transition-all duration-300 hover:scale-125 transform z-10 ${isLightboxVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
            aria-label="Siguiente"
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          {/* Counter */}
          <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm transition-all duration-300 ${isLightboxVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {lightboxIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
