"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Htinputbox = () => {
  const [id, setId] = useState('');
  let length = 10;
  const [btndisabled, setBtndisabled] = useState(true);


   const handleChange = (e) => {
    const Value = e.target.value;
    const newValue = Value.toUpperCase();

    if(newValue.length === length) {
      setBtndisabled(false);
    }
    else {
      setBtndisabled(true);
    }
    
    setId(newValue);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] mx-5">
    <div className="w-full max-w-md">
      <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4" >
        <div className="">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            Hallticket
          </label>
          <input
            className="border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-tight focus:outline-none focus:bg-white"
            id="username"
            type="text"
            placeholder="Enter your hallticket"
            value={id}
            onChange={handleChange}
            required
            pattern='[a-zA-Z0-9]{10}'
            minLength={10}
          />
        </div>
        <div className={`${ btndisabled ? 'text-red-800 font-bold text-sm mx-3': "hidden"}`}>It requires 10 letters</div>
        <div className="flex items-center justify-center mt-4">
          <Link href={`${btndisabled ? "/" : `/result/${id}`}`}
            className={`${btndisabled ? 'cursor-not-allowed  bg-blue-200 text-white font-bold py-2 px-4 rounded ' : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"}`}
            type="submit"
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Htinputbox