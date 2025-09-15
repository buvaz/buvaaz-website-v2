import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import BuvaazSlider from "@/components/Slider";

export default function FinishSignUp() {
  return (
    <div>
      <Navigation />
      <div className="my-20">
        <div className="div-space-y-5-3"><img src="images/buvaaz_logo_03.png" loading="lazy" width="114" sizes="113.994140625px" alt="" srcSet="images/buvaaz_logo_03-p-500.png 500w, images/buvaaz_logo_03-p-800.png 800w, images/buvaaz_logo_03.png 1080w" className="image-6"/>
          <div className="h1-title">🚀 Boost sales, automate and grow.</div>
          <p className="subheadline">Starts at UGX<strong> 37,000</strong>. Cancel at any time.</p>
        </div>
        <div className="form-4">
          <div className="form-4 w-form">
            <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form-2" data-wf-page-id="68bff8550c201171a66b774b" data-wf-element-id="94ae91e8-98b2-dd11-7f0a-8ed168ee247c"><input type="submit" data-wait="Please wait..." className="primary-button-2 w-button" value="🔗  "/></form>
            <div className="success-message w-form-done">
              <div className="text-block-2">👏 Great — You&#x27;ll hear from us in a few days!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div className="div-block-20">
          <a href="https://play.google.com/store/apps/details?id=com.buvaaz.mobile&amp;hl=en" className="primacta w-inline-block">
            <div className="primatext">Finish — sign up</div>
          </a>
        </div>
      </div>
      <BuvaazSlider />
      <Footer />
      <Loader />
    </div>
  );
}
