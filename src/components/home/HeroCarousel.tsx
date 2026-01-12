import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: 'FIFA-Standard Turf',
    gradient: 'from-emerald-600/90 via-teal-600/80 to-cyan-600/70',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=2000&q=80',
    cta: 'Explore Products',
  },
  {
    id: 2,
    title: 'Sports Infrastructure',
    gradient: 'from-blue-600/90 via-indigo-600/80 to-purple-600/70',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=2000&q=80',
    cta: 'View Services',
  },
  {
    id: 3,
    title: 'Premium Solutions',
    gradient: 'from-orange-600/90 via-red-600/80 to-pink-600/70',
    image: 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=2000&q=80',
    cta: 'Get Started',
  },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(false);

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
    const duration = 8000;

    setProgress(0);
    startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      const showThumbnailStart = 1500;
      const showThumbnailEnd = duration - 1500;
      const shouldShow = elapsed < showThumbnailStart || elapsed > showThumbnailEnd;
      setShowThumbnails(shouldShow);

      if (elapsed >= duration) {
        handleNext();
        startTime = Date.now();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const currentSlide = slides[activeIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Background Slides with Gradient Overlays */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover transition-transform duration-[12000ms] ease-out"
              style={{
                transform: index === activeIndex ? 'scale(1.05)' : 'scale(1.15)',
              }}
            />
          </div>

          {/* Dynamic Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />

          {/* Additional Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

          {/* Animated Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl animate-pulse delay-1000" />
        </div>
      ))}

      {/* Content - Minimal Text, Maximum Visual Impact */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Title - Large and Bold */}
            <h1 className="font-montreal mb-8 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-2xl">
              <span className="block">
                {currentSlide.title.split(' ').map((word, index, array) => {
                  const isLastWord = index === array.length - 1;
                  return (
                    <span
                      key={index}
                      className={isLastWord
                        ? 'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent'
                        : 'bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent'
                      }
                    >
                      {word}
                      {index < array.length - 1 && ' '}
                    </span>
                  );
                })}
              </span>
            </h1>

            {/* CTA Button - Prominent */}
            <div className="flex justify-center gap-4">
              <Link
                to="/products"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 px-10 py-5 text-base font-bold uppercase tracking-wider text-white shadow-2xl transition-all duration-300 hover:bg-white hover:text-slate-900 hover:scale-110 hover:border-white active:scale-105"
              >
                <span className="relative z-10 font-montreal">{currentSlide.cta}</span>
                <ArrowRight className="relative z-10 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>

              <button className="group inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 p-5 text-white shadow-2xl transition-all duration-300 hover:bg-white hover:text-slate-900 hover:scale-110 hover:border-white active:scale-105">
                <Play className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails - Right Side - More Visual */}
      <div
        className={`absolute bottom-24 right-8 z-20 hidden items-end gap-4 transition-opacity duration-500 lg:flex ${showThumbnails ? 'opacity-100' : 'opacity-0'}`}
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => {
              setActiveIndex(index);
              setProgress(0);
            }}
            className={`group relative h-64 w-40 overflow-hidden rounded-xl border-2 transition-all duration-500 hover:w-52 ${activeIndex === index
              ? 'border-white opacity-100 scale-100 ring-4 ring-emerald-400/50 shadow-2xl shadow-emerald-500/30'
              : 'border-white/30 opacity-60 hover:opacity-100 hover:border-white/60'
              }`}
          >
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
            />
            <div className={`absolute inset-0 transition-all duration-300 ${activeIndex === index
              ? `bg-gradient-to-t ${slide.gradient} opacity-40`
              : 'bg-black/60 group-hover:bg-black/40'
              }`} />
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
        ))}
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
