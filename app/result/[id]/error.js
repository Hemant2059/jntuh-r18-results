'use client'; // Error components must be Client components
import React from 'react';
import Link from 'next/link';
export default function Error(){
  return (
    <div className='flex justify-center items-center h-[80vh] flex-col'>
      <h2>There is no results for given hallticket </h2>
      <Link href={`/`}
            className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
           
          >
            Go Back
          </Link>
    </div>
  );
}