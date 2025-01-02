import Link from "next/link";

import Image from "next/image";

interface ProductProps{
  params: { products: string };
}

export default function DetailsProducts({params}:ProductProps) {
  const ProductData: Record<string, {image: string; title: string; description: string;  price: string}> = {
    "product_01":{
      image: "/images/product_01.jpg",
      title : "Esprit Ruffle Shirt",
      description: `Raise your elegant shirt style with spirit ruffles. This shirt, perfectly prepared for modern sophistication, is equipped with a timeless design with a soft disconnection, which adds a shade of femininity to your wardrobe. Made from high-quality fabric, it offers superior comfort and durability for all-day wear.

        Whether you're dressing up for a formal event or adding a little extra touch to a casual outfit, the Esprit Ruffle Shirt is versatile and effortlessly chic. Available in several sizes and colors, it's a must-have for any fashion lover..   
      `,
      price : "$16.00",
    },

    "product_02":{
      image : "/images/product_02.jpg"  ,
      title: "Herschel supply",
      description:  `Combine functionality and style with the Herschel Supply Backpack, a perfect companion for your daily adventures. Designed with meticulous attention to detail, this backpack offers a spacious main compartment, durable construction, and a sleek, timeless design. Whether you're heading to work, school or the outdoors, the Herschel Supply Backpack keeps all your belongings organized and safe, and features padded shoulder straps for unparalleled comfort.
.   
      `,
       price : "$21.15",
    },
    "product_03" : {
         image : "/images/product_03.jpg",
      title:  "Front Pocket Jumper",
      description:   `Stay comfortable and elegant with the front pocket rider, a perfect mixture of comfort and relaxed elegance. Made from high quality fabric, this rider is designed to keep you warm while offering a modern and modern modern adjustment. Its standout feature, a roomy front pocket, adds both functionality and style to your everyday look.
        Whether you're lounging around the house, heading to a casual get-together, or layering up for cooler weather, the front pocket sweater is a versatile wardrobe essential.   
      `,
      price : "$12.00",
    },

    "product_04" : {
      image: "/images/product_04.jpg",
      title: "Classic Trench Coat",
      description:   `Redefine elegance with this classic and timeless trench coat, a wardrobe staple that exudes sophistication and versatility. Crafted from premium materials, this coat features a fitted silhouette, double-breasted fastening and belted waist for effortless style. A classic trench coat is perfect for both formal and casual occasions, combining style and functionality to keep you warm and create a chic look in any weather.
.   
      `,
      price : "$18.40",
    },

    "product_05":{
        image: "/images/product_05.jpg",
      title: "Pretty Little Thing",
      description: `Look fashionable in a Pretty Little Thing dress that will make you shine on any occasion. Made from soft, high-quality fabric, this fitted dress is perfect for casual outings, parties, and date nights. Its chic design and impeccable details ensure that you always look effortlessly on-trend.
        Whether paired with heels for a formal look or sneakers for a casual vibe, the Pretty Little Thing dress is a versatile must-have for every wardrobe..   
      `,
      price : "$16.00",
    },

    "product_06":{
      image: "/images/product_06.jpg",
      title: "Femme T-Shirt In Stripe",
      description:  `Elevate your everyday style with the women's striped t-shirt, the perfect blend of comfort and timeless fashion. This t-shirt is a must-have for an effortless everyday look and is designed with a classic striped pattern and relaxed fit. Made from soft, breathable fabric, it keeps you feeling fresh and chic all day. Whether you pair it with a blazer or keep it casual with your favorite jeans, the Femme Stripe T-Shirt can easily adapt to any occasion.
.   
      `,
      price : "$21.15",
    },

    "product_07":{
      image: "/images/product_07.jpg",
      title:  "Shirt in Stretch Cotton",
      description:   `Use a stretch mark shirt to be familiar with outstanding comfort and sophisticated and sophisticated. This shirt, designed for perfect planting, combines the softness of the cotton and the flexibility of the elastic fabric to make the most of the movement and style. The stretch cotton shirt is perfect for work, casual outings and formal events and features an elegant design that will make you look stylish and keep you comfortable all day long.
.   
      `,
       price : "$12.00",
     },

     "product_08":{
       image: "/images/product_08.jpg",
      title: "Pieces Metallic Printed",
      description:   `It shines brightly in part of the metal print. This adds a stylish addition to the wardrobe that can easily combine elegance and talent. This top is equipped with exciting metal prints. Made from high-quality fabrics, they add a touch of sparkle to any ensemble while providing a comfortable fit. Pair them with jeans, a skirt or tailored trousers for a versatile and chic look.
.   
      `,
      price : "$18.40",
    }
  }

  const data = ProductData[params.products];
  if(!data){
    return <h1>Product Not Found!</h1>;
  }


  return (
  <div>
       <section className="text-gray-600 body-font overflow-hidden">
       <div className="container px-5 py-24 mx-auto">
       <div className="lg:w-4/5 mx-auto flex flex-wrap">
       <Image
        alt= {data.title}
        className="lg:w-1/2 w-full lg:h-auto h-full object-cover object-center rounded"
        src=  {data.image}
        width = {600}
        height = {600}
       />
       <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
       <h2 className="text-sm font-sans font-bold text-gray-500 tracking-widest">
                                   Eshop FrenzY
       </h2>
       <h1 className="text-gray-900 text-3xl font-sans font-bold text-lime-900 mb-1">
                                    {data.title}
       </h1>
       <div className="flex mb-4">
       <span className="flex items-center">
       <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-lime-900"
              viewBox="0 0 24 24"
       >
       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
       </svg>
       <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-lime-900"
              viewBox="0 0 24 24"
       >
       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
       </svg>
       <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-lime-900"
              viewBox="0 0 24 24"
        >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-lime-900"
              viewBox="0 0 24 24"
        >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-lime-900"
              viewBox="0 0 24 24"
        >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span className="text-lime-900 font-sans font-bold ml-3">4 Reviews</span>
        </span>
        </div>
        <p className="leading-relaxed">
                                    {data.description}
        </p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        <div className="flex  items-center">
        <span className="mr-3 font-sans text-lime-900 font-bold">Size</span>
        <div className="relative">
        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
        </select>
        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
        <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
        >
        <path d="M6 9l6 6 6-6" />
        </svg>
        </span>
        </div>
        </div>
        </div>
        <div className="flex">
        <span className="mr-2 font-bold font-sans text-lime-900 text-2xl text-gray-900">
                                          {data.price}
        </span>
        <Link href = "/cart" className="flex ml-auto text-white bg-lime-900 font-sans  border-0 py-2 px-4 focus:outline-none rounded-xl font-bold">
                                            ADDTOCART
        </Link>
        <button className="rounded-full w-10 h-10  p-0 border-0 inline-flex items-center justify-center text-lime-900 ml-4">
        <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
        >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
        </button>
        </div>
        </div>
        </div>
        </div>
        </section>


        <div className="container px-5 py-24 mx-auto mt-20">
        <div className="flex flex-col">
        <h1 className = "text-center font-bold font-sans text-4xl text-lime-900"><b>Related Products</b></h1>
        <p className = "text-center font-sans text-gray-400  text-xl mb-10 mt-3">Browse our vast selection of pendant ceiling lights and table lights to find the vibrant ideal that suits your taste.</p>
        </div>
        <div className="flex flex-wrap">
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className="relative group  rounded-lg  overflow-hidden">
        <Image
              alt="product_image"
              className="w-full h-full h-64 object-cover object-center rounded"
              src= "/images/product_01.jpg"
              width = {600}
              height = {600}
       />
        </div>
        <h2 className="text-xl font-sans font-bold text-lime-900 mt-5">
                                  Esprit Ruffle Shirt
        </h2>
        <p className="font-sans font-bold leading-relaxed text-gray-400 mt-2 text-xl">
                                 $16.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className="relative group rounded-lg  overflow-hidden">
        <Image
              alt="product_image"
              className="w-full h-full h-64 object-cover object-center rounded"
              src= "/images/product_02.jpg"
              width = {600}
              height = {600}
        />
        </div>
        <h2 className="text-xl font-sans font-bold text-lime-900 mt-5">
                               Herschel supply
        </h2>
        <p className="font-sans font-bold leading-relaxed text-gray-400 mt-2 text-xl">
                                   $21.15
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className="relative group rounded-lg  overflow-hidden">
        <Image
              alt="product_image"
              className="w-full h-full h-64 object-cover object-center rounded"
              src= "/images/product_03.jpg"
              width = {600}
              height = {600}
        />
        </div>
        <h2 className="text-xl font-sans font-bold text-lime-900 mt-5">
                                  Front Pocket Jumper
        </h2>
        <p className="font-sans font-bold leading-relaxed text-gray-400 mt-2 text-xl">
                                  $12.00
        </p>
        </div>
        <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
        <div className="relative group rounded-lg  overflow-hidden">
        <Image
              alt="product_image"
              className="w-full h-full h-64 object-cover object-center rounded"
              src= "/images/product_04.jpg"
              width = {600}
              height = {600}
        />
        </div>
        <h2 className="text-xl font-sans font-bold text-lime-900 mt-5">
                              Classic Trench Coat
        </h2>
        <p className="font-sans font-bold leading-relaxed text-gray-400 mt-2 text-xl">
                               $18.40
        </p>
        </div>
        </div>
        <p className = "text-center font-bold font-sans text-lime-900 text-xl mt-8"><Link href = "/shop"><u>View More</u></Link></p>
        </div>
    </div>
   );
}