'use client'

import Image from "next/image"
import { motion } from "framer-motion"

interface FeatureProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  reverse?: boolean; 
}

 const FeatureSection = ({ title, subtitle, description, imageSrc, reverse = false }: FeatureProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex px-5 lg:flex-row flex-col justify-center gap-10 mt-25 md:mt-40 lg:justify-between lg:px-8 ${reverse ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className="w-full md:w-full lg:w-auto justify-center flex items-center">
        <Image 
          src={imageSrc}
          alt={subtitle}
          width={550}
          height={500}
          className="rounded-2xl w-[90%] md:w-[80%] lg:w-[550px] md:h-[500px] object-cover"
        />
      </div>

      
      <section className="lg:w-[45%] md:pt-20 md:px-25 lg:px-0 flex flex-col justify-center">
        <h2 className="text-[#7d6cff]">{title}</h2>
        <p className="md:text-5xl text-4xl leading-12 md:leading-15 py-4 md:py-6  tracking-tighter">
          {subtitle}
        </p>
        <p className="leading-7 text-[15px] text-gray-500">
          {description}
        </p>
      </section>
    </motion.div>
  )
}

export default FeatureSection;