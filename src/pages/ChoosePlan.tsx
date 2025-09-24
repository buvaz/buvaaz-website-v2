import api from "@/api/api";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import PageLoader from "@/components/PageLoader";
import BuvaazSlider from "@/components/Slider";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function ChoosePlan() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const accountType = searchParams.get("accountType");
  const [period, setPeriod] = useState<number>(0);
  const [loading, isLoading] = useState<boolean>(false);
//   const [error, isError] = useState<boolean>(false);
  const creatorPlan = [
    {
      period: "Monthly",
      data: [
        {
          title: "Free",
          price: 0,
          description: [
            "5 Product Deals",
            "Wallet withdrawals above UGX 50,000",
            "Payout delay (7 days)",
          ],
        },
        {
          title: "Pro",
          price: 37000,
          description: [
            "Unlimited Product Deals",
            "5 Collabo invites/month",
            "5 Collabo requests/month",
            "10 products added on buvaaz link",
            "Instant wallet withdrawal",
            "Priority support",
          ],
        },
        {
          title: "Plus",
          price: 74000,
          description: [
            "Everything in Pro",
            "Unlimited collabo invites",
            "50 products added on buvaaz link",
            "Unlimited instant withdrawals",
            "Buvaaz AI sales agent 25/7",
            "Verified Creator badge",
            "Collabo priority",
          ],
        },
      ],
    },
    {
      period: "Yearly",
      data: [
        {
          title: "Free",
          price: 0,
          description: [
            "5 Product Deals",
            "Wallet withdrawals above UGX 50,000",
            "Payout delay (7 days)",
          ],
        },
        {
          title: "Pro",
          price: 370000,
          description: [
            "Unlimited Product Deals",
            "5 Collabo invites/month",
            "5 Collabo requests/month",
            "10 products added on buvaaz link",
            "Instant wallet withdrawal",
            "Priority support",
          ],
        },
        {
          title: "Plus",
          price: 740000,
          description: [
            "Everything in Pro",
            "Unlimited collabo invites",
            "50 products added on buvaaz link",
            "Unlimited instant withdrawals",
            "Buvaaz AI sales agent 25/7",
            "Verified Creator badge",
            "Collabo priority",
          ],
        },
      ],
    },
  ];

  const businessPlan = [
    {
      period: "Monthly",
      data: [
        {
          title: "Free",
          price: 0,
          description: ["1 Product Upload", "Payout delay (7 days)"],
        },
        {
          title: "Pro",
          price: 85000,
          description: [
            "Unlimited Product uploads",
            "5 Collabo campaigns/month",
            "5 Collabo requests/month",
            "20 products added on buvaaz link",
            "Basic analytics dashboard",
            "Whatsapp order alerts",
          ],
        },
        {
          title: "Plus",
          price: 185000,
          description: [
            "Everything in Pro",
            "Unlimited collabo campaigns",
            "Unlimited requests",
            "100 products on AI link",
            "Advanced analytics",
            "24/7 Buvaaz AI sales agent",
            "Handled via Buvaaz Delivery",
          ],
        },
      ],
    },
    {
      period: "Yearly",
      data: [
        {
          title: "Free",
          price: 0,
          description: ["1 Product Upload", "Payout delay (7 days)"],
        },
        {
          title: "Pro",
          price: 850000,
          description: [
            "Unlimited Product uploads",
            "5 Collabo campaigns/month",
            "5 Collabo requests/month",
            "20 products added on buvaaz link",
            "Basic analytics dashboard",
            "Whatsapp order alerts",
          ],
        },
        {
          title: "Plus",
          price: 1850000,
          description: [
            "Everything in Pro",
            "Unlimited collabo campaigns",
            "Unlimited requests",
            "100 products on AI link",
            "Advanced analytics",
            "24/7 Buvaaz AI sales agent",
            "Handled via Buvaaz Delivery",
          ],
        },
      ],
    },
  ];

  const selectedData =
    accountType == "creator" ? [...creatorPlan] : [...businessPlan];

  const handleSubmit = async (price: number, accountType: string) => {
    isLoading(true);
    const data = {
      price,
      accountType: accountType == "creator" ? "CREATOR" : "BUSINESS",
    };
    const res = await api.post("/guest-session/create", data);
    if (res.status == 200) {
      localStorage.setItem("sessionId", (res.data as any).data!.sessionsId);
      localStorage.setItem("accountType", accountType);
      navigate(`/questions`);
      isLoading(false);
    } else {
      toast("Error: Something went wrong!\nPlease try again later.");
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div>
      <Navigation />
      <div className="my-20">
        <div className="">
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
            <div className="h1-title">Choose your plan</div>
            {/* <p className="subheadline">Step 1 of 3</p> */}
            <div
              data-current="Tab 1"
              data-easing="ease"
              data-duration-in="300"
              data-duration-out="100"
              className="tabs w-tabs"
            >
              <div className="tabs-menu-2 w-tab-menu">
                <a
                  onClick={() => setPeriod(0)}
                  data-w-tab="Tab 1"
                  className={`tab-link-tab-1 w-inline-block w-tab-link ${
                    period == 0 ? "w--current" : ""
                  }`}
                >
                  <div className="tab-1">Monthly</div>
                </a>
                <a
                  onClick={() => setPeriod(1)}
                  data-w-tab="Tab 3"
                  className={`tab-link-tab-3-3 w-inline-block w-tab-link ${
                    period == 1 ? "w--current" : ""
                  }`}
                >
                  <div>Yearly</div>
                </a>
              </div>
              {/*----------- Title Tabs ----------------*/}

              <div className="w-layout-grid choose-plan-grid">
                {selectedData[period].data.map((item: any, index: number) => (
                  <div
                    key={index}
                    id="w-node-_198e3852-bb4f-30c6-569f-bf0c3c9ff84f-9f6a8e91"
                    className="pricing-card-outline"
                  >
                    <div className="pricing-heading">
                      <div className="column-x-small">
                        <h3 className="subheading-large">{item.title}</h3>
                      </div>
                      <div className="h3-heading text-weight-bold">
                        {Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "UGX",
                        }).format(item.price)}
                      </div>
                    </div>
                    <a
                      href="#"
                      onClick={() => {
                        if (accountType != null && item.price != 0) {
                          handleSubmit(Number(item.price), accountType);
                        } else {
                          toast("Please add a price.");
                        }
                      }}
                      className={`${
                        index == 1
                          ? "primacta-choose-plan"
                          : "secocta-choose-plan"
                      } w-button`}
                    >
                      Get Started
                    </a>
                    <div className="column-regular">
                      {item.description.map((desc: any, index: number) => (
                        <div key={index} className="pricing-feature-wrap">
                          <div>✅</div>
                          <div>
                            <p className="paragraph-small-2">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="form-4">
            <div className="form-4 w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                className="form-2"
                data-wf-page-id="68bfffa9a785235e9f6a8e91"
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
          {/* <div className="div-block-20">
            <a
              href="https://play.google.com/store/apps/details?id=com.buvaaz.mobile&amp;hl=en"
              className="primacta w-inline-block"
            >
              <div className="primatext">Next</div>
            </a>
          </div> */}
        </div>
      </div>
      <BuvaazSlider />
      <Footer />
      <Loader />
    </div>
  );
}
