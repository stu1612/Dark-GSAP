"use client";

// react
import { useRef } from "react";

// gsap
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// utils
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

type Props = {
  children: React.ReactNode;
};

export default function AnimatedContent({ children }: Props) {
  // scoped gsap refs
  const container = useRef(null);
  // screen reader reduced motion hook
  const prefersReducedMotion = usePrefersReducedMotion();

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(container.current, { y: 0 });
        return;
      }
      gsap.fromTo(
        container.current,
        { y: 100 },
        {
          y: 0,
          ease: "power2.inOut",
          duration: 1,
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom-=40%",
            toggleActions: "play pause resume reverse",
            markers: false,
          },
        },
      );
    },
    { scope: container },
  );
  return <div ref={container}>{children}</div>;
}
