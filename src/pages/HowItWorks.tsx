import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import BuvaazSlider from "@/components/Slider";

export default function HowItWorks() {
  return (
    <div>
      <Navigation />
      <div className="my-20">
        <div className="text-center-align">
          <div className="max-width-center">
            <div className="h2-title">How it works?</div>
          </div>
        </div>
        <div
          data-current="Tab 3"
          data-easing="ease"
          data-duration-in="300"
          data-duration-out="100"
          className="tabs w-tabs"
        >
          <div className="tabs-menu-2 w-tab-menu">
            <a
              data-w-tab="Tab 1"
              className="tab-link-tab-1 w-inline-block w-tab-link"
            >
              <div className="tab-1">I&#x27;m a Creator</div>
            </a>
            <a
              data-w-tab="Tab 3"
              className="tab-link-tab-3-3 w-inline-block w-tab-link w--current"
            >
              <div>I&#x27;m a Business</div>
            </a>
          </div>
          <div className="tabs-content-2 w-tab-content">
            <div data-w-tab="Tab 1" className="w-tab-pane">
              <section className="section_layout72">
                <div className="page-padding">
                  <div className="container-large">
                    <div className="padding-vertical padding-xhuge">
                      <div className="w-layout-grid layout72_component-how-it-works">
                        <div className="why-for-creator">
                          <div className="layout72_item-content">
                            <div className="margin-bottom margin-xxlarge">
                              <div className="icon-featured-square-large-creator">
                                <div className="text-block-23">🔗</div>
                              </div>
                            </div>
                            <div className="margin-bottom margin-xxsmall">
                              <h3 className="text-size-large">
                                Let AI Sell While You Sleep
                              </h3>
                            </div>
                            <div className="text-block-19">
                              Our AI-powered link replies to your buyers, sends
                              payment links, and confirms orders — all in your
                              tone.
                              <br />
                              <br />
                              <em>
                                &quot;Say goodbye to exhausting DMs and focus on
                                content.&quot;
                              </em>
                            </div>
                          </div>
                          <div className="margin-top margin-small">
                            <div className="button-row"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="buvaaz-stories-wrapper">
                      <div
                        style={{ paddingTop: "56.27659574468085%" }}
                        className="buvaaz-stories-video w-video w-embed"
                      >
                        <iframe
                          className="embedly-embed"
                          src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2F93sumevoe4&display_name=Wistia%2C+Inc.&url=https%3A%2F%2Fbuvaaz-com.wistia.com%2Fmedias%2F93sumevoe4&image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2F57b46a351b9dfb513217c0d7b9f806fe.jpg%3Fimage_crop_resized%3D960x540&type=text%2Fhtml&schema=wistia"
                          width="940"
                          height="529"
                          scrolling="no"
                          title="I made 200k on WhatsApp"
                        ></iframe>
                      </div>
                      <div className="div-block-34">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.buvaaz.mobile&amp;hl=en"
                          className="link-block-6 w-inline-block"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div data-w-tab="Tab 3" className="w-tab-pane w--tab-active">
              <section className="section_layout72">
                <div className="page-padding">
                  <div className="container-large">
                    <div className="padding-vertical padding-xhuge">
                      <div className="w-layout-grid layout72_component-how-it-works">
                        <div className="why-for-creator">
                          <div className="layout72_item-content">
                            <div className="margin-bottom margin-xxlarge">
                              <div className="icon-featured-square-large-creator">
                                <div className="text-block-23">🔗</div>
                              </div>
                            </div>
                            <div className="margin-bottom margin-xxsmall">
                              <h3 className="text-size-large">
                                Let AI Sell While You Sleep
                              </h3>
                            </div>
                            <div className="text-block-19">
                              Our AI-powered link replies to your buyers, sends
                              payment links, and confirms orders — all in your
                              tone.
                              <br />
                              <br />
                              <em>
                                &quot;Say goodbye to exhausting DMs and focus on
                                content.&quot;
                              </em>
                            </div>
                          </div>
                          <div className="margin-top margin-small">
                            <div className="button-row"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="buvaaz-stories-wrapper">
                      <div
                        style={{ paddingTop: "56.27659574468085%" }}
                        className="buvaaz-stories-video w-video w-embed"
                      >
                        <iframe
                          className="embedly-embed"
                          src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2F93sumevoe4&display_name=Wistia%2C+Inc.&url=https%3A%2F%2Fbuvaaz-com.wistia.com%2Fmedias%2F93sumevoe4&image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2F57b46a351b9dfb513217c0d7b9f806fe.jpg%3Fimage_crop_resized%3D960x540&type=text%2Fhtml&schema=wistia"
                          width="940"
                          height="529"
                          scrolling="no"
                          title="I made 200k on WhatsApp"
                        ></iframe>
                      </div>
                      <div className="div-block-34">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.buvaaz.mobile&amp;hl=en"
                          className="link-block-6 w-inline-block"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
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
