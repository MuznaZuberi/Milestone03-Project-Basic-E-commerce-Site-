import { NextResponse } from "next/server";

type ProductsProps = {
	id: string,
	image: string,
	title: string,
	description: string,
	price: string,
};

const MyShopProducts: ProductsProps[] = [

  // Shop Products Data
  {
     id: "product_01",
     image: "/images/product_01.jpg",
      title : "Esprit Ruffle Shirt",
      description: `Raise your elegant shirt style with spirit ruffles. This shirt, perfectly prepared for modern sophistication, is equipped with a timeless design with a soft disconnection, which adds a shade of femininity to your wardrobe. Made from high-quality fabric, it offers superior comfort and durability for all-day wear. Whether you're dressing up for a formal event or adding a little extra touch to a casual outfit, the Esprit Ruffle Shirt is versatile and effortlessly chic. Available in several sizes and colors, it's a must-have for any fashion lover.   
      `,
      price : "$16.00",
  },

  {
     id: "product_02",
    image : "/images/product_02.jpg"	,
      title: "Herschel supply",
      description:  `Combine functionality and style with the Herschel Supply Backpack, a perfect companion for your daily adventures. Designed with meticulous attention to detail, this backpack offers a spacious main compartment, durable construction, and a sleek, timeless design. Whether you're heading to work, school or the outdoors, the Herschel Supply Backpack keeps all your belongings organized and safe, and features padded shoulder straps for unparalleled comfort.   
      `,
       price : "$21.15",
  },
  {
     id: "product_03",
    image : "/images/product_03.jpg",
      title:  "Front Pocket Jumper",
      description:   `Stay comfortable and elegant with the front pocket rider, a perfect mixture of comfort and relaxed elegance. Made from high quality fabric, this rider is designed to keep you warm while offering a modern and modern modern adjustment. Its standout feature, a roomy front pocket, adds both functionality and style to your everyday look. Whether you're lounging around the house, heading to a casual get-together, or layering up for cooler weather, the front pocket sweater is a versatile wardrobe essential.  
      `,
      price : "$12.00",
  },
  {
     id: "product_04",
   image: "/images/product_04.jpg",
      title: "Classic Trench Coat",
      description:   `Redefine elegance with this classic and timeless trench coat, a wardrobe staple that exudes sophistication and versatility. Crafted from premium materials, this coat features a fitted silhouette, double-breasted fastening and belted waist for effortless style. A classic trench coat is perfect for both formal and casual occasions, combining style and functionality to keep you warm and create a chic look in any weather.  
      `,
      price : "$18.40",
  },
  {
     id: "product_05",
    image: "/images/product_05.jpg",
      title: "Pretty Little Thing",
      description: `Look fashionable in a Pretty Little Thing dress that will make you shine on any occasion. Made from soft, high-quality fabric, this fitted dress is perfect for casual outings, parties, and date nights. Its chic design and impeccable details ensure that you always look effortlessly on-trend. Whether paired with heels for a formal look or sneakers for a casual vibe, the Pretty Little Thing dress is a versatile must-have for every wardrobe.
      `,
      price : "$16.00",
  },
  {
     id: "product_06",
   image: "/images/product_06.jpg",
      title: "Femme T-Shirt In Stripe",
      description:  `Elevate your everyday style with the women's striped t-shirt, the perfect blend of comfort and timeless fashion. This t-shirt is a must-have for an effortless everyday look and is designed with a classic striped pattern and relaxed fit. Made from soft, breathable fabric, it keeps you feeling fresh and chic all day. Whether you pair it with a blazer or keep it casual with your favorite jeans, the Femme Stripe T-Shirt can easily adapt to any occasion. 
      `,
      price : "$21.15",
  },
  {
     id: "product_07",
    image: "/images/product_07.jpg",
      title:  "Shirt in Stretch Cotton",
      description:   `Use a stretch mark shirt to be familiar with outstanding comfort and sophisticated and sophisticated. This shirt, designed for perfect planting, combines the softness of the cotton and the flexibility of the elastic fabric to make the most of the movement and style. The stretch cotton shirt is perfect for work, casual outings and formal events and features an elegant design that will make you look stylish and keep you comfortable all day long. 
      `,
       price : "$12.00",
  },
  {
     id: "product_08",
    image: "/images/product_08.jpg",
      title: "Pieces Metallic Printed",
      description:   `It shines brightly in part of the metal print. This adds a stylish addition to the wardrobe that can easily combine elegance and talent. This top is equipped with exciting metal prints. Made from high-quality fabrics, they add a touch of sparkle to any ensemble while providing a comfortable fit. Pair them with jeans, a skirt or tailored trousers for a versatile and chic look.  
      `,
      price : "$18.40",
  },
  

  //Women's Bag Data
  {
     id: "womenbag_01",
     image: "/images/bag_01.jpg",
      title : "Elegance Tote",
      description: `The Elegance Tote Bag is the perfect blend of sophistication and practicality, designed to carry your essentials in style. With a sleek silhouette and spacious interior, this tote bag is perfect for work, shopping, or casual outings. Tote elegance made of premium material provides sustainability and chic appearance. The universal design guarantees that the style will remain organized without bias.  
      `,
      price : "$16.00",
  },
  {
     id: "womenbag_02",
    image : "/images/bag_02.jpg"  ,
      title: "LuxeCarry",
      description:  `Experience the ultimate in style and functionality with the LuxeCarry Tote Bag, designed for those who appreciate luxury and practicality. Featuring a sleek and modern design, this tote bag is spacious enough to carry all your essentials while adding a touch of elegance to your everyday look. LuxCarry Tote, made of high -quality materials, combines sustainability and sophistication, making it the best accessories for work and weekends. 
      `,
       price : "$21.15",
  },
  {
     id: "womenbag_03",
    image : "/images/bag_03.jpg",
      title:  "ChicVault",
      description:   `Make a statement with the ChicVault handbag, which combines modern design with luxurious elegance. Perfect for the fashion-forward person, this handbag features a sleek, structured shape and luxurious details that will complement any outfit. Made from premium materials, ChicVault bags combine style and functionality with plenty of space for all your essentials, making them perfect for day or evening events. 
      `,
      price : "$12.00",
  },
  {
     id: "womenbag_04",
   image: "/images/bag_04.jpg",
      title: "Sophia Satchel",
      description:   `Elevate your style with the timeless elegance of the Sophia Satchel, a sophisticated bag with a sleek silhouette, luxurious finishes and ample space to organise your essentials. Perfect for a work day, a weekend getaway, or a special occasion, the Sofia bag is functional and chic. Made from high-quality materials, this bag combines durability with a sleek design to become an essential accessory in your wardrobe.   
      `,
      price : "$18.40",
  },
  {
     id: "womenbag_05",
    image: "/images/bag_05.jpg",
      title: "VelvetVogue",
      description: `Treat yourself to luxury with the VelvetVogue clutch, a statement piece that exudes elegance and sophistication. Crafted from plush velvet and embellished with exquisite details, this clutch is the perfect accessory for evening events, weddings or special occasions. The compact yet functional design lets you carry everything you need in style, while the timeless appeal of velvet adds a touch of glamour to any outfit. 
      `,
      price : "$16.00",
  },
  {
     id: "womenbag_06",
   image: "/images/bag_06.jpg",
      title: "AuraBag",
      description:  `Exude elegance with the AuraBag Tote, the perfect combination of modern design and practicality. With a sleek and versatile silhouette, this bag is designed to make you look effortless and stylish while providing plenty of space for all your essentials. Made from premium materials, AuraBag totes are the ideal companion for work, shopping and everyday life, with every detail providing durability and timeless appeal.
      `,
      price : "$21.15",
  },
  {
     id: "womenbag_07",
    image: "/images/bag_07.jpg",
      title:  "StyleHaven",
      description:   `Enter a world of elegance with StyleHaven handbags, versatile accessories designed for the modern trendsetter. With sleek design, premium materials and spacious interiors, these handbags effortlessly combine fashion and function. Perfect for work, shopping or a night out, StyleHaven handbags are designed to complement any outfit and become a wardrobe essential. 
      `,
       price : "$12.00",
  },
  {
     id: "womenbag_08",
    image: "/images/bag_08.jpg",
      title: "Grace Bag",
      description:   `Experience timeless sophistication with the Grace bag, a perfect balance between elegance and practicality. With its sleek silhouette and premium materials, it is perfect for casual or formal occasions. Thanks to the spacious internal and universal design, the bag of grace effortlessly improves your style, while maintaining your essential and at hand.
      `,
      price : "$18.40",
  },





  // Men's Shoe Data
  {
     id: "mensshoe_01",
     image: "/images/shoe_01.jpg",
      title : "StrideCraft",
      description: `Stay organized and stylish on the go with the StrideCraft Backpack, the perfect combination of functionality and modern design. Built for durability and comfort, this backpack is perfect for your daily commute, travel, or outdoor adventures. With its spacious compartments and sleek profile, the StrideCraft Backpack keeps your essentials safe and easily accessible while still looking effortlessly chic. 
      `,
      price : "$30.00",
  },
  {
     id: "mensshoe_02",
    image : "/images/shoe_02.jpg"  ,
      title: "Urban Sole",
      description:  `Get comfort and style with Urban Sole shoes, designed for the modern man who values ​​both practicality and fashion. With a stylish design and high-quality materials, these shoes are perfect for work, daily walks, and weekend adventures. Urban Sole Sneakers combine unmatched comfort and durability to keep you standing out and feeling comfortable wherever you go.  
      `,
       price : "$30.00",
  },
  {
     id: "mensshoe_03",
    image : "/images/shoe_03.jpg",
      title:  "PrimeWalk",
      description:   `Elevate every step with PrimeWalk shoes, the perfect blend of style, comfort and durability. Designed for people who are always on the move, these shoes feature a modern aesthetic and ergonomic design to support your feet all day long. Whether you're commuting to work, running errands, or just enjoying a casual stroll, PrimeWalk shoes offer unmatched versatility and style.   
      `,
      price : "$30.00",
  },
  {
     id: "mensshoe_04",
   image: "/images/shoe_04.jpg",
      title: "VogueStep",
      description:   `Walk in style with VogueStep Shoes, where fashion meets functionality. Designed with a sleek and trendy aesthetic, these shoes are perfect for making a bold statement while ensuring unmatched comfort for your feet. VOGUESTEP SHOES, which focuses on high -quality materials and durability, can be used for work, casual outing, or evening events, so you can go ahead of the style curve.  
      `,
      price : "$30.00",
  },
  {
     id: "mensshoe_05",
    image: "/images/shoe_05.jpg",
      title: "EliteFoot",
      description: `Experience the ultimate in sophistication and comfort with EliteFoot, designed for those who demand elegance in every step. Crafted with premium materials and impeccable craftsmanship, these shoes are ideal for both formal occasions and elegant everyday wear. With a focus on durability and comfort, EliteFoot shoes combine classic design with modern features to take your shoe collection to the next level. 
      `,
      price : "$30.00",
  },
  {
     id: "mensshoe_06",
   image: "/images/shoe_06.jpg",
      title: "Pinnacle Loafers",
      description:  `Gain the top Rofo, the perfect mixture of eternal style and daily practicality, and the luxury and comfort. These moccasins, made of premium materials, provide a smooth and exquisite design to easily complete random and formal costumes. Built for durability and comfort, the Pinnacle loafer provides all-day support, making it perfect for a day at work or an evening out.
      `,
      price : "$30.00",
  },
  {
     id: "mensshoe_07",
    image: "/images/shoe_07.jpg",
      title:  "FlexStride",
      description:   `Stay one step ahead in FlexStride shoes designed for comfort, performance and style. Whether you're heading outdoors or leading an active lifestyle, these shoes offer a flexible fit and durable design that adapts to your lifestyle. Made from advanced materials that provide superior support, FlexStride shoes offer freedom of movement and are ideal for everyday use and sporting activities.  
      `,
       price : "$30.00",
  },
  {
     id: "mensshoe_08",
    image: "/images/shoe_08.jpg",
      title: "RegalTread",
      description:   `Blending elegance and innovation, RegalTread shoes are the pinnacle of luxury and performance. Designed for those who seek style and comfort, these shoes combine a sleek look with exceptional durability and support. Made from premium materials, RegalTread shoes provide a perfect fit and all-day comfort, making them ideal for formal occasions and casual outings alike.  
      `,
      price : "$30.00",
  },
];

export async function GET() {
  return NextResponse.json(MyShopProducts);
}
