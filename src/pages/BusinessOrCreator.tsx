import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import BuvaazSlider from "@/components/Slider";
import { useNavigate } from "react-router-dom";

export default function BusinessOrCreator() {
  const navigate = useNavigate();
  return (
    <div>
      <Navigation />
      <div className="my-20">
        <div className="div-section-padding-top-creator">
          <div className="div-container leftalignment">
            <div className="div-space-y-5-3">
              <img
                src="images/buvaaz_logo_03.png"
                loading="lazy"
                width="114"
                sizes="113.994140625px"
                alt=""
                srcSet="images/buvaaz_logo_03-p-500.png 500w, images/buvaaz_logo_03-p-800.png 800w, images/buvaaz_logo_03.png 1080w"
                className="image-6"
              />
              <div className="h1-title">Continue as a creator or business.</div>
            </div>
            <div className="form-4">
              <div className="form-4 w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  className="form-2"
                  data-wf-page-id="68c1633b5dda349be508dd71"
                  data-wf-element-id="94ae91e8-98b2-dd11-7f0a-8ed168ee247c"
                >
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="primary-button-2 w-button"
                    value="🔗  "
                  />
                </form>
                <div className="success-message w-form-done">
                  <div className="text-block-2">
                    👏 Great — You&#x27;ll hear from us in a few days!
                  </div>
                </div>
                <div className="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
            <div className="form-scorecard-container">
              <div className="w-layout-grid grid">
                <div className="div-block-39">
                  <a href="#" className="continue-as-creator w-inline-block">
                    <div className="margin-bottom margin-xxlarge">
                      <div className="icon-featured-square-large-business">
                        <div className="text-block-23">🎬</div>
                      </div>
                    </div>
                    <div className="choose-one-creator">
                      I&#x27;m a Creator{" "}
                    </div>
                    <div className="choose-one-creator-text">
                      I want to earn commission selling products online —
                      WhatsApp, TikTok and Snapchat and more!
                    </div>
                    <div
                      onClick={() =>
                        navigate("/chooseplan?accountType=creator")
                      }
                      className="choose-one-cta"
                    >
                      <div className="secotext">Join as — a Creator </div>
                    </div>
                  </a>
                </div>
                <a href="#" className="continue-as-business w-inline-block">
                  <div className="margin-bottom margin-xxlarge">
                    <div className="icon-featured-square-large-business">
                      <div className="div-block-38">
                        <div className="text-block-23">🚀</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-block-29">I&#x27;m a Business </div>
                  <div className="text-block-30">
                    I want to boost sales, automate my order delivery process,
                    handle inquiries and work with creators.
                  </div>
                  <div
                    onClick={() => navigate("/chooseplan?accountType=business")}
                    className="choose-one-cta"
                  >
                    <div className="secotext">Join as — a Business </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BuvaazSlider />
      <Footer />
      <Loader />
    </div>
  );
}
