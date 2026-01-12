export function PrimaryCTA() {
  return (
    <section className="overflow-hidden rounded-3xl border border-emerald-700 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: copy */}
        <div className="max-w-xl space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.5em] text-emerald-600">
            Let&apos;s Build Your Next Arena
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Partner with Sabaysis for world‑class sports &amp; outdoor infrastructure.
          </h2>
          <p className="text-sm text-slate-600">
            Whether you&apos;re planning a football turf, cricket facility, multisport complex, or landscaped open
            space, our team brings end‑to‑end expertise—from design and material selection to installation and
            maintenance.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-5 rounded-2xl p-5 backdrop-blur-sm">
          <div className="space-y-2 text-sm text-slate-600">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
              Talk to our team
            </p>
            <p>
              Share your project requirements and we&apos;ll get back within
              <span className="font-semibold"> 1–2 business days </span>
              with tailored proposals and timelines.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <button className="w-full rounded-full bg-emerald-600 px-10 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-all duration-200 hover:bg-emerald-700 active:scale-[0.98] min-h-[48px] flex items-center justify-center">
              Drop Your Enquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

