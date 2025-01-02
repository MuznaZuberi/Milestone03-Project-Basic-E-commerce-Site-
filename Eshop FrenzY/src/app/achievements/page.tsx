"use client";
import { FaAward } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

export default function Achievements() {
	return (
      
     <div>
     <div className="container px-5 py-24 mx-auto">
     <div className="text-center mb-20">
     <h1 className=" text-4xl font-bold font-sans text-lime-900 mb-4">
     <Typewriter
       options={{
       strings: ["The Achievements We Get"],
       autoStart: true,
       loop: true,
    }}
    />
    </h1>
    <p className="font-bold font-sans leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            We always do our best every day and provide the best experience to our customers.
    </p>
    <div className="flex mt-6 justify-center">
    <div className="w-16 h-1 rounded-full  inline-flex bg-lime-900" />
    </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
    <div className="p-4 md:w-1/3 flex flex-col mx-auto items-center">
    <div className="inline-flex items-center  justify-center rounded-full  text-lime-900 mb-3 flex-shrink-0">
    <FaAward  className = "w-20  h-20 "/>
    </div>
    <div className="flex-grow">
    <h2 className="text-gray-900 text-3xl font-sans font-bold text-center">
                                     Sales
    </h2>
    <p className="leading-relaxed font-bold text-6xl font-sans text-lime-900">
                                     40,000+
    </p>        
    </div>
    </div>
    {/* Muzna Amir Zubairi*/}
    <div className="p-4 md:w-1/3 flex flex-col mx-auto items-center">
    <div className="inline-flex items-center justify-center rounded-full text-lime-900 mb-3 flex-shrink-0">
    <IoIosContacts  className = "w-20  h-20"/>
    </div>
    <div className="flex-grow ">
    <h2 className="text-gray-900 text-3xl font-sans font-bold text-center">
                                   Customers
    </h2>
    <p className="leading-relaxed font-bold text-6xl font-sans text-lime-900 text-center">
                                   60,000+
    </p>    
    </div>
    </div>
    {/* Muzna Amir Zubairi*/}
    <div className="p-4 md:w-1/3 flex flex-col mx-auto items-center">
    <div className="inline-flex items-center justify-center rounded-full  text-lime-900 mb-3 flex-shrink-0">
    <FaStar  className = "w-20  h-20"/>
    </div>
    <div className="flex-grow">
    <h2 className="text-gray-900 text-3xl font-sans font-bold text-center">
                                  Reviews
    </h2>
    <p className="leading-relaxed font-bold font-sans text-6xl text-lime-900">
                                  30,000+
    </p>     
    </div>
    </div>
    </div>
    </div>
    </div>

	);
}