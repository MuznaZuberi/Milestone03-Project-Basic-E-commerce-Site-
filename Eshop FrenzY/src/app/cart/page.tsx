"use client";
import { useState, useEffect } from "react";
// ============================
//   IMAGE IMPORTS SECTION
// ============================
import Image from "next/image";



type ProductDetails = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
};

export default function Cart() {
  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [cart, setCart] = useState<ProductDetails[]>([]);

  // Fetch products from the API
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/product");
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  // Add product to cart
  const addToCart = (product: ProductDetails) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  
  {/* Muzna Amir Zubairi*/}
  const totalAmount = cart.reduce((sum, item) => {
  // Remove commas and non-numeric characters (except dot)
  const price = parseFloat(item.price.replace(/[^0-9.-]+/g, "").replace(/,/g, ""));
  return sum + price;
}, 0);


  return (
    <div>
      <div className = "flex  xl:flex-row flex-col justify-between px-6">
      <div>
           {products.map((product)=>(
      <div key = {product.id}>
             <div className = "flex md:flex-row lg:flex-row xl:flex-row flex-col gap-7 py-4 rounded-xl items-center shadow-xl px-4 mb-10">
              <Image src = {product.image} alt = {product.title} width = {200} height= {200}/>
              <h2 className = "font-sans font-bold text-md lg:text-xl">{product.title}</h2>
              <p className = "text-gray-400 text-lg font-bold font-sans">{product.price}</p>
              <button onClick = {()=>addToCart(product)} className = "about-container px-6 py-2 bg-lime-900 text-white font-bold font-sans rounded-xl">
                            AddToCart
              </button>
      {/* Muzna Amir Zubairi*/}
      </div>
      </div>
      ))}
      </div>
      <div className = "shadow-xl h-full text-4xl px-16  py-6 mt-10 font-bold font-sans text-center">Cart Items
           {cart.length === 0 ? (
          <p className = "text-sm">Your cart is empty.</p>
      ) : (
      <div>
      {cart.map((item, index) => (
      <div
          key={index}
                
      >
      <h3 className = "text-sm mt-10 text-justify">{item.title}</h3>
      <p className = "text-sm text-justify">{item.price}</p>
      </div>
      ))}
      <h3 className = "mt-4 text-xl text-justify mt-6">SubTotal: <p className = "text-md text-gray-400"> ${totalAmount.toFixed(2)}</p></h3>
      <h3 className = "mt-4 text-xl text-justify">Total: <p className = "text-md text-yellow-600">${totalAmount.toFixed(2)}</p></h3>
      {/* Muzna Amir Zubairi*/}
      <button className = "border border-1 border-black px-4 rounded-xl mt-6 py-2 md:text-xl lg:text-xl xl:text-xl text-sm">Check Out</button>
      </div>
      )}
      </div>
      </div>

      {/* Shop SECTION End */}
    </div>
  );
}
