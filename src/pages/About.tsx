import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <div>
      <Navigation />
      <div className="flex justify-center">
        <div className="div-whynow">
          <div className="text-center-align">
            <div className="max-width-center">
              <div className="h2-title">About buvaaz</div>
            </div>
          </div>
          <div className="div-block-20">
            <a
              href="https://play.google.com/store/apps/details?id=com.buvaaz.mobile&amp;hl=en"
              className="primacta w-inline-block"
            >
              <div className="primatext">Start earning — with buvaaz</div>
            </a>
          </div>
          <FAQ />
        </div>
      </div>
      <Footer />
      <Loader />
    </div>
  );
}
