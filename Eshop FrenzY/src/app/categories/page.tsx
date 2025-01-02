import Link from "next/link";
import Image from "next/image";

export default function OurCategories() {
	return (
      
      <div>
      {/*Womens_BagsCategory*/}
      <div className="flex flex-col text-center w-full mb-10 mt-10">
      <h1 className="text-xl md:text-4xl lg:text-4xl xl:text-4xl font-sans font-bold mb-2 text-lime-900 px-4">
             <b>Mens Shoes and Womens Bags at Eshop FrenzY</b>
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed font-sans text-justify px-4">
        Use chic and versatile womens bags to express style and elegance using the delightful follies of trunks and mens fashion. There are everything you need to update your wardrobe. Please purchase now and experience the perfect combination of quality and sophisticated.
      </p>
      </div>
      <h1 className = "md:text-4xl lg:text-4xl xl:text-4xl text-2xl font-bold font-sans mt-20 ml-6 text-lime-900"><b>Womens</b> <b className = "text-gray-400">Bag Collection_____</b></h1> 
      <div className="container px-5 py-10 mx-auto">
      <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl">
      <a className="block relative h-49 rounded overflow-hidden">
      <Image
            alt="women's bag image"
            className="object-cover object-center w-full h-full block"
            src= "/images/bag_01.jpg"
            width = {600}
            height = {600}
      />
      </a>
      <div className="mt-4 text-center">
      <h2 className="text-lime-900 text-lg font-sans font-bold">
                        Elegance Tote
      </h2>
      <p className="mt-1 font-bold font-sans text-gray-400">$16.00</p>
      <Link href = "/categories/womenbag_01">
      <button className = " text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 py-2 px-6 mt-3">View Details</button>
      </Link>
      </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl">
      <a className="block relative h-50 rounded overflow-hidden">
      <Image
            alt="women's bag image"
            className="object-cover object-center w-full h-full block"
            src= "/images/bag_02.jpg"
            width = {600}
            height = {600}
      />
      </a>
      <div className="mt-4 text-center">       
      <h2 className="text-lime-900 text-lg font-sans font-bold">
                         LuxeCarry
      </h2>
      <p className="mt-1 font-bold font-sans text-gray-400">$21.15</p>
      <Link href = "/categories/womenbag_02">
      <button className = " text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 py-2 px-6 mt-3">View Details</button>
      </Link>
      </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl">
      <a className="block relative h-50 rounded overflow-hidden">
      <Image
            alt="women's bag image"
            className="object-cover object-center w-full h-full block"
            src= "/images/bag_03.jpg" 
            width = {600}
            height = {600}
      />
      </a>
      <div className="mt-4 text-center">   
      <h2 className="text-lime-900 text-lg font-sans font-bold">
                              ChicVault
      </h2>
      {/* Muzna Amir Zubairi*/}
      <p className="mt-1 font-bold font-sans text-gray-400">$12.00</p>
       <Link href = "/categories/womenbag_03">
      <button className = " text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 py-2 px-6 mt-3">View Details</button>
      </Link>
      </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl">
      <a className="block relative h-50 rounded overflow-hidden">
      <Image
            alt="women's bag image"
            className="object-cover object-center w-full h-full block"
            src= "/images/bag_04.jpg"
            width = {600}
            height = {600}
      />
      </a>
      <div className="mt-4 text-center">      
      <h2 className="text-lime-900 text-lg font-sans font-bold">
                           Sophia Satchel
      </h2>
      <p className="mt-1 font-bold font-sans text-gray-400">$18.40</p>
       <Link href = "/categories/womenbag_04">
      <button className = " text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 py-2 px-6 mt-3">View Details</button>
      </Link>
      </div>
      {/* Muzna Amir Zubairi*/}
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl">
      <a className="block relative h-49 rounded overflow-hidden">
      <Image
            alt="women's bag image"
            className="object-cover object-center w-full h-full block"
            src= "/images/bag_05.jpg"
            width = {600}
            height = {600}
      />
      </a>
      <div className="mt-4 text-center">
      <h2 className="text-lime-900 text-lg font-sans font-bold">
                          VelvetVogue
      </h2>
      <p className="mt-1 font-bold font-sans text-gray-400">$16.00</p>
       <Link href = "/categories/womenbag_05">
      <button className = " text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 py-2 px-6 mt-3">View Details</button>
      </Link>
      </div>
      {/* Muzna Amir Zubairi*/}
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl">
      <a className="block relative h-50 rounded overflow-hidden">
      <Image
            alt="women's bag image"
            className="object-cover object-center w-full h-full block"
            src= "/images/bag_06.jpg"
            width = {600}
            height = {600}
      />
      </a>
      <div className="mt-4 text-center">     
      <h2 className="text-lime-900 text-lg font-sans font-bold">
                           AuraBag
      </h2>
      <p className="mt-1 font-bold font-sans text-gray-400">$21.15</p>
       <Link href = "/categories/womenbag_06">
      <button className = " text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 py-2 px-6 mt-3">View Details</button>
      </Link>
      </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl">
      <a className="block relative h-50 rounded overflow-hidden">
      <Image
            alt="women's bag image"
            className="object-cover object-center w-full h-full block"
            src= "/images/bag_07.jpg"
            width = {600}
            height = {600}
      />
      </a>
      <div className="mt-4 text-center">
      {/* Muzna Amir Zubairi*/}
      <h2 className="text-lime-900 text-lg font-sans font-bold">
                              StyleHaven
      </h2>
      <p className="mt-1 font-bold font-sans text-gray-400">$12.00</p>
       <Link href = "/categories/womenbag_07">
      <button className = " text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 py-2 px-6 mt-3">View Details</button>
      </Link>
      </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl">
      <a className="block relative h-50 rounded overflow-hidden">
      <Image
            alt="women's bag image"
            className="object-cover object-center w-full h-full block"
            src= "/images/bag_08.jpg"
            width = {600}
            height = {600}
      />
      </a>
      <div className="mt-4 text-center">
         
      <h2 className="text-lime-900 text-lg font-sans font-bold">
                           Grace Bag
      </h2>
      {/* Muzna Amir Zubairi*/}
      <p className="mt-1 font-bold font-sans text-gray-400">$18.40</p>
       <Link href = "/categories/womenbag_08">
      <button className = " text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 py-2 px-6 mt-3">View Details</button>
      </Link>
      </div>
      </div>
      </div>
      </div>






      {/*Men's Shoes Collection*/}
      <h1 className = "md:text-4xl lg:text-4xl xl:text-4xl text-2xl font-sans font-bold mt-20 ml-7 text-lime-900"><b>Mens</b> <b className = "text-gray-400">Shoe Collection_____</b></h1>
      <div className="container px-5 py-10 mx-auto">
      <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl">
      <a className="block relative h-50 rounded overflow-hidden">
      <Image
            alt="men's shoe img"
            className="object-cover object-center w-full h-full block"
            src= "/images/shoe_01.jpg"
            width = {600}
            height = {600}
      />
      </a>
      <div className="mt-4 text-center">   
      <h2 className="text-lime-900 text-lg font-sans font-bold">
                             StrideCraft
      </h2>
      <p className="mt-1 font-bold font-sans text-gray-400">$30.00</p>
       <Link href = "/categories/mensshoe_01">
      <button className = " text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 py-2 px-6 mt-3">View Details</button>
      </Link>
      </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl">
      <a className="block relative h-50 rounded overflow-hidden">
      <Image
            alt="men's shoe img"
            className="object-cover object-center w-full h-full block"
            src= "/images/shoe_02.jpg"
            width = {600}
            height = {600}
      />
      </a>
      <div className="mt-4 text-center">
      <h2 className="text-lime-900 text-lg font-sans font-bold">
                               Urban Sole
      </h2>
      {/* Muzna Amir Zubairi*/}
      <p className="mt-1 font-bold font-sans text-gray-400">$30.00</p>
      <Link href = "/categories/mensshoe_02">
      <button className = " text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 py-2 px-6 mt-3">View Details</button>
      </Link>
      </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl">
      <a className="block relative h-50 rounded overflow-hidden">
      <Image
            alt="men's shoe img"
            className="object-cover object-center w-full h-full block"
            src= "/images/shoe_03.jpg"
            width = {600}
            height = {600}
      />
      </a>
      <div className="mt-4 text-center">
      <h2 className="text-lime-900 text-lg font-sans font-bold">
                            PrimeWalk
      </h2>
      <p className="mt-1 font-bold font-sans text-gray-400">$30.00</p>
     <Link href = "/categories/mensshoe_03">
      <button className = " text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 py-2 px-6 mt-3">View Details</button>
      </Link>
      </div>
      </div>
      {/* Muzna Amir Zubairi*/}
      <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl">
      <a className="block relative h-50 rounded overflow-hidden">
      <Image
            alt="men's shoe img"
            className="object-cover object-center w-full h-full block"
            src= "/images/shoe_04.jpg"
            width = {600}
            height = {600}
      />
      </a>
      <div className="mt-4 text-center">
      <h2 className="text-lime-900 text-lg font-sans font-bold">
                             VogueStep
      </h2>
      <p className="mt-1 font-bold font-sans text-gray-400">$30.00</p>
      <Link href = "/categories/mensshoe_04">
      <button className = " text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 py-2 px-6 mt-3">View Details</button>
      </Link>
      </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl">
      <a className="block relative h-50 rounded overflow-hidden">
      <Image
            alt="men's shoe img"
            className="object-cover object-center w-full h-full block"
            src= "/images/shoe_05.jpg"
            width = {600}
            height = {600}
      />
      </a>
      {/* Muzna Amir Zubairi*/}
      <div className="mt-4 text-center">
      <h2 className="text-lime-900 text-lg font-sans font-bold">
                            EliteFoot
      </h2>
      <p className="mt-1 font-bold font-sans text-gray-400">$30.00</p>
      <Link href = "/categories/mensshoe_05">
      <button className = " text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 py-2 px-6 mt-3">View Details</button>
      </Link>
      </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl">
      <a className="block relative h-50 rounded overflow-hidden">
      <Image
            alt="men's shoe img"
            className="object-cover object-center w-full h-full block"
            src= "/images/shoe_06.jpg"
            width = {600}
            height = {600}
      />
      </a>
      <div className="mt-4 text-center">
      <h2 className="text-lime-900 text-lg font-sans font-bold">
                          Pinnacle Loafers
      </h2>
      <p className="mt-1 font-bold font-sans text-gray-400">$30.00</p>
     <Link href = "/categories/mensshoe_06">
      <button className = " text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 py-2 px-6 mt-3">View Details</button>
      </Link>
      </div>
     {/* Muzna Amir Zubairi*/}
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl">
        <a className="block relative h-50 rounded overflow-hidden">
          <Image
            alt="men's shoe img"
            className="object-cover object-center w-full h-full block"
            src= "/images/shoe_07.jpg"
            width = {600}
            height = {600}
          />
        </a>
        <div className="mt-4 text-center">
        <h2 className="text-lime-900 text-lg font-sans font-bold">
                                   FlexStride
        </h2>
        <p className="mt-1 font-bold font-sans text-gray-400">$30.00</p>
       <Link href = "/categories/mensshoe_07">
       <button className = " text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 py-2 px-6 mt-3">View Details</button>
      </Link>
        </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-7 w-full shadow-xl">
        <a className="block relative h-50 rounded overflow-hidden">
        <Image
            alt="men's shoe img"
            className="object-cover object-center w-full h-full block"
            src= "/images/shoe_08.jpg"
            width = {600}
            height = {600}
        />
        </a>
        <div className="mt-4 text-center">
        <h2 className="text-lime-900 text-lg font-sans font-bold">
                              RegalTread
        </h2>
        <p className="mt-1 font-bold font-sans text-gray-400">$30.00</p>
       <Link href = "/categories/mensshoe_08">
       <button className = " text-sm font-bold font-sans text-white rounded-2xl bg-lime-900 py-2 px-6 mt-3">View Details</button>
       </Link>
        </div>
        </div>
        </div>
        </div>
    </div>
  );
}