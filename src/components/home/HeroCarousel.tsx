import { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroMain from '@/assets/Hero/hero.jpg';
import hero1 from '@/assets/Hero/hero (1).jpg';
import hero3 from '@/assets/Hero/herofootball.jpg';
import hero4 from '@/assets/Hero/hero (4).jpg';
import cricketImg from '@/assets/Hero/herocric.jpg';
import padelImg from '@/assets/pedel/padelHero.jpg';
import pickleballImg from '@/assets/Hero/heropickle.jpg';

const slides = [

    {
    id: 7,
    title: 'Complete Sports & Infrastructure Solutions',
    image: hero4,
    cta: 'Contact Us',
    link: '/contact-us',
    typingTexts: [
      'Complete Sports & Infrastructure Solutions'
    ],
  },
  {
    id: 3,
    title: 'World-Class Padel Court Construction',
    image: padelImg,
    cta: 'Explore Padel Courts',
    link: '/padel-courts',
    typingTexts: [
      'World-Class Padel Court Construction'
    ],
  },
  {
    id: 1,
    title: 'Professional Cricket Box & Turf Solutions',
    image: cricketImg,
    cta: 'Explore Cricket Facilities',
    link: '/products/cricket-turf',
    typingTexts: [
      'Professional Cricket Box & Turf Solutions'
    ],
  },
  {
    id: 2,
    title: 'Premium Pickleball Courts & Facilities',
    image: pickleballImg,
    cta: 'View Pickleball Courts',
    link: '/products',
    typingTexts: [
      'Premium Pickleball Courts & Facilities'
    ],
  },
  {
    id: 4,
    title: 'Swimming Pool Construction & Design',
    image: hero1,
    cta: 'Explore Swimming Pools',
    link: '/services/swimming-pool',
    typingTexts: [
      'Swimming Pool Construction & Design'
    ],
  },
  {
    id: 5,
    title: 'Professional Running Tracks & Athletics',
    image: heroMain,
    cta: 'View Running Tracks',
    link: '/services/multisport-running-tracks',
    typingTexts: [
      'Professional Running Tracks & Athletics'
    ],
  },
  {
    id: 6,
    title: 'FIFA-Standard Football Turf & Grounds',
    image: hero3,
    cta: 'Explore Football Turf',
    link: '/services/football-court',
    typingTexts: [
      'FIFA-Standard Football Turf & Grounds'
    ],
  },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
    setShowCTA(false);
    setShowThumbnails(true);
  };

  useEffect(() => {
    const duration = 4000;
    
    // Fade in CTA after delay
    const ctaTimer = setTimeout(() => setShowCTA(true), 700);

    // Hide thumbnails in the middle of the transition to reduce visual clutter
    const thumbHideTimer = setTimeout(() => setShowThumbnails(false), 1000);
    const thumbShowTimer = setTimeout(() => setShowThumbnails(true), duration - 1000);

    // Start progress bar animation (CSS will handle the smooth transition)
    const progressTimer = setTimeout(() => setProgress(100), 50);

    // Transition to next slide
    const nextSlideTimer = setTimeout(() => {
      handleNext();
    }, duration);

    return () => {
      clearTimeout(ctaTimer);
      clearTimeout(thumbHideTimer);
      clearTimeout(thumbShowTimer);
      clearTimeout(progressTimer);
      clearTimeout(nextSlideTimer);
    };
  }, [activeIndex]);

  const currentSlide = slides[activeIndex];

  return (
    <section className="relative w-full overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)]" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', perspective: '1000px' }}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-2000 ease-in-out ${index === activeIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          style={{ 
            transform: 'translateZ(0)',
            willChange: index === activeIndex ? 'opacity' : 'auto',
            contain: 'layout style paint'
          }}
        >
          <div className="absolute inset-0" style={{ transform: 'translateZ(0)' }}>
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover transition-transform duration-20000 ease-out"
              loading={index === 0 ? 'eager' : 'lazy'}
              style={{
                transform: index === activeIndex ? 'scale(1.05) translateZ(0)' : 'scale(1.15) translateZ(0)',
                willChange: index === activeIndex ? 'transform' : 'auto',
                backfaceVisibility: 'hidden'
              }}
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" style={{ transform: 'translateZ(0)' }} />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-transparent to-transparent" style={{ transform: 'translateZ(0)' }} />
        </div>
      ))}

      <div className="absolute inset-0 z-10 flex items-center justify-center" style={{ transform: 'translateZ(0)' }}>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center" style={{ willChange: 'auto' }}>
            <h1 className="font-montreal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-2xl">
              <span className="block bg-linear-to-r from-white via-emerald-50 to-teal-50 bg-clip-text text-transparent">
                {currentSlide.title.split('&').map((part, index, array) => (
                  <span key={index}>
                    {part.trim()}
                    {index < array.length - 1 && (
                      <span className="bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        {' & '}
                      </span>
                    )}
                  </span>
                ))}
              </span>
            </h1>

            <div 
              className={`flex justify-center gap-4 mt-8 md:mt-10 transition-all duration-1000 ease-out ${showCTA
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transform: `translateY(${showCTA ? '0' : '2rem'}) translateZ(0)`,
                willChange: showCTA ? 'auto' : 'transform, opacity'
              }}
            >
              <Link
                to={currentSlide.link || '/products'}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 px-10 py-5 text-base font-bold uppercase tracking-wider text-white shadow-2xl transition-all duration-300 hover:bg-white hover:text-slate-900 hover:scale-110 hover:border-white active:scale-105"
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
              >
                <span className="relative z-10 font-montreal overflow-hidden">
                  <span className="inline-block transition-transform duration-700 ease-out" style={{
                    transform: showCTA ? 'translateY(0)' : 'translateY(100%)',
                    transitionDelay: showCTA ? '200ms' : '0ms'
                  }}>
                    {currentSlide.cta}
                  </span>
                </span>
                <ArrowRight className={`relative z-10 h-6 w-6 transition-all duration-700 ease-out group-hover:translate-x-2 ${showCTA ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`} style={{
                    transitionDelay: showCTA ? '400ms' : '0ms'
                  }} />
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500/20 to-teal-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>

              <Link
                to="/contact-us"
                className={`group inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 p-5 text-white shadow-2xl transition-all duration-300 hover:bg-white hover:text-slate-900 hover:scale-110 hover:border-white active:scale-105 ${showCTA ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                style={{
                  transitionDelay: showCTA ? '600ms' : '0ms',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <Play className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-24 right-8 z-20 hidden items-end gap-4 transition-opacity duration-500 lg:flex ${showThumbnails ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: 'translateZ(0)', willChange: 'opacity' }}
      >
        {(() => {
          const currentSlideIndex = activeIndex;
          const nextSlideIndex = (activeIndex + 1) % slides.length;
          const visibleSlides = [
            { slide: slides[currentSlideIndex], index: currentSlideIndex },
            { slide: slides[nextSlideIndex], index: nextSlideIndex }
          ];

          return visibleSlides.map(({ slide, index }) => (
            <button
              key={slide.id}
              onClick={() => {
                setActiveIndex(index);
                setProgress(0);
              }}
              className={`group relative h-40 w-28 overflow-hidden rounded-xl border-2 transition-all duration-500 hover:w-36 ${activeIndex === index
                ? 'border-white opacity-100 scale-100 ring-4 ring-emerald-400/50 shadow-2xl shadow-emerald-500/30'
                : 'border-white/30 opacity-60 hover:opacity-100 hover:border-white/60'
                }`}
              style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
            >
              <img
                src={slide.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
                loading="lazy"
                style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
              />
              <div
                className={`absolute inset-0 transition-all duration-300 ${activeIndex === index
                  ? 'bg-black/50'
                  : 'bg-black/60 group-hover:bg-black/40'
                  }`}
              />
              {activeIndex === index && (
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="h-1.5 w-full rounded-full bg-white/40 overflow-hidden backdrop-blur-sm">
                    <div
                      className={`h-full bg-white rounded-full origin-left ${progress === 100 ? 'transition-transform duration-3900 ease-linear' : 'transition-none'}`}
                      style={{ 
                        transform: `scaleX(${progress / 100}) translateZ(0)`,
                        backfaceVisibility: 'hidden'
                      }}
                    />
                  </div>
                </div>
              )}
            </button>
          ));
        })()}
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3" style={{ transform: 'translateX(-50%) translateZ(0)' }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setProgress(0);
            }}
            className={`rounded-full transition-all duration-300 backdrop-blur-sm ${activeIndex === index
              ? 'w-12 h-3 bg-linear-to-r from-emerald-400 to-teal-400 shadow-lg shadow-emerald-500/50'
              : 'w-3 h-3 bg-white/40 hover:bg-white/60 hover:scale-125'
              }`}
            aria-label={`Go to slide ${index + 1}`}
            style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
          />
        ))}
      </div>
    </section>
  );
}
