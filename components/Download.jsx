"use client"
import React from 'react'

const Download = () => {
    // create a download button which will download the result as a pdf
    const download = () => {
        window.print()
    }
    return (
        <div className='flex justify-center items-center m-5 print:hidden'>
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={download}>
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <span>Download</span>
            </button>

        </div>
    )
}

export default Download