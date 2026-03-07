import { useState } from "react";

const IconBulb = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-5 h-5">
    <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6z" />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);
const IconAI = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-4 h-4 text-violet-500">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function AboutForm() {
  const [about, setAbout] = useState("");

  const isValid = about.trim().length > 0;

  return (
    <div className="min-h-screen bg-white flex justify-center font-sans">
      <div className="w-full max-w-[860px] flex flex-col">

        <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-6 py-[14px] border-b border-gray-100">
          <strong className="text-[15px] font-semibold text-gray-800 tracking-[-0.1px]">
            About
          </strong>
          <div className="flex items-center gap-0.5 text-gray-600">
            <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
              <IconBulb />
            </button>
          </div>
        </div>

        <div
          className="px-6 pt-5 pb-4 flex flex-col gap-4 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 116px)" }}
        >

          <div className="flex flex-col gap-[7px]">

            <label
              htmlFor="about"
              className="flex items-center justify-between text-[13.5px] text-gray-800"
            >
              <div className="flex items-center gap-0.5">
                About Me
                <em className="not-italic text-red-500 ml-0.5 font-normal">*</em>
              </div>
              <div className="text-[12px] text-gray-400 font-normal">
                Maximum 1000 characters can be added
              </div>
            </label>

            <textarea
              id="about"
              name="about"
              maxLength={1000}
              required
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Introduce yourself here! Share a brief overview of who you are, your interests, and connect with fellow users, recruiters & organizers."
              rows={7}
              className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-white outline-none transition-colors placeholder-gray-400 text-gray-800 focus:border-[#3b4cca] resize-none"
            />

            <p className="text-right text-xs text-gray-400">{about.length}/1000</p>
          </div>

          <div>
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-violet-400 text-violet-600 text-[13px] font-medium hover:bg-violet-50 transition-colors"
            >
              <IconAI />
              Generate with AI
            </button>
          </div>

        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-[14px] flex justify-end">
          <button
            type="button"
            disabled={!isValid}
            className={[
              "flex items-center gap-2 px-7 py-[9px] text-white text-sm font-semibold rounded-full transition-all active:scale-95",
              isValid
                ? "bg-[#3b4cca] hover:bg-[#2f3da8] shadow-sm"
                : "bg-gray-300 cursor-not-allowed opacity-60",
            ].join(" ")}
          >
            <IconCheck />
            Save
          </button>
        </div>

      </div>
    </div>
  );
}