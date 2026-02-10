'use client'

import Info from "../data/data"
import { Button } from "./ui/Button"
import Image1 from '../../../public/image1.png'
import Image from "next/image"
import '../globals.css'

export default function Gate() {
    const { gate , mission , tool } = Info
    return (
        <>
        <section className="flex relative md:flex-row flex-col mt-25 justify-between">
        <div className=" md:ml-8 px-5 md:px-0 md:w-[50%]">
            <h1 className="font-medium text-[2.5rem] md:leading-22 md:text-7xl">{gate}</h1>
            <p className="text-gray-300 leading-8 text-[1.2rem] md:pr-30 pt-7">{mission}</p>
        <div className="flex md:flex-row flex-col gap-4 mt-5">
            <Button variant="glow">Get started for free</Button>
            <Button variant="primary">Explore Features</Button>
        </div>

        </div>
        <div className="mt-10 hidden md:block">
           <Image 
           src={Image1}
           alt="image1"
           width={520}
           height={577}
           />
        </div>
        <div className="md:hidden absolute -z-10 bottom-[-40]  right-0">
             <Image 
           src={Image1}
           alt="image1"
           width={300}
           height={500}
           />
        </div>
        </section>

        <section className=" h-60 flex justify-center items-center relative">
            <div className="  h-full w-full top-0 bg-black/50 absolute"></div>
            <div className="w-full">
                <h2 className="text-center font-medium  mb-6">{tool}</h2>
            <div className="flex flex-wrap px-15 md:px-0  md:justify-between">
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
        </section>
        </>
    )
}