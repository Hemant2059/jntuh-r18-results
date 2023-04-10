import Link from 'next/link'
import React from 'react'
import { BsGithub } from 'react-icons/bs'

const Navbar = () => {
    return (
        <header className="font-bold body-font print:hidden border-b-2 max-h-[10vh]">
            <div className="container mx-auto flex p-5 items-center justify-between">
                <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 ">                   
                    <span className="ml-3 text-xl">Jntuh Result</span>
                </Link>
                <Link href={'https://github.com/Hemant2059/jntuh-r18-results'}><BsGithub className='scale-[2]' /></Link> 
                
            </div>
        </header>
    )
}

export default Navbar