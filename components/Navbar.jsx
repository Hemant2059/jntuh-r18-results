import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header className="font-bold body-font print:hidden border-b-2">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">                   
                    <span className="ml-3 text-xl">Jntuh Result</span>
                </Link>
                {/* github svg */}

                
            </div>
        </header>
    )
}

export default Navbar