'use client'

import Info from "../data/data"
import { Button } from "./ui/Button"
import Image1 from '../../../public/image1.png'
import Image from "next/image"
import '../globals.css'
import { motion } from "framer-motion"

export default function Gate() {
    const { gate , mission , tool } = Info



    return (
        <>
        <section className="flex relative md:flex-row flex-col mt-25 md:mt-50 justify-between">
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" md:ml-8 px-5 md:px-0 lg:w-[50%]"
        >
            <h1 className="font-medium text-[2.3rem] md:leading-22 md:text-6xl lg:text-7xl">{gate}</h1>
            <p className="text-gray-300 leading-8 text-[1.2rem] md:pr-30 pt-7">{mission}</p>
        <div className="flex md:flex-row flex-col gap-4 mt-5">
            <Button variant="glow">Get started for free</Button>
            <Button variant="primary">Explore Features</Button>
        </div>

        </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: 100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-10 hidden lg:block">
           <Image 
           src={Image1}
           alt="image1"
           width={520}
           height={577}
           />
        </motion.div>
        <div className="lg:hidden absolute -z-10 bottom-[-40] md:top-[30]  right-0">
            <Image 
           src={Image1}
           alt="image1"
           width={300}
           height={500}
           className="w-[300px] md:w-[500px] "
           />
        </div>
        </section>

        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" h-80 flex mt-25 justify-center items-center relative">
            <div className="  h-full w-full top-0 bg-black/50 absolute"></div>
            <div className="w-full">
                <h2 className="text-center font-medium  mb-6">{tool}</h2>
            <div className="flex flex-wrap px-15 gap-2 md:px-10 lg:px-0  lg:justify-between">
                <Image 
                src='/logo1.svg'
                width={120}
                height={70}
                alt="Logo"
                className="mx-auto"
                />
                <Image 
                src='/logo2.svg'
                width={120}
                height={70}
                alt="Logo"
                className="mx-auto"
                />
                <Image 
                src='/logo3.svg'
               width={120}
                height={70}
                alt="Logo"
                className="mx-auto"
                />
                <Image 
                src='/logo4.svg'
                width={120}
                height={70}
                alt="Logo"
                className="mx-auto"
                />
                <Image 
                src='/logo5.svg'
                width={120}
                height={70}
                alt="Logo"
                className="mx-auto"
                />
                <Image 
                src='/logo6.svg'
                width={120}
                height={70}
                alt="Logo"
                className="mx-auto"
                />
            </div>
            </div>
        </motion.div>
        </>
    )
}