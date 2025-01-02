import Link from "next/link";

export default function Footer() {
	return (
     
     <div>
     <footer className="text-gray-600 body-font">
     <div className="container px-5 py-10 mx-auto mt-20">
     <div className="flex flex-wrap md:text-left text-center order-first">
     <div className="lg:w-1/4 md:w-1/2 w-full px-4">
     <h2 className="font-bold font-sans text-lime-900  tracking-widest text-lg mb-3">
                               CATEGORIES
     </h2>
     <nav className="list-none mb-10 font-sans">
     <Link href = "/categories" >
     <p className="text-gray-600 hover:text-gray-800">Womens Bags</p>
     </Link>
     <Link href = "/categories">
     <p className="text-gray-600 hover:text-gray-800">Mens Shoes</p>
     </Link>
     </nav>
     </div>
     <div className="lg:w-1/4 md:w-1/2 w-full px-4">
     <h2 className="font-bold font-sans text-lime-900 tracking-widest text-lg mb-3">
                                 Links
     </h2>
     <nav className="list-none mb-10">
     <Link href = "/">
     <p className="text-gray-600 hover:text-gray-800">Home</p>
     </Link>
     <Link href = "/shop">
     <p  className="text-gray-600 hover:text-gray-800">Shop</p>
     </Link>
     <Link href = "/categories">
     <p className="text-gray-600 hover:text-gray-800">Categories</p>
     </Link>
     <Link href = "/contact">
     <p className="text-gray-600 hover:text-gray-800">Contact</p>
     </Link>
     </nav>
     </div>
     <div className="lg:w-1/4 md:w-1/2 w-full px-4">
     <h2 className="font-bold font-sans text-lime-900 tracking-widest text-lg mb-3">
                                GET IN TOUCH
     </h2>
     <nav className  = "font-sans">
     <p>Any questions? Let us know in store at 8th floor DHA Phase 8th St Karachi Pakistan.</p>
     </nav> 
     </div>
     <div className="lg:w-1/4 md:w-1/2 w-full px-4">
     <h2 className="font-sans font-bold text-lime-900 tracking-widest text-lg mb-3">
                                  NEWSLETTER
     </h2>
     {/* Muzna Amir Zubairi*/}
     <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
     <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
     <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-lime-900 font-sans"
     >
                                  Placeholder
     </label>
     <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder = "search here....."
     />
      </div>
      {/* Muzna Amir Zubairi*/}
      <button className="lg:mt-2 font-sans font-bold xl:mt-0 flex-shrink-0 inline-flex text-white bg-lime-900  border-0 py-2 mt-4 px-6 focus:outline-none  rounded">
                                    Subscribe
      </button>
      </div>   
      </div>
      </div>
      </div>
      <div className="bg-lime-900 ">
      <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex font-bold font-sans items-center md:justify-start justify-center text-white">
      <h1 className = "text-6xl font-bold">E</h1>
      <span className="ml-1 text-2xl text-bold text-gray-100 pt-8">ShopFrenzY.</span>
      </a>
      <p className="text-white text-center font-sans sm:ml-6 sm:mt-0 mt-4 pt-8">
                           © 2025 muznazuberi123@gmail.com —
      <a
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-white ml-1 font-bold"
          target="_blank"
      >
                          @E-ShopfrenzY
      </a>
      </p>
      {/* Muzna Amir Zubairi*/}
      <span className="inline-flex sm:ml-auto sm:mt-0 pt-8 justify-center sm:justify-start">
      <Link href = "https://www.facebook.com/people/Muzna-Amir-Zubairi/pfbid02aoG8YEV65fQ6q7ZeiDYhuzaEEoHY3xRzcemnufxe66Q6rd5ZR5jDVWgD6bsTAxyul/?mibextid=ZbWKwL" target = "blank" className="text-white">
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
      </div>
      </footer>
  </div>

	);
}