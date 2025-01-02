import Slider from "./slider/page";
import Achievements from "./achievements/page";
import OurProducts from "./our_products/page";

export default function Home() {
  return (
    <div>
    	<Slider/>
    	<OurProducts/>
    	<Achievements/>
    </div>
  );
}
