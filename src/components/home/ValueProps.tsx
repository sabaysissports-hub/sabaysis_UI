import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import footballTurfImg from '@/assets/HomeImages/steptodown.com652452.jpg';
import cricketTurfImg from '@/assets/HomeImages/cricket.jpg';
import swimmingPoolImg from '@/assets/HomeImages/swiming.png';
import multisportTrackImg from '@/assets/HomeImages/running.png';
import sportsNetImg from '@/assets/HomeImages/Sports-Net.jpg';
import landscapeGrassImg from '@/assets/HomeImages/Untitled-design-25.png';
import volleyballImg from '@/assets/Unified S/vollyball.jpg';
import tennisImg from '@/assets/HomeImages/steptodown.com175119.jpg';
import servicesBgImg from '@/assets/HomeImages/homeservicesbg.jpg';
import badmintonImg from '@/assets/Unified S/batminton.jpg';

type ServiceItem = {
  title: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
  bgGradient: string;
  cornerShadow: string;
};

const services: ServiceItem[] = [
  {
    title: 'Box Cricket',
    imageUrl: cricketTurfImg,
    imageAlt: 'Box cricket turf',
    link: '/services/box-cricket',
    bgGradient: 'from-amber-500 to-orange-600',
    cornerShadow: 'shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.5)]',
  },
  {
    title: 'Pickleball Court',
    imageUrl: sportsNetImg,
    imageAlt: 'Pickleball court',
    link: '/services/pickleball-court',
    bgGradient: 'from-yellow-500 to-amber-600',
    cornerShadow: 'shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.5)]',
  },
  {
    title: 'Padel Courts',
    imageUrl: landscapeGrassImg,
    imageAlt: 'Padel courts',
    link: '/services/padel-courts',
    bgGradient: 'from-green-500 to-emerald-600',
    cornerShadow: 'shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.5)]',
  },
  {
    title: 'Football Court',
    imageUrl: footballTurfImg,
    imageAlt: 'Football court',
    link: '/services/football-court',
    bgGradient: 'from-blue-500 to-blue-600',
    cornerShadow: 'shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.5)]',
  },
  {
    title: 'Volleyball Court',
    imageUrl: volleyballImg,
    imageAlt: 'Volleyball court',
    link: '/services/volleyball-court',
    bgGradient: 'from-cyan-500 to-blue-600',
    cornerShadow: 'shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.5)]',
  },
  {
    title: 'Swimming Pool',
    imageUrl: swimmingPoolImg,
    imageAlt: 'Swimming pool',
    link: '/services/swimming-pool',
    bgGradient: 'from-cyan-600 to-teal-700',
    cornerShadow: 'shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.5)]',
  },
  {
    title: 'Running Tracks',
    imageUrl: multisportTrackImg,
    imageAlt: 'Multisport running tracks',
    link: '/services/multisport-running-tracks',
    bgGradient: 'from-purple-500 to-purple-600',
    cornerShadow: 'shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.5)]',
  },
  {
    title: 'Badminton Court',
    imageUrl: badmintonImg,
    imageAlt: 'Badminton court',
    link: '/services/badminton-court',
    bgGradient: 'from-pink-500 to-rose-600',
    cornerShadow: 'shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.5)]',
  },
  {
    title: 'Basketball Court',
    imageUrl: tennisImg,
    imageAlt: 'Basketball court',
    link: '/services/basketball-court',
    bgGradient: 'from-red-500 to-red-600',
    cornerShadow: 'shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.5)]',
  },
  {
    title: 'Tennis Court',
    imageUrl: footballTurfImg,
    imageAlt: 'Tennis court',
    link: '/services/tennis-court',
    bgGradient: 'from-indigo-500 to-indigo-600',
    cornerShadow: 'shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.5)]',
  },
];

export function ValueProps() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      let newItemsPerView = 4;
      if (window.innerWidth < 640) {
        newItemsPerView = 1;
      } else if (window.innerWidth < 1024) {
        newItemsPerView = 2;
      } else if (window.innerWidth < 1536) {
        newItemsPerView = 3;
      }
      setItemsPerView(newItemsPerView);
      setCurrentIndex((prev) => {
        const newMax = Math.max(0, services.length - newItemsPerView);
        return Math.min(prev, newMax);
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, services.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section 
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-visible py-16 md:py-20 lg:py-24"
      style={{
        backgroundImage: `url(${servicesBgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-montreal text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            SERVICES
          </h2>
          <p className="font-gotham text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Professional Construction Services for Sports Grounds, Artificial Football Turf, Cricket Pitches, Volleyball Courts, Basketball Courts, and Badminton Courts.
          </p>
        </div>

        <div className="relative group">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-8 w-8 md:h-10 md:w-10 text-white drop-shadow-lg" />
          </button>
          <div className="overflow-hidden rounded-2xl">
            <div
              ref={carouselRef}
              className="flex -mx-2 transition-transform duration-500 ease-out mb-8 md:mb-0"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {services.map((service) => (
                <Link
                  key={service.title}
                  to={service.link}
                  style={{ width: `${100 / itemsPerView}%` }}
                  className="flex-shrink-0 px-2"
                >
                  <div className="relative overflow-hidden rounded-l group/card cursor-pointer h-60 sm:h-72 md:h-96 lg:h-[400px] xl:h-[450px] max-h-[60vh]">
                    <img
                      src={service.imageUrl}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover transition-all duration-500 group-hover/card:scale-105 group-hover/card:blur-sm"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-10 transition-all duration-500 group-hover/card:from-black/40 group-hover/card:via-black/60 group-hover/card:to-black/90" />

                    <div className={`absolute bottom-0 right-0 w-32 h-32 transition-all duration-500 ${service.cornerShadow} opacity-0 group-hover/card:opacity-100 z-15`} />

                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover/card:opacity-30 transition-all duration-500 z-20`} />

                    <div className="absolute inset-0 flex flex-col justify-between p-6 z-30">
                      <div />
                      <div className="space-y-6">
                        <h3 className="font-montreal text-2xl md:text-3xl font-bold text-white italic">
                          {service.title}
                        </h3>
                        
                        <button 
                          type="button"
                          className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/95 hover:bg-white text-slate-900 font-montreal font-semibold rounded-lg cursor-pointer transition-all duration-300 opacity-0 group-hover/card:opacity-100 transform translate-y-6 group-hover/card:translate-y-0"
                        >
                          <span>KNOW MORE</span>
                          <span className="text-lg">↗</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="h-8 w-8 md:h-10 md:w-10 text-white drop-shadow-lg" />
          </button>

          <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
