import { useState } from "react";
import CustomButton from "./customButton";
export default function Statement() {
  const maxLength = 255;
  const [textArea, setTextArea] = useState("");
  return (
    <div className="flex md:flex-row flex-col gap-5">
      <div className="flex-1">
        <span>Which kind of startups are you investing in? *</span>
        <div className="w-full bg-[#F8FAFC] border-[#ED0131] border-2 rounded-md p-[12px]">
          <textarea
            name=""
            id=""
            maxLength={maxLength}
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)}
            cols={30}
            rows={7}
            className="w-full outline-none bg-transparent resize-none"
          ></textarea>
          <span className="block text-end">
            {textArea.length}/{maxLength}
          </span>
        </div>
        <span className="block">score 6/10</span>
        <CustomButton>Validate who to connect you with</CustomButton>
      </div>
      <div className="flex-1">
        <p>
          I would rate this statement as a 6 out of 10 in terms of effectively
          describing the types of startups you wish to invest in. While it
          mentions that you are open to investing in any startup, it also
          specifies that you have a preference for startups targeting Africa.
          This indicates that you have a specific focus or area of expertise,
          which is useful information for potential investment opportunities.
          However, the statement does not provide any other criteria or
          priorities that you might have for evaluating potential investments,
          such as the stage of the startup, the industry it operates in, or the
          size of the investment. Including more information about your
          investment criteria could help to provide a clearer picture of the
          types of startups you are interested in and make it easier for other
          companies to understand whether they might be a good fit.
        </p>
      </div>
    </div>
  );
}
