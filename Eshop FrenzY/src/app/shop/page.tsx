import Link from "next/link";
import Image from "next/image";

export default function Shop() {
  return (
  <div>
  <div className="flex flex-col text-center w-full mb-10 mt-20">
  <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-sans font-bold mb-2 text-lime-900 px-4">
        <b>Get The Best Deals Only At EShop Frenzy</b>
  </h1>
  <p className="lg:w-2/3 mx-auto leading-relaxed font-sans text-justify px-4">
        Elevate your shopping with eShop Frenzys curated collection. From essentials to unique finds enjoy quality variety and value—all in one place. Start exploring today!
  </p>
  </div>
  <div className="container px-5  mx-auto">
  <div className="flex flex-wrap -m-4">
  <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl pb-8">
  <a className="block relative h-50 rounded overflow-hidden">
  <Image
            alt="product_img"
            className="object-cover object-center w-full h-full block"
            src= "/images/product_01.jpg"
            width = {600}
            height = {600}
  />
  </a>
  <div className="mt-4 text-center"> 
  <h2 className="text-lime-900 font-sans text-lg font-bold">
                   Esprit Ruffle Shirt
  </h2>
  <p className="mt-1 font-sans font-bold text-gray-400">$16.00</p>
  <Link href = "/shop/product_01">
  <button  className = "text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 px-6 py-2 mt-4">View Details</button>
  </Link>
  </div>
  </div>
  {/* Muzna Amir Zubairi*/}
  <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl">
  <a className="block relative h-50 rounded overflow-hidden">
  <Image
            alt="product_img"
            className="object-cover object-center w-full h-full block"
            src= "/images/product_02.jpg"
            width = {600}
            height = {600}
  />
  </a>
  <div className="mt-4 text-center">       
  <h2 className="text-lime-900 font-sans text-lg font-bold">
                       Herschel supply
  </h2>
  <p className="mt-1 font-bold font-sans text-gray-400">
  $21.15
  </p>
  <Link href = "/shop/product_02">
  <button  className = "text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 px-6 py-2 mt-4">View Details</button>
  </Link>
  </div>
  </div>
  <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl">
  <a className="block relative h-50 rounded overflow-hidden">
  <Image
            alt="product_img"
            className="object-cover object-center w-full h-full block"
            src= "/images/product_03.jpg"
            width = {600}
            height = {600}
  />
  </a>
  <div className="mt-4 text-center">
  <h2 className="text-lime-900 font-sans text-lg font-bold">
                  Front Pocket Jumper
  </h2>
  <p className="mt-1 font-bold font-sans text-gray-400">$12.00</p>
   <Link href = "/shop/product_03">
  <button  className = "text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 px-6 py-2 mt-4">View Details</button>
  </Link>
  </div>
  </div>
  <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl">
  <a className="block relative h-50 rounded overflow-hidden">
  <Image
            alt="product_img"
            className="object-cover object-center w-full h-full block"
            src= "/images/product_04.jpg"
            width = {600}
            height = {600}
  />
  </a>
  <div className="mt-4 text-center">        
  <h2 className="text-lime-900 font-sans text-lg font-bold">
                     Classic Trench Coat
  </h2>
  {/* Muzna Amir Zubairi*/}
  <p className="mt-1 font-bold font-sans text-gray-400">$18.40</p>
   <Link href = "/shop/product_04">
  <button  className = "text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 px-6 py-2 mt-4">View Details</button>
  </Link>
  </div>
  </div>
  <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl mt-10 pb-8">
  <a className="block relative h-50 rounded overflow-hidden">
  <Image
            alt="product_img"
            className="object-cover object-center w-full h-full block"
            src= "/images/product_05.jpg"
            width = {600}
            height = {600}
  />
  </a>
  <div className="mt-4 text-center">        
  <h2 className="text-lime-900 font-sans text-lg font-bold">
                       Pretty Little Thing
  </h2>
  {/* Muzna Amir Zubairi*/}
  <p className="mt-1 font-bold font-sans text-gray-400">$16.00</p>
   <Link href = "/shop/product_05">
  <button  className = "text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 px-6 py-2 mt-4">View Details</button>
  </Link>
  </div>
  </div>
  <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl mt-10">
  <a className="block relative h-50 rounded overflow-hidden">
  <Image
            alt="product_img"
            className="object-cover object-center w-full h-full block"
            src= "/images/product_06.jpg"
            width = {600}
            height = {600}
  />
  </a>
 {/* Muzna Amir Zubairi*/}
  <div className="mt-4 text-center">        
  <h2 className="text-lime-900 font-sans text-lg font-bold">
                             Femme T-Shirt In Stripe 
  </h2>
  <p className="mt-1 font-sans font-bold text-gray-400">$21.15</p>
   <Link href = "/shop/product_06">
  <button  className = "text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 px-6 py-2 mt-4">View Details</button>
  </Link>
  </div>
  </div>
  <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl mt-10">
  <a className="block relative h-50 rounded overflow-hidden">
  <Image
            alt="product_img"
            className="object-cover object-center w-full h-full block"
            src= "/images/product_07.jpg"
            width = {600}
            height = {600}
  />
  </a>
  {/* Muzna Amir Zubairi*/}
  <div className="mt-4 text-center">
         
  <h2 className="text-lime-900 font-sans text-lg font-bold">
                            Shirt in Stretch Cotton
  </h2>
  <p className="mt-1 font-sans font-bold text-gray-400">$12.00</p>
   <Link href = "/shop/product_07">
  <button  className = "text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 px-6 py-2 mt-4">View Details</button>
  </Link>
  </div>
  </div>
  <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl mt-10">
  <a className="block relative h-50 rounded overflow-hidden">
  <Image
            alt="product_img"
            className="object-cover object-center w-full h-full block"
            src= "/images/product_08.jpg"
            width = {600}
            height = {600}
  />
  </a>
  <div className="mt-4 text-center">       
  <h2 className="text-lime-900 font-sans text-lg font-bold">
                        Pieces Metallic Printed
  </h2>
  <p className="mt-1 font-sans font-bold text-gray-400">$18.40</p>
  <Link href = "/shop/product_08">
  <button  className = "text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 px-6 py-2 mt-4">View Details</button>
  </Link>
  </div>
  </div>
  </div>
  </div>
  </div>
   );
}