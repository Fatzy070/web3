'use client'

import Info from "../data/data"
import Image from "next/image"
import Image1 from '../../../public/image.png'
import Shadow from '../../../public/shadow.svg'
import { motion } from "framer-motion"
import Counter from "./Counter"
import FeatureSection from "./FeatureSection"
import Marquee from "./Marquee"
import Read from "./Read"

export default function Chain() {
    const { client , latest , web3 , marquee ,   blockchain , chainText , smart , network , smartText , advisory , advisoryText , adoption , data , data1 ,nothing ,  dataText , value , scale } = Info

    return (
        <>
      
           <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
           className="flex relative flex-col lg:flex-row gap-10 mt-30  w-full lg:justify-between px-5 md:px-25 lg:px-10">
            <div className="lg:w-[55%] lg:pt-20 ">
                <h1 className=" text-3xl md:text-5xl chain md:leading-15 ">{chainText}</h1>
                <section className="flex flex-col md:flex-row gap-5 md:justify-between mt-15">
                    {blockchain.map((item: any , index: number ) => (
                    <div key={index} className="md:pr-15 ">
                        <section className="flex  items-center gap-7 mb-6">
                            <div className="bg-[#1c1722] p-1 rounded-2xl ">
                            <item.icon size={30} className="text-[#957fef]"/>
                        </div>
                         <h1 className="text-2xl">{item.title}</h1>
                        </section>
                        <p className="text-[#989898]">{item.text}</p>
                    </div>
                ))}
                </section>
            </div>
            <div className='absolute right-0 top-0 lg:top-[-200px] -z-10'>
                <img src={Shadow.src} alt="shadow" />
            </div>
            <div className="flex justify-center md:block"> 
                <Image 
                src={Image1}
                alt="image"
                width={500}
                height={400}
                className="rounded-2xl w-[90%] lg:w-[450px] "
                />
            </div>
           </motion.div>
    
            <FeatureSection 
             title={smart} 
             subtitle={network} 
             description={smartText} 
             imageSrc="/image2.png" 
           />
           <FeatureSection 
             title={advisory} 
             subtitle={adoption} 
             description={advisoryText} 
             imageSrc="/image3.png" 
             reverse={true} // Swaps text and image position
           />
           <FeatureSection 
             title={data} 
             subtitle={data1} 
             description={dataText} 
             imageSrc="/web2.png" 
           />

           <Counter />


           <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="px-10 mt-25 md:mt-40">
                <h1 className="text-[1.6rem] md:text-5xl mb-5 md:mb-15">{value}</h1>
                <section className="flex items-center flex-col lg:flex-row gap-10 justify-between">
                    <div>
                    <Image 
                    src={Image1}
                    alt="image"
                    width={500}
                    height={400}
                    className="rounded-2xl"
                    />
                </div>
                <div className="grid gap-10 items-center lg:h-[300px] grid-cols-1 md:grid-cols-2 lg:w-[50%]">
                    {scale.map((item:any) => {
                        return (
                            <div 
                            key={item.id}
                            className="flex flex-col md:flex-row items-start  gap-5 mb-5">
                                <div className="bg-[#1c1722] p-1 rounded-2xl">
                                    <item.icon size={30} className="text-[#957fef]"/>
                                </div>
                                <div>
                                    <h1 className="text-xl">{item.title}</h1>
                                <p className="text-[#989898] pt-3 leading-8a">{item.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                </section>
           </motion.div>

          <Marquee data={marquee} direction="left"/>

          <Marquee data={marquee} direction="right"/>

        <div>
            {/* <Read title={latest} data={web3}/> */}
        </div>
        </>
    )
}