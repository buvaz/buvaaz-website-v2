import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import BuvaazSlider from "@/components/Slider";

export default function SignUp2() {
    const screenWidth = window.innerWidth;
  return (
    <div>
      <Navigation />
      <div className="mt-20" style={{ width: screenWidth > 768 ? "65%" : "90%", margin: "auto" }}>
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
          <div className="h1-title">Buvaaz for creator</div>
        </div>
        <div className="form-4">
          <div className="form-4 w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              method="get"
              className="form-2"
              data-wf-page-id="68c2bfb4ee288d954589da65"
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
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div className="form-scorecard-container">
          <div className="w-layout-grid form-grid">
            <div className="w-form">
              <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
                method="get"
                data-wf-page-id="68c2bfb4ee288d954589da65"
                data-wf-element-id="b5d66c6b-3f6f-17a5-3e2f-badf6990fb00"
              >
                <div className="div-block-40">
                  <label className="field-label-2">
                    1<span className="text-span-20">/12</span>
                    <br />
                  </label>
                  <div className="div-block-41">
                    <label className="field-label-qn">
                      What’s your main platform for posting content?
                      <br />
                    </label>
                    <label className="field-label-subtitle">
                      What type of products do you sell?
                      <br />
                    </label>
                  </div>
                  <div className="div-block-42">
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        WhatsApp Status&quot;
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        TikTok
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        Instagram
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        Facebook
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        YouTube
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        Other
                      </span>
                    </label>
                  </div>
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="form-button-scorecard w-button"
                    value="Next"
                  />
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-scorecard-container">
          <div className="w-layout-grid form-grid">
            <div className="w-form">
              <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
                method="get"
                data-wf-page-id="68c2bfb4ee288d954589da65"
                data-wf-element-id="7b0d3905-f6a7-ecee-9346-2515fe9de598"
              >
                <div className="div-block-40">
                  <label className="field-label-2">
                    1<span className="text-span-20">/12</span>
                    <br />
                  </label>
                  <div className="div-block-41">
                    <label className="field-label-qn">
                      How many people usually view your stories, status, or per
                      post?
                      <br />
                    </label>
                    <label className="field-label-subtitle">
                      What type of products do you sell?
                      <br />
                    </label>
                  </div>
                  <div className="div-block-42">
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        Less than 50
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        51–200
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        201–500
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        501–1000
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        Over 1000
                      </span>
                    </label>
                  </div>
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="form-button-scorecard w-button"
                    value="Next"
                  />
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-scorecard-container">
          <div className="w-layout-grid form-grid">
            <div className="w-form">
              <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
                method="get"
                data-wf-page-id="68c2bfb4ee288d954589da65"
                data-wf-element-id="a87984a1-46a9-0bf7-a544-3f6a55b19e32"
              >
                <div className="div-block-40">
                  <label className="field-label-2">
                    2<span className="text-span-20">/12</span>
                    <br />
                  </label>
                  <div className="div-block-41">
                    <label className="field-label-qn">
                      How often do you post content or product-related things?
                      <br />
                    </label>
                    <label className="field-label-subtitle">
                      What type of products do you sell?
                      <br />
                    </label>
                  </div>
                  <div className="div-block-42">
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        Daily
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        A few times a week
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        Rarely
                      </span>
                    </label>
                  </div>
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="form-button-scorecard w-button"
                    value="Next"
                  />
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-scorecard-container">
          <div className="w-layout-grid form-grid">
            <div className="w-form">
              <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
                method="get"
                data-wf-page-id="68c2bfb4ee288d954589da65"
                data-wf-element-id="19420a91-d670-e98e-7ed4-ea48030247fa"
              >
                <div className="div-block-40">
                  <label className="field-label-2">
                    2<span className="text-span-20">/12</span>
                    <br />
                  </label>
                  <div className="div-block-41">
                    <label className="field-label-qn">
                      Have you ever made money online before?
                      <br />
                    </label>
                    <label className="field-label-subtitle">
                      What type of products do you sell?
                      <br />
                    </label>
                  </div>
                  <div className="div-block-42">
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        Yes
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        No
                      </span>
                    </label>
                  </div>
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="form-button-scorecard w-button"
                    value="Next"
                  />
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-scorecard-container">
          <div className="w-layout-grid form-grid">
            <div className="w-form">
              <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
                method="get"
                data-wf-page-id="68c2bfb4ee288d954589da65"
                data-wf-element-id="40570f30-43dc-dca6-5e65-e3554423e5f8"
              >
                <div className="div-block-40">
                  <label className="field-label-2">
                    2<span className="text-span-20">/12</span>
                    <br />
                  </label>
                  <div className="div-block-41">
                    <label className="field-label-qn">
                      Would you post ready-made product deals if Buvaaz handled
                      the orders, delivery &amp; payouts?
                      <br />
                    </label>
                    <label className="field-label-subtitle">
                      What type of products do you sell?
                      <br />
                    </label>
                  </div>
                  <div className="div-block-42">
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        Yes
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        Maybe
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        No
                      </span>
                    </label>
                  </div>
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="form-button-scorecard w-button"
                    value="Next"
                  />
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-scorecard-container">
          <div className="w-layout-grid form-grid">
            <div className="w-form">
              <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
                method="get"
                data-wf-page-id="68c2bfb4ee288d954589da65"
                data-wf-element-id="38ab3c1a-6ce9-f4ae-5662-66d338e5dbf9"
              >
                <div className="div-block-40">
                  <label className="field-label-2">
                    2<span className="text-span-20">/12</span>
                    <br />
                  </label>
                  <div className="div-block-41">
                    <label className="field-label-qn">
                      How soon do you want to start earning?
                      <br />
                    </label>
                    <label className="field-label-subtitle">
                      What type of products do you sell?
                      <br />
                    </label>
                  </div>
                  <div className="div-block-42">
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        Today
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        This week
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        type="radio"
                        data-name="Radio"
                        id="radio"
                        name="radio"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        value="Radio"
                      />
                      <span className="field-label-qn-multi-select w-form-label">
                        Not sure yet
                      </span>
                    </label>
                  </div>
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="form-button-scorecard w-button"
                    value="Next"
                  />
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-scorecard-container">
          <div className="w-layout-grid form-grid">
            <div className="w-form">
              <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
                method="get"
                data-wf-page-id="68c2bfb4ee288d954589da65"
                data-wf-element-id="3edb03aa-58d9-646c-aea8-afef5f26d63f"
              >
                <div className="div-block-40">
                  <label className="field-label-2">
                    3<span className="text-span-20">/12</span>
                    <br />
                  </label>
                  <div className="div-block-41">
                    <label className="field-label-qn">
                      Where are you located?
                      <br />
                    </label>
                    <label className="field-label-subtitle">
                      City, Country
                      <br />
                    </label>
                  </div>
                  <input
                    className="text-field-2 w-input"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder="Type your answer here"
                    type="text"
                    id="name"
                  />
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="form-button-scorecard w-button"
                    value="Next"
                  />
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-scorecard-container">
          <div className="w-layout-grid form-grid">
            <div className="w-form">
              <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
                method="get"
                data-wf-page-id="68c2bfb4ee288d954589da65"
                data-wf-element-id="32025cc7-903e-c5db-ef73-c51808d9351f"
              >
                <div className="div-block-40">
                  <label className="field-label-2">
                    8<span className="text-span-20">/12</span>
                    <br />
                  </label>
                  <div className="div-block-41">
                    <label className="field-label-qn">
                      Comfirm your email?
                      <br />
                    </label>
                    <label className="field-label-subtitle">
                      Enter your email to start your buvaaz memberships.
                      <br />
                    </label>
                  </div>
                  <input
                    className="text-field-2 w-input"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder="e.g. example@gmail.com"
                    type="email"
                    id="name"
                  />
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="form-button-scorecard w-button"
                    value="Next"
                  />
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-scorecard-container">
          <div className="w-layout-grid form-grid">
            <div className="w-form">
              <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
                method="get"
                data-wf-page-id="68c2bfb4ee288d954589da65"
                data-wf-element-id="555c40d3-54f6-2220-60b0-ce388fdffc45"
              >
                <div className="div-block-40">
                  <label className="field-label-2">
                    9<span className="text-span-20">/12</span>
                    <br />
                  </label>
                  <div className="div-block-41">
                    <label className="field-label-qn">
                      Check your inbox
                      <br />
                    </label>
                    <label className="field-label-subtitle">
                      We sent a sign up short code to{" "}
                      <span className="text-span-21">example@gmail.com.</span>{" "}
                      Enter the code in your email to continue.
                      <br />
                    </label>
                  </div>
                  <input
                    className="text-field-2 w-input"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder="00000"
                    type="text"
                    id="name"
                  />
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="form-button-scorecard w-button"
                    value="Next"
                  />
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-scorecard-container">
          <div className="w-layout-grid form-grid">
            <div className="w-form">
              <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
                method="get"
                data-wf-page-id="68c2bfb4ee288d954589da65"
                data-wf-element-id="58c3f5ed-5b4a-b1b9-28ce-5d62b4255869"
              >
                <div className="div-block-40">
                  <label className="field-label-2">
                    10<span className="text-span-20">/12</span>
                    <br />
                  </label>
                  <div className="div-block-41">
                    <label className="field-label-qn">
                      Comfirm your WhatsApp Number?
                      <br />
                    </label>
                    <label className="field-label-subtitle">
                      Enter your number to start your buvaaz memberships.
                      <br />
                    </label>
                  </div>
                  <input
                    className="text-field-2 w-input"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder="e.g. 0766898058"
                    type="tel"
                    id="name"
                  />
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="form-button-scorecard w-button"
                    value="Next"
                  />
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-scorecard-container">
          <div className="w-layout-grid form-grid">
            <div className="w-form">
              <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
                method="get"
                data-wf-page-id="68c2bfb4ee288d954589da65"
                data-wf-element-id="6e18c925-bc82-ad8c-8358-87fe9e3d55c3"
              >
                <div className="div-block-40">
                  <label className="field-label-2">
                    11<span className="text-span-20">/12</span>
                    <br />
                  </label>
                  <div className="div-block-41">
                    <label className="field-label-qn">
                      Check your inbox
                      <br />
                    </label>
                    <label className="field-label-subtitle">
                      We sent a sign up short code to{" "}
                      <span className="text-span-21">0766898058.</span> Enter
                      the code in sent to your number to continue.
                      <br />
                    </label>
                  </div>
                  <input
                    className="text-field-2 w-input"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder="00000"
                    type="text"
                    id="name"
                  />
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="form-button-scorecard w-button"
                    value="Next"
                  />
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-scorecard-container">
          <div className="w-layout-grid form-grid">
            <div className="w-form">
              <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
                method="get"
                data-wf-page-id="68c2bfb4ee288d954589da65"
                data-wf-element-id="d24621a1-ba7a-10b9-bf61-7a912e741c92"
              >
                <div className="div-block-40">
                  <label className="field-label-2">
                    11<span className="text-span-20">/12</span>
                    <br />
                  </label>
                  <div className="div-block-41">
                    <label className="field-label-qn">
                      Create your password
                      <br />
                    </label>
                    <label className="field-label-subtitle">
                      Your password protects your Buvaaz account
                      <br />
                    </label>
                  </div>
                  <input
                    className="text-field-2 w-input"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder="XXXXXXXX"
                    type="text"
                    id="name"
                  />
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="form-button-scorecard w-button"
                    value="Next"
                  />
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-scorecard-container">
          <div className="w-layout-grid form-grid">
            <div className="w-form">
              <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
                method="get"
                data-wf-page-id="68c2bfb4ee288d954589da65"
                data-wf-element-id="4e00d7dd-b904-271a-5c6b-0f4d0dda7064"
              >
                <div className="div-block-40">
                  <div className="div-block-41">
                    <label className="field-label-score-results">
                      You’re one post away from earning with Buvaaz.
                      <br />
                    </label>
                    <label className="field-label-subtitle">
                      Based on your score, you could earn{" "}
                      <span className="text-span-22">
                        UGX 150,000–200,000/week,
                      </span>{" "}
                      just like Dennis Lwanga who got his first order in 6 days
                      and made UGX 225,370 in 1 week — all from WhatsApp Status.
                      <br />
                      <br />✅ Ready-to-post product deals and earn
                      <br />✅ Sell your own or other people’s products
                      <br />✅ Buvaaz Link in Bio AI automates orders
                      <br />✅ Instant mobile money payouts
                      <br />‍<br />
                    </label>
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="form-button-scorecard-results w-button"
                      value="Finish — setting up"
                    />
                  </div>
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
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
