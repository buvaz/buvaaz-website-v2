import api from "@/api/api";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import OptionInput from "@/components/OptionInput";
import PageLoader from "@/components/PageLoader";
import BuvaazSlider from "@/components/Slider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export interface Question {
  id?: string;
  text: string;
  type: string;
  options?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export default function Questions() {
  const navigate = useNavigate();
  const sessionId = localStorage.getItem("sessionId");
  const [loading, isLoading] = useState<boolean>(true);
//   const [error, isError] = useState<boolean>(false);
  const [data, setData] = useState<Question | null>();
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [totalCompleted, setTotalCompleted] = useState<number>(0);
  const [answer, setAnswer] = useState<string>();
  const accountType = localStorage.getItem("accountType");
  const screenWidth = window.innerWidth;

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    isLoading(true);
    api.get(`/guest-session/nextQuestion/${sessionId}`).then((res) => {
      isLoading(false);
      if (res.status == 200) {
        
        if((res.data as any).data.question == null){
            navigate("/")
        }
        setData((res.data as any).data.question);
        setTotalQuestions((res.data as any).data.total);
        setTotalCompleted((res.data as any).data.totalCompleted);
      } else {
        toast("Error, Failed to get question.\nTry Again later.");
      }
    });
  };

  const sendAnswer = async (formData: any) => {
    isLoading(true);
    api.post(`/guest-session/answer/create`, formData).then((res) => {
      isLoading(false);
      if (res.status == 200) {
        fetchQuestion();
      } else {
        toast("Error, Failed to get question.\nTry Again later.");
      }
    });
  };

  if (loading) {
    return <PageLoader />;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const req = {
      questionId: data!.id,
      sessionId,
      answer: answer,
    };
    if(answer!.length > 0){
        sendAnswer(req);
    }else{
        toast("Error, Failed to get question.\nComplete this first.");
    }
  };

  return (
    <div>
      <Navigation />
      <div
        className="mt-20"
        style={{ width: screenWidth > 768 ? "65%" : "90%", margin: "auto" }}
      >
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
          <div className="h1-title">Buvaaz for {accountType}</div>
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
        {/*-------------- Error Form -------------------*/}
        <OptionInput
          totalQuestions={totalQuestions}
          totalCompleted={totalCompleted}
          question={data!}
          loading={loading}
          handleSubmit={handleSubmit}
          setAnswer={setAnswer}
        />
        {/* <div className="form-scorecard-container hidden">
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
        </div> */}
        {/*--------------- Finish Setup -------------------------*/}
      </div>
      <BuvaazSlider />
      <Footer />
      <Loader />
    </div>
  );
}
