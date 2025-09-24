import type { Question } from "@/pages/Questions";

export default function OptionInput({
  totalCompleted,
  totalQuestions,
  question,
  setAnswer,
  handleSubmit,
  loading,
  inputType,
}: {
  totalCompleted: number;
  totalQuestions: number;
  question: Question;
  setAnswer: any;
  handleSubmit: any;
  loading: boolean;
  inputType?: string;
}) {
  const screenWidth = window.innerWidth;
  return (
    <div
      className="w-form"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <form
        style={{ width: screenWidth * 1 }}
        id="email-form-2"
        name="email-form-2"
        data-name="Email Form 2"
        method="get"
        data-wf-page-id="68c2bfb4ee288d954589da65"
        data-wf-element-id="b5d66c6b-3f6f-17a5-3e2f-badf6990fb00"
        onSubmit={handleSubmit}
      >
        <div className="div-block-40">
          <label className="field-label-2">
            {totalCompleted + 1}
            <span className="text-span-20">/{totalQuestions}</span>
            <br />
          </label>
          <div className="div-block-41">
            <label className="field-label-qn">
              {question.text}
              <br />
            </label>
            {/* <label className="field-label-subtitle">
              What type of products do you sell?
              <br />
            </label> */}
          </div>
          <div className="div-block-42">
            {question.type == "OBJECTIVE" ? (
              question.options!.map((item: any, index: number) => (
                <label key={index} className="radio-button-field w-radio">
                  <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                  <input
                    type="radio"
                    data-name="Radio"
                    id="radio"
                    name="radio"
                    onChange={(e) => setAnswer(e.target.value)}
                    style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                    value={item}
                  />
                  <span className="field-label-qn-multi-select w-form-label">
                    {item}&quot;
                  </span>
                </label>
              ))
            ) : (
              <input
                className="text-field-2 w-input"
                style={{ margin: 0, padding: 0 }}
                maxLength={256}
                onChange={(e) => setAnswer(e.target.value)}
                name="name"
                data-name="Name"
                type={inputType ?? "text"}
                placeholder="XXXXXXXXXXX"
                id="name"
              />
            )}
          </div>
          <input
            type="submit"
            className="form-button-scorecard w-button"
            value={loading == true ? "Please wait" : "Next"}
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
  );
}
