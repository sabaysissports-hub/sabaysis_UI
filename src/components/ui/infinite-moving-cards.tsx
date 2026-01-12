"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    company?: string;
    rating?: number;
    location?: string;
    projectType?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, index) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 overflow-hidden rounded-2xl border border-emerald-200/40 bg-gradient-to-br from-white to-emerald-50/30 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-emerald-300/60 dark:border-emerald-900/40 dark:bg-gradient-to-br dark:from-slate-900 dark:to-emerald-950/20 md:w-[420px]"
            key={`${item.name}-${index}`}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              
              {/* Rating Stars */}
              {item.rating && (
                <div className="relative z-20 mb-3 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              )}

              <span className="relative z-20 text-sm leading-[1.6] font-normal text-slate-700 dark:text-gray-200 line-clamp-4">
                "{item.quote}"
              </span>

              <div className="relative z-20 mt-4 flex flex-col gap-2 border-t border-emerald-200/40 pt-4 dark:border-emerald-900/40">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-montreal font-semibold text-slate-900 dark:text-white">
                    {item.name}
                  </span>
                  <span className="text-xs font-gotham text-emerald-600 dark:text-emerald-400">
                    {item.title}
                  </span>
                  {item.company && (
                    <span className="text-xs font-gotham text-slate-500 dark:text-slate-400">
                      {item.company}
                    </span>
                  )}
                  {item.projectType && (
                    <span className="mt-1 inline-flex w-fit rounded-full bg-emerald-100/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                      {item.projectType}
                    </span>
                  )}
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
