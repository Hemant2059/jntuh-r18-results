import React from 'react'
import { BsLinkedin, BsGithub} from 'react-icons/bs'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="text-gray-600 body-font border-2 max-h-[10vh] print:hidden">
            <div className="container p-4 mx-auto flex items-center justify-between">
                <h1>Made by <span className='font-bold text-xl text-red-800 mx-2'>Hemant Pandey</span></h1>
                <div className='flex items-center space-x-10'>
                    <Link href={'https://www.linkedin.com/in/hemant-pandey-24689120b'}><BsLinkedin  className='scale-[1.5]'/></Link>
                    <Link href={'https://github.com/Hemant2059/jntuh-r18-results'}><BsGithub className='scale-[1.5]'/></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
