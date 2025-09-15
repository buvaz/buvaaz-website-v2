import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import BuvaazSlider from "@/components/Slider";

export default function NotFound() {
  return (
    <div>
      <Navigation />
      <div className="my-20">
        <p className="text-center font-bold">The page you're looking for isn't available</p>
      </div>
      <BuvaazSlider />
      <Footer />
      <Loader />
    </div>
  );
}
