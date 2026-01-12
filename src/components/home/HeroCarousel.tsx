import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroMain from '@/assets/Hero/hero.jpg';
import hero1 from '@/assets/Hero/hero (1).jpg';
import hero2 from '@/assets/Hero/hero (2).jpg';
import hero3 from '@/assets/Hero/hero (3).jpg';
import hero4 from '@/assets/Hero/hero (4).jpg';

const slides = [
  {
    id: 1,
    title: 'Swimming Pool Construction & Design',
    image: hero1,
    cta: 'Explore Swimming Pools',
    link: '/services/swimming-pool',
    typingTexts: [
      'Swimming Pool Construction & Design'
    ],
  },
  {
    id: 2,
    title: 'Professional Running Tracks & Athletics',
    image: heroMain,
    cta: 'View Running Tracks',
    link: '/services/multisports-track-and-running-tracks',
    typingTexts: [
      'Professional Running Tracks & Athletics'
    ],
  },
  {
    id: 3,
    title: 'FIFA-Standard Football Turf & Courts',
    image: hero2,
    cta: 'Explore Football Turf',
    link: '/services/football-court-futsal-court',
    typingTexts: [
      'FIFA-Standard Football Turf & Courts'
    ],
  },
  {
    id: 4,
    title: 'Premium Running Tracks & Multi-Sport Facilities',
    image: hero3,
    cta: 'View Track Solutions',
    link: '/services/multisports-track-and-running-tracks',
    typingTexts: [
      'Premium Running Tracks & Multi-Sport Facilities'
    ],
  },
  {
    id: 5,
    title: 'Complete Sports &  Infrastructure Solutions',
    image: hero4,
    cta: 'Contact Us',
    link: '/contact-us',
    typingTexts: [
      'Complete Sports &  Infrastructure Solutions'
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
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  useEffect(() => {
    let startTime = Date.now();
    const duration = 15000; //15 seconds per slide

    setProgress(0);
    setShowCTA(false);
    startTime = Date.now();

    // Show CTA after ~1s so it feels natural
    const ctaTimeout = setTimeout(() => {
      setShowCTA(true);
    }, 1000);

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      // Show thumbnails only in first 2s and last 2s of the 15s cycle
      const previewWindow = 1500;
      const shouldShow =
        elapsed < previewWindow || elapsed > duration - previewWindow;
      setShowThumbnails(shouldShow);
    }, 100); // smooth enough, less CPU

    return () => {
      clearInterval(interval);
      clearTimeout(ctaTimeout);
    };
  }, [activeIndex]);

  const currentSlide = slides[activeIndex];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] pt-16 lg:pt-20">
      {/* Background Slides - Clean images, no color gradients */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-[2000ms] ease-in-out ${index === activeIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover transition-transform duration-[20000ms] ease-out"
              style={{
                transform: index === activeIndex ? 'scale(1.05)' : 'scale(1.15)',
              }}
            />
          </div>

          {/* Additional Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

          {/* Soft Glow Orbs (no pulse to reduce GPU work) */}
          <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-teal-500/15 blur-3xl" />
        </div>
      ))}

      {/* Content - Minimal Text, Maximum Visual Impact */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Title - Bold and Prominent with  Font */}
            <h1 className="font-montreal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-2xl">
              <span className="block bg-gradient-to-r from-white via-emerald-50 to-teal-50 bg-clip-text text-transparent">
                {currentSlide.title.split('&').map((part, index, array) => (
                  <span key={index}>
                    {part.trim()}
                    {index < array.length - 1 && (
                      <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        {' & '}
                      </span>
                    )}
                  </span>
                ))}
              </span>
            </h1>

            {/* CTA Button - Prominent with Text Reveal */}
            <div className={`flex justify-center gap-4 transition-all duration-1000 ease-out ${showCTA
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
              }`}>
              <Link
                to={currentSlide.link || '/products'}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 px-10 py-5 text-base font-bold uppercase tracking-wider text-white shadow-2xl transition-all duration-300 hover:bg-white hover:text-slate-900 hover:scale-110 hover:border-white active:scale-105"
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
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>

              <Link
                to="/contact-us"
                className={`group inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 p-5 text-white shadow-2xl transition-all duration-300 hover:bg-white hover:text-slate-900 hover:scale-110 hover:border-white active:scale-105 ${showCTA ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                style={{
                  transitionDelay: showCTA ? '600ms' : '0ms'
                }}
              >
                <Play className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails - Right Side - Only Current & Next Image */}
      <div
        className={`absolute bottom-24 right-8 z-20 hidden items-end gap-4 transition-opacity duration-500 lg:flex ${showThumbnails ? 'opacity-100' : 'opacity-0'}`}
      >
        {(() => {
          // Show only current slide and next slide
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
            >
              <img
                src={slide.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
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
                      className="h-full bg-white transition-all duration-75 ease-linear rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}
            </button>
          ));
        })()}
      </div>

      {/* Navigation Controls - Bottom Right - Enhanced */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-6 md:right-16">
        {/* Progress Bar - More Visual */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="relative h-2 w-40 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 transition-all duration-75 ease-linear rounded-full shadow-lg"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Navigation Buttons - Enhanced */}
        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            className="group rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md p-4 text-white shadow-xl transition-all duration-300 hover:border-white hover:bg-white/20 hover:scale-110 active:scale-95 min-h-[52px] min-w-[52px] flex items-center justify-center"
            aria-label="Previous Slide"
          >
            <ArrowLeft className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
          </button>
          <button
            onClick={handleNext}
            className="group rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md p-4 text-white shadow-xl transition-all duration-300 hover:border-white hover:bg-white/20 hover:scale-110 active:scale-95 min-h-[52px] min-w-[52px] flex items-center justify-center"
            aria-label="Next Slide"
          >
            <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Slide Indicators - Bottom Center - Enhanced */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setProgress(0);
            }}
            className={`rounded-full transition-all duration-300 backdrop-blur-sm ${activeIndex === index
              ? 'w-12 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 shadow-lg shadow-emerald-500/50'
              : 'w-3 h-3 bg-white/40 hover:bg-white/60 hover:scale-125'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
