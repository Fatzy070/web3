'use client'

import { useEffect, useRef } from "react";
import { useInView, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  

  const motionValue = useMotionValue(0);
 
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });


  const displayValue = useTransform(springValue, (latest) => {
   
    return latest.toLocaleString(undefined, {
      minimumFractionDigits: value % 1 === 0 ? 0 : 1,
      maximumFractionDigits: value % 1 === 0 ? 0 : 1,
    });
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}