'use client'

import { Header } from "./Header";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children} : LayoutProps ) {
    
    return (
        <>  
            <div className="border-b border-gray-900 fixed w-full top-0 z-50">
                <Header />
            </div>
            <div>
                {children}
            </div>
        </>
    )
}