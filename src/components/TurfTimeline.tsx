

const steps = [
  {
    number: "01",
    title: "Check & Prepare the Ground",
    description:
      "We look at the field and make sure the ground is flat and ready for turf.",
  },
  {
    number: "02",
    title: "Build a Strong Base",
    description:
      "We add stones and pack the ground tightly so water drains well and the turf stays firm.",
  },
  {
    number: "03",
    title: "Lay Out the Turf",
    description:
      "We roll out the turf and join the pieces so it looks smooth and even.",
  },
  {
    number: "04",
    title: "Add Soft Padding & Fill",
    description:
      "We put in a soft layer and special sand or rubber to make playing safe and comfy.",
  },
  {
    number: "05",
    title: "Brush & Mark the Field",
    description:
      "We brush the turf to stand up the grass and paint the lines for your sport.",
  },
];

export default function TurfTimeline() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center py-10 relative overflow-hidden">
      <div className="container px-4 mx-auto max-w-screen-xl dynamic-content-placeholder">
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 uppercase">
            How We Build Your Sports Turf & Surface
          </h2>
          <p className="text-lg text-gray-600">
            We follow simple steps to make sure your field lasts long and is always ready to use.
          </p>
        </div>
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-300 via-green-200 to-green-100 hidden md:block -translate-x-1/2 z-0" style={{transform: 'translateX(-50%)'}}></div>
          <div className="flex flex-col gap-10 relative z-10">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={step.number} className="flex flex-col md:flex-row items-center">
                  {/* Left side (content or spacer) */}
                  <div className={`w-full md:w-1/2 ${isLeft ? 'order-1 md:pr-8 md:justify-end flex' : 'order-2 md:pl-8 md:justify-start flex'} ${isLeft ? 'md:text-right' : 'md:text-left'} mb-2 md:mb-0`}>
                    {isLeft ? (
                      <div className="inline-block w-full max-w-lg">
                        <div className="rounded-2xl border bg-white text-card-foreground shadow-xl border-l-4 border-l-green-500 transition-all duration-300 hover:shadow-2xl">
                          <div className="flex flex-col space-y-1.5 p-6">
                            <span className="text-slate-800/85 text-sm font-bold">Step {step.number}</span>
                            <h3 className="text-2xl font-bold uppercase leading-none tracking-tight">{step.title}</h3>
                          </div>
                          <div className="p-6 pt-0">
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="hidden md:block w-full max-w-lg"></div>
                    )}
                  </div>
                  {/* Timeline dot */}
                  <div className="order-2 md:order-2 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white font-oswald font-extrabold text-2xl z-20 shadow-lg border-4 border-white mx-0 md:mx-2">
                    {step.number}
                  </div>
                  {/* Right side (content or spacer) */}
                  <div className={`w-full md:w-1/2 ${!isLeft ? 'order-3 md:pl-8 md:justify-start flex' : 'order-3 md:pr-8 md:justify-end flex'} ${!isLeft ? 'md:text-left' : 'md:text-right'} mb-2 md:mb-0`}>
                    {!isLeft ? (
                      <div className="inline-block w-full max-w-lg">
                        <div className="rounded-2xl border bg-white text-card-foreground shadow-xl border-l-4 border-l-green-500 transition-all duration-300 hover:shadow-2xl">
                          <div className="flex flex-col space-y-1.5 p-6">
                            <span className="text-slate-800/85 text-sm font-bold">Step {step.number}</span>
                            <h3 className="text-2xl font-bold uppercase leading-none tracking-tight">{step.title}</h3>
                          </div>
                          <div className="p-6 pt-0">
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="hidden md:block w-full max-w-lg"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <div className="p-6 rounded-2xl bg-white shadow-md">
            <blockquote>
              <p className="text-xl m-0 italic font-semibold text-gray-900">
                “Your surface is ready for play, rain or shine, season after season.”
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
