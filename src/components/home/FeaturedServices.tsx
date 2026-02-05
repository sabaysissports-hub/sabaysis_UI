"use client"

import { Trophy, Target, Users, Award } from "lucide-react"
import { useState, useEffect } from "react"
import featureImg1 from '@/assets/Features/unified (1).jpg';
import featureImg2 from '@/assets/Features/unified (2).jpg';
import featureImg3 from '@/assets/Features/unified (3).jpg';
import featureImg4 from '@/assets/Features/unified (4).jpg';
import featureBgImg from '@/assets/Unified S/synthetic-lawn-2048px-802551536-2x1-1.webp';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
const featureImages = [
  { src: featureImg1, alt: 'Premium Sports Infrastructure' },
  { src: featureImg2, alt: 'Professional Turf Solutions' },
  { src: featureImg3, alt: 'Quality Sports Facilities' },
  { src: featureImg4, alt: 'Modern Sports Infrastructure' },
]

const stats = [
  { value: "150+", label: "Cities" },
  { value: "10+", label: "Countries" },
  { value: "500+", label: "Projects" },
]

const highlights = [
  { icon: Trophy, text: "Premium Quality Materials", color: "from-emerald-500 to-teal-500" },
  { icon: Target, text: "Precision Engineering", color: "from-blue-500 to-cyan-500" },
  { icon: Users, text: "Expert Team", color: "from-orange-500 to-red-500" },
  { icon: Award, text: "Proven Track Record", color: "from-purple-500 to-pink-500" },
]

export function FeaturedServices() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % featureImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden pt-12 md:pt-16 pb-10 lg:pb-16"
      style={{
        backgroundImage: `url(${featureBgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/85 z-0" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 lg:items-center">
          
          <div className="relative space-y-5">
  
            <div>
              <p className="font-gotham text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                About Us
              </p>
              <h2 className="font-montreal text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Sabaysis Sports Infra
                </span>
              </h2>
            </div>

            <div className="space-y-3">
              <p className="font-gotham text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                A leading sports infrastructure company in India, specializing in cutting-edge artificial turf, 
                premium football fields, cricket facilities, and comprehensive multi-sport complexes. With over 
                <span className="font-bold text-emerald-600 dark:text-emerald-400"> 500+ successful projects </span> 
                across <span className="font-bold text-teal-600 dark:text-teal-400">150+ cities</span> and 
                <span className="font-bold text-cyan-600 dark:text-cyan-400"> 10+ countries</span>, we're trusted 
                by schools, academies, clubs, and professional sports organizations worldwide.
              </p>
              <p className="font-gotham text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                Our expert team delivers end-to-end sports infrastructure solutions including cricket pitches, 
                volleyball courts, basketball courts, badminton courts, padel courts, and pickleball facilities—all 
                engineered for exceptional durability, peak performance, and aesthetic excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-3 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-emerald-300 dark:hover:border-emerald-600"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
                    <div className="relative z-10 flex items-center gap-2">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${highlight.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <p className="font-montreal text-xs font-bold text-slate-900 dark:text-white leading-tight">
                        {highlight.text}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <div className="relative w-full aspect-[4/5] bg-slate-900">
                {featureImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-30 p-6 md:p-8">
                <div className="grid grid-cols-3 gap-4">
                                    {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="font-montreal text-3xl md:text-4xl font-bold text-white mb-1 drop-shadow-lg">
                        {(() => {
                          const match = (stat.value || '').toString().match(/^(\d+)(\+)?$/);
                          const end = match ? parseInt(match[1], 10) : 0;
                          const suffix = match && match[2] ? '+' : '';
                          return <AnimatedCounter end={end} suffix={suffix} duration={900} />;
                        })()}
                      </p>
                      <p className="font-montreal text-sm md:text-base font-medium text-white/90 uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4 z-30 flex gap-2">
                {featureImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentImage 
                        ? "w-6 bg-white" 
                        : "w-1.5 bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
