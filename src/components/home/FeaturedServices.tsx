"use client"

import { Shield, Leaf, TrendingUp, CheckCircle2 } from "lucide-react"
import { useState, useEffect } from "react"
import featureImg1 from '@/assets/Features/unified (1).jpg';
import featureImg2 from '@/assets/Features/unified (2).jpg';
import featureImg3 from '@/assets/Features/unified (3).jpg';
import featureImg4 from '@/assets/Features/unified (4).jpg';

const features = [
  { icon: Shield, text: "Global Quality Standards", gradient: "from-emerald-500 to-teal-500" },
  { icon: Leaf, text: "Eco-Friendly Materials", gradient: "from-green-500 to-emerald-500" },
  { icon: TrendingUp, text: "State-of-the-Art Tech", gradient: "from-blue-500 to-cyan-500" },
  { icon: CheckCircle2, text: "Proven Excellence", gradient: "from-orange-500 to-red-500" },
]

const featureImages = [
  { src: featureImg1, alt: 'Premium Sports Infrastructure' },
  { src: featureImg2, alt: 'Professional Turf Solutions' },
  { src: featureImg3, alt: 'Quality Sports Facilities' },
  { src: featureImg4, alt: 'Modern Sports Infrastructure' },
]

export function FeaturedServices() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featureImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Visual Content */}
          <div className="relative">
            <div className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]">
              <div className="relative w-full aspect-[640/800] max-w-[640px] mx-auto overflow-hidden rounded-3xl flex items-center justify-center border-4 border-emerald-500/30 shadow-2xl shadow-emerald-500/20">
                {/* Image Carousel */}
                {featureImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                  {featureImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"}`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features Grid */}
          <div className="space-y-8">
            <div>
              <h3 className="font-montreal mb-3 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Sabaysis
                </span>
              </h3>
              <p className="font-gotham text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-400">
                Leading sports infrastructure solutions with unmatched quality and innovation.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl backdrop-blur-sm border border-slate-200 dark:border-slate-800 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-emerald-300 dark:hover:border-emerald-600"
                  >
                    {/* Gradient Background on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                    />

                    <div className="relative z-10">
                      <div
                        className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <p className="font-montreal text-sm font-bold text-slate-900 dark:text-white">{feature.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 rounded-2xl p-6 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/30 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/20">
              <div className="text-center">
                <p className="font-montreal text-3xl font-bold text-emerald-600 dark:text-emerald-400">200+</p>
                <p className="font-gotham text-xs text-slate-600 dark:text-slate-400 mt-1">Projects</p>
              </div>
              <div className="text-center">
                <p className="font-montreal text-3xl font-bold text-teal-600 dark:text-teal-400">98%</p>
                <p className="font-gotham text-xs text-slate-600 dark:text-slate-400 mt-1">Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="font-montreal text-3xl font-bold text-cyan-600 dark:text-cyan-400">10+</p>
                <p className="font-gotham text-xs text-slate-600 dark:text-slate-400 mt-1">Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
