import { CheckCircle2, ArrowRight, Wrench, Lightbulb, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';
import featureOne from '@/assets/Unified S/Untitled-design-2023-12-23T101940.389.webp';
import whyUsBg from '@/assets/HomeImages/whyusbg.avif';

export function UnifiedSportsTurf() {
  const services = [
    { icon: Lightbulb, title: 'Consultation' },
    { icon: Hammer, title: 'Construction' },
    { icon: CheckCircle2, title: 'Installation' },
    { icon: Wrench, title: 'Maintenance' },
  ];

  return (
    <section 
      className="w-full py-10 lg:py-24 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${whyUsBg})`,
      }}
    >
      <div className="absolute inset-0 bg-slate-900/5"></div>
      <div className="w-full px-4 mx-auto max-w-screen-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 place-content-stretch">
          
          {/* LEFT CARD - WHY US */}
          <div className="w-full bg-[#235c4c] p-5 lg:p-10 h-full rounded-lg flex flex-col justify-between">
            <div>
              <h2 className="font-normal text-sm text-white mb-4 uppercase tracking-widest">WHY US</h2>
              <h3 className="text-white font-bold uppercase text-2xl lg:text-3xl mb-6 leading-tight">
                Top Quality Sports Systems Tailored To Your Needs
              </h3>
              <p className="text-white font-light text-lg lg:text-xl leading-relaxed">
                We specialize in FIFA-approved turfs, artificial grass, and multi-sport surfaces. Trusted by clients nationwide for premium quality and durability.
              </p>
            </div>
            <div>
              <Link
                to="/about-us"
                className="rounded-link border-2 border-white text-white mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full hover:bg-white hover:text-[#235c4c] transition-all"
              >
                Know More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 gap-4 place-content-stretch">
            
            {/* CTA CARD */}
            <div
              className="bg-white w-full p-4 lg:p-10 rounded-lg flex flex-row justify-between relative min-h-[280px] overflow-hidden"
              style={{
                backgroundImage: `url("https://www.meckavosports.com/wp-content/themes/thememeckavo/assets/theme_elements/images/background/Group_7.png")`,
              }}
            >
              <div className="pr-5 xl:pr-0 flex flex-col flex-wrap gap-6 lg:gap-10 justify-between relative h-full w-full lg:w-5/12 z-10">
                <div>
                  <h2 className="capitalize font-medium text-xl lg:text-2xl leading-tight text-slate-900 mb-2">
                    Ready to build your sports facility?
                  </h2>
                  <p className="text-slate-600 text-sm lg:text-base">Get a free consultation today</p>
                </div>
                <div>
                  <Link
                    to="/contact-us"
                    className="rounded-link bg-slate-900 text-white mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full hover:bg-slate-800 transition-colors"
                  >
                    Contact Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              {/* IMAGE */}
              <div className="absolute right-0 top-0 bottom-0 w-5/12 lg:w-6/12 rounded-r-lg overflow-hidden">
                <img
                  src={featureOne}
                  alt="Artificial turf football player"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* SERVICES GRID */}
            <div className="rounded-s relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch justify-stretch">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="grow flex flex-col text-center items-center bg-white rounded-lg p-4 gap-3"
                  >
                    <span className="flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-slate-700" strokeWidth={1.5} />
                    </span>
                    <span className="font-bold text-sm italic text-green-800 uppercase">
                      {service.title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}