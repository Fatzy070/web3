'use client'

import Info from "../data/data"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import AnimatedNumber from "./AnimatedNumber"



export default function Counter() {
    const { nothing } = Info



    return (
        <div >
           <div className="flex flex-col lg:flex-row lg:px-10 items-center lg:justify-between mt-25">
                <h1 className="mb-10 text-[20px] md:text-[32px]  lg:w-[300px] ">{nothing}</h1>

                <section className="flex flex-wrap w-full lg:w-auto justify-between gap-10 items-center">
                   
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-center text-5xl pb-3" >
                            <AnimatedNumber value={24} />+
                        </h1>
                        <p className="text-[#989898]">Daps Intergrations</p>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-center text-5xl pb-3"><AnimatedNumber value={32.1} /> + </h1>
                        <p  className="text-[#989898]">NFT Minted</p>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-center text-5xl pb-3"><AnimatedNumber value={15.2} suffix="m" />m</h1>
                        <p className="text-[#989898]">Active Accounts</p>
                    </motion.div>
                </section>
           </div>
        </div>
    )
}