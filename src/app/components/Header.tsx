'use client'

import { useState } from "react";
import Info from "../data/data"
import Image from "next/image";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

export function Header() {
    const { nav } = Info;
    const [ open , setOpen ] = useState<boolean>(false)
    
    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
           <header className="  lg:flex hidden items-center py-3  justify-between pl-5 pr-10">
                <div className="">
                   <Image 
                    src='/logo.svg'
                    width={170}
                    height={100}
                    alt="Logo"
                  />
                </div>
                <div className="flex gap-4">
                    {nav.map((item: any) => {
                        return (
                            <div 
                            key={item.id}
                            >
                                <a href={item.link}>{item.name}</a>
                            </div>
                        )
                    })}
                </div>
           </header>

           {/* mobile screen header */}

            <header className="lg:hidden flex justify-between items-center py-3 px-5">
                <div className="">
                   <Image 
                    src='/logo.svg'
                    width={140}
                    height={100}
                    alt="Logo"
                  />
                </div>
                <div>
            {open ? (
             <IoClose size={30} onClick={handleOpen} className="cursor-pointer" />
                ) : (
             <TbMenuDeep size={30} onClick={handleOpen} className="cursor-pointer" />
           )}
                   
                        <div className={`absolute rounded-2xl border inset-x-0 mx-5  mt-4 bg-[#0f0c15] border-zinc-800  py-5 px-4 transition-all duration-1000 ease-out z-10
                        ${open 
                            ? 'top-16 opacity-100  translate-y-0' 
                            : 'top-[-50%] opacity-0 translate-y-full pointer-events-none'
                        }
                        `}>
                            <div className="space-y-5">
                                {nav.map((item: any) => (
                                <div
                                key={item.id}
                                className=""
                                > 
                                    <a 
                                    className="text-zinc-400 hover:text-white transition-colors"
                                    href={item.link}>{item.name}</a>
                                </div>
                            ))}
                            </div>
                        </div>
                  

                </div>

            </header>

        </>
    )
}