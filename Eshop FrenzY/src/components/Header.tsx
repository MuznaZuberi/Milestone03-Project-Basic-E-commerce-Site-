import Link  from "next/link";

// ============================
//   React Icons
// ============================
import { SiGmail } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


export default function Navbar() {
  return (
    
    <div>
    {/*Top Header Section*/}
    <div className="header bg-lime-900  px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex font-bold font-sans items-center md:justify-start justify-center text-white">
    <SiGmail /><h1 className = "ml-3 ">shopfrenzy@gamil.com</h1>
    </a>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <Link href = "https://www.facebook.com/people/Muzna-Amir-Zubairi/pfbid02aoG8YEV65fQ6q7ZeiDYhuzaEEoHY3xRzcemnufxe66Q6rd5ZR5jDVWgD6bsTAxyul/?mibextid=ZbWKwL" className="text-white" target = "blank">
    <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
    >
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
    </Link>
    <a className="ml-3 text-white cursor-pointer">
    <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
     >
     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
     </svg>
     </a>
     <a className="ml-3 text-white cursor-pointer">
     <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
     >
     <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
     <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
     </svg>
     </a>
     <Link href = "https://www.linkedin.com/in/muzna-amir-zubairi-280135264/" target = "blank" className="ml-3 text-white">
     <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0}
          className="w-5 h-5"
          viewBox="0 0 24 24"
     >
     <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
     />
     {/* Muzna Amir Zubairi*/}
     <circle cx={4} cy={4} r={2} stroke="none" />
     </svg>
     </Link>
     </span>
     </div>




     {/* Header Section */} 
     <div className = "bg-zinc-100">    
     <div className="container mx-auto flex flex-wrap py-3 flex-col md:flex-row items-center px-3">
     <a className="flex items-center  mb-4 md:mb-0">
     <span  className="text-4xl font-bold  font-sans text-lime-900">E<b className = "text-2xl font-bold font-sans text-gray-400 hover:text-lime-900 ">ShopFrenzY.</b></span>
     </a>
     <nav className="md:ml-auto md:mr-auto font-sans flex flex-wrap items-center text-base justify-center">
     <Link href = "/" className="mr-5 hover:text-gray-400 font-bold text-lime-900">Home</Link>
     <Link href = "/shop" className="mr-5 hover:text-gray-400 font-bold text-lime-900 ">Shop</Link>
     <Link href = "/categories" className="mr-5 hover:text-gray-400 font-bold text-lime-900 ">Categories</Link>
     <Link href = "/contact" className="mr-5 hover:text-gray-400 font-bold text-lime-900 ">Contact</Link>
     {/* Muzna Amir Zubairi*/}
     </nav>
     <span className="inline-flex sm:ml-auto py-2 sm:mt-0 justify-center sm:justify-start">
     <a className="ml-3 text-lime-900 ">
     <FaSearch />
     </a>
     <a className="ml-3 text-lime-900">
     <FaShoppingCart />
     </a>
     <a className="ml-3 text-lime-900">
     <FaHeart />
     </a>
     </span>
     </div>
     </div>
     </div>
  );
}