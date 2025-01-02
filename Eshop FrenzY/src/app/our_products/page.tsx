import Link from "next/link";
import Image from "next/image";

export default function OurProducts() { 
	return (

   <div>
   {/*Product Overview  Section*/}
   <h1 className = "font-bold font-sans md:text-4xl lg:text-4xl xl:text-4xl text-2xl mt-20 text-lime-900 ml-7"><b>PRODUCT</b> <b className = "text-gray-400">OVERVIEW____</b></h1>
   <div className="container px-5 py-10 mx-auto">
   <div className="flex flex-wrap -m-4">
   <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl rounded-xl">
   <a className="block relative h-50 rounded overflow-hidden">
   <Image
            alt="product_img"
            className="object-cover object-center w-full h-full block"
            src="/images/product_01.jpg"
            width= {600}
            height = {600}
   />  
    </a>
    <div className="mt-4 text-center">
    <h2 className="text-lime-900 text-lg font-bold font-sans">
                                   Esprit Ruffle Shirt
    </h2>
    <p className="mt-1 font-bold font-sans text-gray-400">$16.00</p>
    </div>
    </div>
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl rounded-xl">
    <a className="block relative h-50 rounded overflow-hidden">
           <Image
            alt="product_img"
            className="object-cover object-center w-full h-full block"
            src="/images/product_02.jpg"
            width= {600}
            height = {600}
    />
    </a>
    <div className="mt-4 text-center">      
    <h2 className="text-lime-900 text-lg font-bold font-sans">
                          Herschel supply
    </h2>
    <p className="mt-1 font-sans font-bold text-gray-400">$21.15</p>
    </div>
    </div>
    {/* Muzna Amir Zubairi*/}
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl rounded-xl">
    <a className="block relative h-50 rounded overflow-hidden">
    <Image
            alt="product_img"
            className="object-cover object-center w-full h-full block"
            src="/images/product_03.jpg"
            width= {600}
            height = {600}
   />
   </a>
   <div className="mt-4 text-center">
   <h2 className="text-lime-900 text-lg font-bold font-sans">
                            Front Pocket Jumper
   </h2>
   <p className="mt-1 font-bold font-sans text-gray-400">$12.00</p>
   </div>
   </div>
  
   {/* Muzna Amir Zubairi*/}

   <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl rounded-xl">
   <a className="block relative h-50 rounded overflow-hidden">
   <Image
            alt="product_img"
            className="object-cover object-center w-full h-full block"
            src="/images/product_04.jpg"
            width= {600}
            height = {600}
   />
   </a>
   <div className="mt-4 text-center">
   <h2 className="text-lime-900 text-lg font-bold font-sans">
                          Classic Trench Coat
   </h2>
   <p className="mt-1 font-bold font-sans text-gray-400">$18.40</p>
   </div>
   </div>    
   <Link href = "/shop" className = "font-bold font-sans mx-auto mt-10 px-6 py-2 border border-2 border-lime-900 text-black text-lg rounded-r-full">View More</Link> 
   </div>
   </div>




  {/*Women's Bag Section*/}
  <h1 className = "text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold font-sans mt-20 ml-7 text-lime-900"><b>Our Featred</b> <b className = "text-gray-400">Collection_____</b></h1>
  <div className="container px-5 py-10 mx-auto">
  <div className="flex flex-wrap -m-4">
  <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl rounded-xl">
  <a className="block relative h-49 rounded overflow-hidden">
  <Image
            alt="women's bag_image"
            className="object-cover object-center w-full h-full block"
            src= "/images/bag_01.jpg"
            width = {600}
            height = {600}
  />
  </a>
  <div className="mt-4 text-center">
  <h2 className="text-lime-900 text-lg font-bold font-sans">
                          Elegance Tote
  </h2>
  <p className="mt-1 font-bold font-sans text-gray-400">$16.00</p>
  </div>
  </div>


  <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl rounded-xl">
  <a className="block relative h-50 rounded overflow-hidden">
  <Image
            alt="women's bag_image"
            className="object-cover object-center w-full h-full block"
            src= "/images/bag_02.jpg"
            width = {600}
            height = {600}
  />
  </a>
  <div className="mt-4 text-center">  
  <h2 className="text-lime-900 text-lg font-bold font-sans">
                          LuxeCarry
  </h2>
  <p className="mt-1 font-bold font-sans text-gray-400">$21.15</p>
  </div>
  </div>
  {/* Muzna Amir Zubairi*/}
  <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl rounded-xl">
  <a className="block relative h-50 rounded overflow-hidden">
  <Image
            alt="women's bag_image"
            className="object-cover object-center w-full h-full block"
            src= "/images/bag_03.jpg"
            width = {600}
            height = {600}
  />
  </a>
  <div className="mt-4 text-center">  
  <h2 className="text-lime-900 text-lg font-bold font-sans">
                            ChicVault
  </h2>
  <p className="mt-1 font-bold font-sans text-gray-400">$12.00</p>
  </div>
  </div>

   {/* Muzna Amir Zubairi*/}

 <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl rounded-xl">
 <a className="block relative h-50 rounded overflow-hidden">
 <Image
            alt="women's bag_image"
            className="object-cover object-center w-full h-full block"
            src= "/images/bag_04.jpg"
            width = {600}
            height = {600}
 />
 </a>
 <div className="mt-4 text-center">
    <h2 className="text-lime-900 text-lg font-bold font-sans">
                             Sophia Satchel
 </h2>
 <p className="mt-1 font-bold font-sans text-gray-400">$18.40</p>
 </div>
 </div>   
 </div>
 </div>




{/*Men's Shoes Section */}
<div className="container px-5 py-10 mx-auto"> 
<div className="flex flex-wrap -m-4">
<div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl rounded-xl">
<a className="block relative h-50 rounded overflow-hidden">
<Image
            alt="men's shoes img"
            className="object-cover object-center w-full h-full block"
            src= "/images/shoe_01.jpg"
            width = {600}
            height = {600}
/>
</a>
<div className="mt-4 text-center">
    <h2 className="text-lime-900 text-lg font-bold font-sans">
                      StrideCraft
</h2>
<p className="mt-1 font-sans font-bold text-gray-400">$30.00</p>
</div>
</div>
{/* Muzna Amir Zubairi*/}
<div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl rounded-xl">
<a className="block relative h-50 rounded overflow-hidden">
<Image
                alt="men's shoes img"
                className="object-cover object-center w-full h-full block"
                src="/images/shoe_02.jpg"
                width={600}
                height={600}
/>
</a>
<div className="mt-4 text-center">
<h2 className="text-lime-900 text-lg font-bold font-sans">
                     Urban Sole
</h2>
<p className="mt-1 font-sans font-bold text-gray-400">$30.00</p>
</div>
</div>


<div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl rounded-xl">
<a className="block relative h-50 rounded overflow-hidden">
<Image
            alt="men's shoes img"
            className="object-cover object-center w-full h-full block"
            src= "/images/shoe_03.jpg"
            width = {600}
            height = {600}
/>
</a>
<div className="mt-4 text-center">
<h2 className="text-lime-900 text-lg font-bold font-sans">
                           PrimeWalk
</h2>
<p className="mt-1 font-sans font-bold text-gray-400">$30.00</p>
</div>
</div>
{/* Muzna Amir Zubairi*/}
<div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl rounded-xl">
<a className="block relative h-50 rounded overflow-hidden">
          <Image
            alt="men's shoes img"
            className="object-cover object-center w-full h-full block"
            src= "/images/shoe_04.jpg"
            width = {600}
            height = {600}
/>
</a>
<div className="mt-4 text-center">
<h2 className="text-lime-900 text-lg font-bold font-sans">
                         VogueStep
</h2>
<p className="mt-1 font-sans font-bold text-gray-400">$30.00</p>
</div>
</div> 
<Link href = "/categories" className = "font-bold font-sans mt-10 mx-auto px-6 py-2 border border-2 border-lime-900 text-black text-lg rounded-r-full">View More</Link>      
</div>
</div>
</div>


	);
}