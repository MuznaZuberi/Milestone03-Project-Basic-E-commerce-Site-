import Link from "next/link";
import Image from "next/image";

interface CategoriesProps{
  params: { products: string };
}

export default function DetailsCategories({params}:CategoriesProps) {
   const BagsCategoriesData: Record<string, {image: string; title: string; description: string;  price: string}> = {
    "womenbag_01":{
      image: "/images/bag_01.jpg",
      title : "Elegance Tote",
      description: `The Elegance Tote Bag is the perfect blend of sophistication and practicality, designed to carry your essentials in style. With a sleek silhouette and spacious interior, this tote bag is perfect for work, shopping, or casual outings. Tote elegance made of premium material provides sustainability and chic appearance. The universal design guarantees that the style will remain organized without bias.   
      `,
      price : "$16.00",
    },

    "womenbag_02":{
      image : "/images/bag_02.jpg"  ,
      title: "LuxeCarry",
      description:  `Experience the ultimate in style and functionality with the LuxeCarry Tote Bag, designed for those who appreciate luxury and practicality. Featuring a sleek and modern design, this tote bag is spacious enough to carry all your essentials while adding a touch of elegance to your everyday look. LuxCarry Tote, made of high -quality materials, combines sustainability and sophistication, making it the best accessories for work and weekends.   
      `,
       price : "$21.15",
    },
    "womenbag_03" : {
         image : "/images/bag_03.jpg",
      title:  "ChicVault",
      description:   `Make a statement with the ChicVault handbag, which combines modern design with luxurious elegance. Perfect for the fashion-forward person, this handbag features a sleek, structured shape and luxurious details that will complement any outfit. Made from premium materials, ChicVault bags combine style and functionality with plenty of space for all your essentials, making them perfect for day or evening events.
      `,
      price : "$12.00",
    },

    "womenbag_04" : {
      image: "/images/bag_04.jpg",
      title: "Sophia Satchel",
      description:   `Elevate your style with the timeless elegance of the Sophia Satchel, a sophisticated bag with a sleek silhouette, luxurious finishes and ample space to organise your essentials. Perfect for a work day, a weekend getaway, or a special occasion, the Sofia bag is functional and chic.
        Made from high-quality materials, this bag combines durability with a sleek design to become an essential accessory in your wardrobe.   
      `,
      price : "$18.40",
    },

   "womenbag_05":{
        image: "/images/bag_05.jpg",
      title: "VelvetVogue",
      description: `Treat yourself to luxury with the VelvetVogue clutch, a statement piece that exudes elegance and sophistication. Crafted from plush velvet and embellished with exquisite details, this clutch is the perfect accessory for evening events, weddings or special occasions. The compact yet functional design lets you carry everything you need in style, while the timeless appeal of velvet adds a touch of glamour to any outfit.
.   
      `,
      price : "$16.00",
    },

    "womenbag_06":{
      image: "/images/bag_06.jpg",
      title: "AuraBag",
      description:  `Exude elegance with the AuraBag Tote, the perfect combination of modern design and practicality. With a sleek and versatile silhouette, this bag is designed to make you look effortless and stylish while providing plenty of space for all your essentials. Made from premium materials, AuraBag totes are the ideal companion for work, shopping and everyday life, with every detail providing durability and timeless appeal.
   
      `,
      price : "$21.15",
    },

    "womenbag_07":{
      image: "/images/bag_07.jpg",
      title:  "StyleHaven",
      description:   `Enter a world of elegance with StyleHaven handbags, versatile accessories designed for the modern trendsetter. With sleek design, premium materials and spacious interiors, these handbags effortlessly combine fashion and function. Perfect for work, shopping or a night out, StyleHaven handbags are designed to complement any outfit and become a wardrobe essential.
     `,
       price : "$12.00",
     },

     "womenbag_08":{
       image: "/images/bag_08.jpg",
      title: "Grace Bag",
      description:   `Experience timeless sophistication with the Grace bag, a perfect balance between elegance and practicality. With its sleek silhouette and premium materials, it is perfect for casual or formal occasions. Thanks to the spacious internal and universal design, the bag of grace effortlessly improves your style, while maintaining your essential and at hand.
   
      `,
      price : "$18.40",
    },

    "mensshoe_01":{
      image: "/images/shoe_01.jpg",
      title : "StrideCraft",
      description: `Stay organized and stylish on the go with the StrideCraft Backpack, the perfect combination of functionality and modern design. Built for durability and comfort, this backpack is perfect for your daily commute, travel, or outdoor adventures. With its spacious compartments and sleek profile, the StrideCraft Backpack keeps your essentials safe and easily accessible while still looking effortlessly chic.
   
      `,
      price : "$30.00",
    },

    "mensshoe_02":{
      image : "/images/shoe_02.jpg"  ,
      title: "Urban Sole",
      description:  `Get comfort and style with Urban Sole shoes, designed for the modern man who values ​​both practicality and fashion. With a stylish design and high-quality materials, these shoes are perfect for work, daily walks, and weekend adventures. Urban Sole Sneakers combine unmatched comfort and durability to keep you standing out and feeling comfortable wherever you go.
   
      `,
       price : "$30.00",
    },
    "mensshoe_03" : {
         image : "/images/shoe_03.jpg",
      title:  "PrimeWalk",
      description:   `Elevate every step with PrimeWalk shoes, the perfect blend of style, comfort and durability. Designed for people who are always on the move, these shoes feature a modern aesthetic and ergonomic design to support your feet all day long. Whether you're commuting to work, running errands, or just enjoying a casual stroll, PrimeWalk shoes offer unmatched versatility and style.
   
      `,
      price : "$30.00",
    },

    "mensshoe_04" : {
      image: "/images/shoe_04.jpg",
      title: "VogueStep",
      description:   `Walk in style with VogueStep Shoes, where fashion meets functionality. Designed with a sleek and trendy aesthetic, these shoes are perfect for making a bold statement while ensuring unmatched comfort for your feet. VOGUESTEP SHOES, which focuses on high -quality materials and durability, can be used for work, casual outing, or evening events, so you can go ahead of the style curve.
   
      `,
      price : "$30.00",
    },

   "mensshoe_05":{
        image: "/images/shoe_05.jpg",
      title: "EliteFoot",
      description: `Experience the ultimate in sophistication and comfort with EliteFoot, designed for those who demand elegance in every step. Crafted with premium materials and impeccable craftsmanship, these shoes are ideal for both formal occasions and elegant everyday wear. With a focus on durability and comfort, EliteFoot shoes combine classic design with modern features to take your shoe collection to the next level.
   
      `,
      price : "$30.00",
    },

    "mensshoe_06":{
      image: "/images/shoe_06.jpg",
      title: "Pinnacle Loafers",
      description:  `Gain the top Rofo, the perfect mixture of eternal style and daily practicality, and the luxury and comfort. These moccasins, made of premium materials, provide a smooth and exquisite design to easily complete random and formal costumes. Built for durability and comfort, the Pinnacle loafer provides all-day support, making it perfect for a day at work or an evening out.
   
      `,
      price : "$30.00",
    },

    "mensshoe_07":{
      image: "/images/shoe_07.jpg",
      title:  "FlexStride",
      description:   `Stay one step ahead in FlexStride shoes designed for comfort, performance and style. Whether you're heading outdoors or leading an active lifestyle, these shoes offer a flexible fit and durable design that adapts to your lifestyle. Made from advanced materials that provide superior support, FlexStride shoes offer freedom of movement and are ideal for everyday use and sporting activities.
  
      `,
       price : "$30.00",
     },

     "mensshoe_08":{
       image: "/images/shoe_08.jpg",
      title: "RegalTread",
      description:   `Blending elegance and innovation, RegalTread shoes are the pinnacle of luxury and performance. Designed for those who seek style and comfort, these shoes combine a sleek look with exceptional durability and support. Made from premium materials, RegalTread shoes provide a perfect fit and all-day comfort, making them ideal for formal occasions and casual outings alike.
   
      `,
      price : "$30.00",
    }
  }

  const data = BagsCategoriesData[params.products];
  if(!data){
    return <h1>Product Not Found!</h1>;
  }


  return (
    <div>

       {/*Women's Bag Collection */}
       <section className="text-gray-600 body-font overflow-hidden">
       <div className="container px-5 py-24 mx-auto">
       <div className="lg:w-4/5 mx-auto flex flex-wrap">
       <Image
        alt= {data.title}
        className="lg:w-1/2 w-full h-full object-cover object-center rounded"
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
        {/* Muzna Amir Zubairi*/}
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
        {/* Muzna Amir Zubairi*/}
        </div>
        </div>
        </section>


        
         <div className="container px-5 py-24 mx-auto mt-20">
         <div className="flex flex-col">
         <h1 className = "text-center font-bold font-sans text-4xl text-lime-900"><b>Related Categories</b></h1>
         <p className = "text-center font-sans text-gray-400 text-xl mb-10 mt-3">Browse our vast selection of pendant ceiling lights and table lights to find the vibrant ideal that suits your taste</p>
         </div>
         <div className="flex flex-wrap">
         <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
         <div className="relative group  rounded-lg  overflow-hidden">
         <Image
              alt="product_image"
              className="w-full h-full h-64 object-cover object-center rounded"
              src= "/images/bag_01.jpg"
              width = {600}
              height = {600}
         />
         </div>
         <h2 className="text-xl font-sans font-bold text-lime-900 mt-5">
                                  Elegance Tote
         </h2>
         <p className="font-sans font-bold leading-relaxed text-gray-400 mt-2 text-xl">
                                   $16.00
         </p>
         {/* Muzna Amir Zubairi*/}
         </div>
         <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
         <div className="relative group rounded-lg  overflow-hidden">
         <Image
              alt="product_image"
              className="w-full h-full h-64 object-cover object-center rounded"
              src= "/images/shoe_01.jpg"
              width = {600}
              height = {600}
         />
         </div>
         <h2 className="text-xl font-sans font-bold text-lime-900 mt-5">
                                     StrideCraft 
         </h2>
         <p className="font-sans font-bold leading-relaxed text-gray-400 mt-2 text-xl">
                                         $30.00
         </p>
         </div>
         <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
         <div className="relative group rounded-lg  overflow-hidden">
         <Image
              alt="product_image"
              className="w-full h-full h-64 object-cover object-center rounded"
              src= "/images/bag_08.jpg"
              width = {600}
              height = {600}
         />
         </div>
         <h2 className="text-xl font-sans font-bold text-lime-900 mt-5">
                                  Grace Bag
         </h2>
         <p className="font-sans font-bold leading-relaxed text-gray-400 mt-2 text-xl">
                                  $18.40
         </p>
         </div>
         <div className="p-4 md:w-1/4 sm:mb-0 mb-6 mx-auto">
         <div className="relative group rounded-lg  overflow-hidden">
         <Image
              alt="product_image"
              className="w-full h-full h-64 object-cover object-center rounded"
              src= "/images/shoe_08.jpg"
              width = {600}
              height = {600}
         />
         </div>
         <h2 className="text-xl font-sans font-bold text-lime-900 mt-5">
                               RegalTread
         </h2>
         <p className="font-sans font-bold leading-relaxed text-gray-400 mt-2 text-xl">
                               $30.00
         </p>
         </div>
         </div>
         {/* Muzna Amir Zubairi*/}
         <p className = "text-center font-bold font-sans text-lime-900 text-xl mt-8"><Link href = "/categories"><u>View More</u></Link></p>          </div>
    </div>
   );
}