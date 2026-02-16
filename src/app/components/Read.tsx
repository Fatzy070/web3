'use client'

import Image from "next/image"

interface ReadProps {
    data: Array<{
        id: number;
        title: string;
        date: string;
        image: any;
        read: string;
        text: string;
    }>;
    title: string;
}

export default function Read({ data, title } : ReadProps) {

    return (
        <>
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-5xl">{title}</h1>
            </div>
            <div className="grid grid-cols-3">
                {data.map((item) => (
                    <div
                    key={item.id}
                    > 
                        <p>{item.date}</p>
                         <h1>{item.title}</h1>
                         <div>
                            <Image 
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={300}
                                className="rounded-2xl  object-cover"
                            />
                            <p>{item.text}</p>
                            <button>{item.read}</button>
                         </div>
                    </div>
                ))}
            </div>
        </>
    )
}