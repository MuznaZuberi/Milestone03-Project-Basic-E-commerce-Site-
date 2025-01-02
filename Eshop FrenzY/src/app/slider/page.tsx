import Image from "next/image";

export default function Slider() {
  return (
    <div>   
      <Image src = "/images/slider.jpg" alt ="slider_image" width={900} height={500} layout="responsive"/> 
    </div>

  );
}