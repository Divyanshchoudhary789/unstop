import { useState } from "react";

const CaretDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
    <path d="M8 11L3 6h10z" fillRule="evenodd" />
  </svg>
);
const QuestionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm.5 10.5h-1v-1h1v1zm.28-3.29c-.45.17-.78.6-.78.79v.25h-1v-.25c0-.83.57-1.6 1.4-1.94.46-.18.6-.52.6-.81C9 6.56 8.55 6 8 6s-1 .56-1 1.25a.5.5 0 01-1 0C6 5.45 6.9 5 8 5s2 .95 2 2.25c0 .9-.5 1.7-1.22 1.96z" />
  </svg>
);
const AddSmall = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5V7z" />
  </svg>
);
const CheckSmall = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M6.5 12L2 7.5 3.5 6l3 3 6-6L14 4.5 6.5 12z" />
  </svg>
);
const CloseSmall = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z" />
  </svg>
);
const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
    <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z" />
  </svg>
);
const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 2a7 7 0 00-3.95 12.8l-.05.2V17a1 1 0 001 1h6a1 1 0 001-1v-2a7 7 0 00-4-12.8v-.2z" fill="none" stroke="#b8860b" strokeWidth="1.5" />
    <line x1="10" y1="21" x2="14" y2="21" stroke="#b8860b" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9.5 18v-2.5l-1-.7A5 5 0 1114.5 15.3l-1 .7V18" fill="none" stroke="#b8860b" strokeWidth="1.5" />
  </svg>
);

const SynclyftLogo = () => (
  <div className="w-14 h-14 flex-shrink-0 rounded-lg border border-slate-200 flex items-center justify-center"
    style={{ background: "linear-gradient(135deg,#0f172a,#1e293b)" }}>
    <span className="text-white font-black text-xl tracking-tight">S</span>
  </div>
);

const QUESTION_TEMPLATES = {
  "Education": {
    question: "Have you completed the following level of education: [Degree]?",
    recommended: true, type: "typeahead_yes_no",
    paramLabel: "Degree", paramPlaceholder: "Degree", idealAnswer: "Yes",
  },
  "Background Check": {
    question: "Are you willing to undergo a background check, in accordance with local law/regulations?",
    type: "yes_no", idealAnswer: "Yes",
  },
  "Driver's License": {
    question: "Do you have a valid driver's license?",
    type: "yes_no", idealAnswer: "Yes",
  },
  "Drug Test": {
    question: "Are you willing to take a drug test, in accordance with local law/regulations?",
    type: "yes_no", idealAnswer: "Yes",
  },
  "Expertise with Skill": {
    question: "How many years of work experience do you have with [Skill]?",
    type: "typeahead_number", paramLabel: "Skill", paramPlaceholder: "Skill",
  },
  "Hybrid Work": {
    question: "Are you comfortable working in a hybrid setting?",
    type: "yes_no", idealAnswer: "Yes",
  },
  "Industry Experience": {
    question: "How many years of [Industry] experience do you currently have?",
    type: "typeahead_number", paramLabel: "Industry", paramPlaceholder: "Industry",
  },
  "Language": {
    question: "What is your level of proficiency in [Language]?",
    type: "language", paramLabel: "Language", paramPlaceholder: "Language",
  },
  "Location": {
    question: "Are you comfortable commuting to this job's location?",
    type: "yes_no", idealAnswer: "Yes",
  },
  "Onsite Work": {
    question: "Are you comfortable working in an onsite setting?",
    type: "yes_no", idealAnswer: "Yes",
  },
  "Remote Work": {
    question: "Are you comfortable working in a remote setting?",
    type: "yes_no", idealAnswer: "Yes",
  },
  "Urgent Hiring Need": {
    question: "We must fill this position urgently. Can you start immediately?",
    type: "yes_no", idealAnswer: "Yes",
  },
  "Visa Status": {
    question: "Will you now or in the future require sponsorship for employment visa status?",
    type: "yes_no", idealAnswer: "No",
  },
  "Work Authorization": {
    question: "Are you legally authorized to work in India?",
    type: "yes_no", idealAnswer: "Yes",
  },
  "Work Experience": {
    question: "How many years of [Job Function] experience do you currently have?",
    type: "typeahead_number", paramLabel: "Job Function", paramPlaceholder: "Job Function",
  },
  "Custom Question": {
    question: "Write a custom screening question.",
    type: "custom",
  },
};

const ALL_TAGS = [
  "Background Check", "Driver's License", "Drug Test", "Education",
  "Expertise with Skill", "Hybrid Work", "Industry Experience", "Language",
  "Location", "Onsite Work", "Remote Work", "Urgent Hiring Need",
  "Visa Status", "Work Authorization", "Work Experience",
];

const inputCls = "w-full border border-gray-400 rounded px-2.5 py-2 text-sm text-gray-900 outline-none bg-white focus:border-blue-600 transition-colors";
const selectCls = "border border-gray-400 rounded px-2.5 py-2 text-sm text-gray-900 outline-none bg-white focus:border-blue-600 cursor-pointer";

let cardIdCounter = 100;

function QuestionCard({ card, onRemove }) {
  const [param, setParam] = useState("");
  const [numAnswer, setNumAnswer] = useState("");
  const [langAnswer, setLangAnswer] = useState("None");
  const [essential, setEssential] = useState(false);
  const [customText, setCustomText] = useState("");
  const [responseType, setResponseType] = useState("multiple-choice");
  const [customIdealAnswer, setCustomIdealAnswer] = useState("Yes");
  const tpl = QUESTION_TEMPLATES[card.tag];

  return (
    <section className="border border-gray-200 rounded-lg p-4 mb-3 relative bg-white">
      <button
        type="button"
        aria-label="Remove question"
        onClick={onRemove}
        className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors"
      >
        <CloseSmall />
      </button>

      <div className="pr-8 mb-3">
        <p className="text-sm font-bold text-gray-900 leading-snug mb-1">{tpl.question}</p>
        {tpl.recommended && (
          <span className="text-xs font-bold text-blue-600">Recommended</span>
        )}
      </div>

      {tpl.type === "custom" ? (
        <div className="flex flex-col gap-2.5">
          <div className="flex items-start gap-2 bg-blue-50 border border-blue-200 rounded px-2.5 py-2 text-xs text-gray-700">
            <span className="flex-shrink-0 text-blue-600 mt-0.5"><InfoIcon /></span>
            <span>
              Help keep LinkedIn respectful and professional. Learn about our{" "}
              <a href="#" className="text-blue-600 font-semibold hover:underline">custom question guidelines</a>.
            </span>
          </div>

          <div className="relative">
            <label className="absolute top-2 left-2.5 text-xs font-semibold text-gray-500 pointer-events-none">
              Question
            </label>
            <textarea
              value={customText}
              onChange={e => setCustomText(e.target.value.slice(0, 200))}
              maxLength={200}
              placeholder={`Try asking a question like, "Will you be able to bring your own device?"`}
              className="w-full border border-gray-400 rounded px-2.5 pt-6 pb-2 text-sm text-gray-900 outline-none bg-white focus:border-blue-600 resize-y min-h-[80px] transition-colors"
            />
            <div className="text-right text-xs text-gray-400 mt-0.5">{customText.length}/200</div>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-500 flex-shrink-0">Response type:</label>
            <select value={responseType} onChange={e => setResponseType(e.target.value)}
              className={selectCls + " w-32"}>
              <option value="multiple-choice">Yes / No</option>
              <option value="numeric">Numeric</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-500 flex-shrink-0">Ideal answer:</label>
            <select value={customIdealAnswer} onChange={e => setCustomIdealAnswer(e.target.value)}
              className={selectCls + " w-24"}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id={`ess-${card.id}`} checked={essential}
              onChange={e => setEssential(e.target.checked)}
              className="w-4 h-4 accent-blue-600 cursor-pointer" />
            <label htmlFor={`ess-${card.id}`} className="text-sm text-gray-900 cursor-pointer">Essential</label>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {(tpl.type === "typeahead_yes_no" || tpl.type === "typeahead_number" || tpl.type === "language") && (
            <div>
              <label className="block text-sm text-gray-500 mb-1.5">
                {tpl.paramLabel} <span className="text-red-600">*</span>
              </label>
              <input
                type="text" value={param} onChange={e => setParam(e.target.value)}
                placeholder={tpl.paramPlaceholder}
                className="border border-gray-400 rounded px-2.5 py-2 text-sm text-gray-900 outline-none bg-white focus:border-blue-600 transition-colors w-64 max-w-full"
              />
            </div>
          )}

          <div className="pt-1">
            {tpl.type === "typeahead_number" ? (
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-500">Ideal answer (minimum):</label>
                <input type="number" min="0" max="99" step="1"
                  value={numAnswer} onChange={e => setNumAnswer(e.target.value)}
                  className="border border-gray-400 rounded px-2.5 py-2 text-sm text-gray-900 outline-none bg-white focus:border-blue-600 w-16 transition-colors" />
              </div>
            ) : tpl.type === "language" ? (
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-500">Ideal answer:</label>
                <select value={langAnswer} onChange={e => setLangAnswer(e.target.value)}
                  className={selectCls + " w-44"}>
                  <option value="None">None</option>
                  <option value="Conversational">Conversational</option>
                  <option value="Professional">Professional</option>
                  <option value="Native or bilingual">Native or bilingual</option>
                </select>
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                Ideal answer: <span className="font-semibold text-gray-900">{tpl.idealAnswer}</span>
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id={`ess-${card.id}`} checked={essential}
              onChange={e => setEssential(e.target.checked)}
              className="w-4 h-4 accent-blue-600 cursor-pointer" />
            <label htmlFor={`ess-${card.id}`} className="text-sm text-gray-900 cursor-pointer">Essential</label>
          </div>
        </div>
      )}
    </section>
  );
}

export default function LinkedInJobSettings() {
  const [receiveBy, setReceiveBy] = useState("By email");
  const [email, setEmail] = useState("");
  const [showRcvDrop, setShowRcvDrop] = useState(false);
  const [autoReject, setAutoReject] = useState(false);
  const [rejectionMsg, setRejectionMsg] = useState("");
  const [cards, setCards] = useState([{ id: 1, tag: "Education" }]);

  const usedTags = new Set(cards.map(c => c.tag).filter(t => t !== "Custom Question"));

  const addCard = (tag) => {
    if (tag !== "Custom Question" && usedTags.has(tag)) return;
    setCards(prev => [...prev, { id: ++cardIdCounter, tag }]);
  };

  const removeCard = (id) => setCards(prev => prev.filter(c => c.id !== id));

  return (
    <div className="min-h-screen bg-[#f3f2ef] py-6 font-sans">
      <div className="max-w-5xl mx-auto px-4 flex gap-6 items-start">

        <main className="flex-1 min-w-0">
          <section className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.05)] overflow-hidden">

            <header className="px-6 py-3 border-b border-gray-200">
              <h1 className="text-base font-semibold text-gray-900">2 of 3: Confirm job settings</h1>
            </header>

            <div className="px-6 pb-8">
              <p className="text-xs text-gray-500 mt-3 mb-5">* Indicates required</p>

              <div className="mb-7">
                <div className="flex items-center gap-1 mb-3.5">
                  <h2 className="text-xl font-bold text-gray-900">Applicant collection</h2>
                  <button type="button" className="p-0.5 text-gray-400 hover:text-gray-600 flex items-center">
                    <QuestionIcon />
                  </button>
                </div>

                <div className="flex gap-3 items-end">
                  <div className="flex-shrink-0 w-44">
                    <label className="block text-sm text-gray-500 mb-1.5">Receive applicants</label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowRcvDrop(v => !v)}
                        className="w-full border border-gray-400 rounded px-2.5 py-2 text-sm text-gray-900 bg-white flex items-center justify-between cursor-pointer hover:border-gray-600 focus:border-blue-600 outline-none transition-colors"
                      >
                        <span>{receiveBy}</span>
                        <CaretDown />
                      </button>
                      {showRcvDrop && (
                        <div className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-300 rounded shadow-lg z-50">
                          {["By email", "On LinkedIn"].map(opt => (
                            <div
                              key={opt}
                              onClick={() => { setReceiveBy(opt); setShowRcvDrop(false); }}
                              className={`px-3.5 py-2.5 text-sm cursor-pointer text-gray-900 hover:bg-gray-100 ${receiveBy === opt ? "bg-blue-50" : ""}`}
                            >
                              {opt}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm text-gray-500 mb-1.5">
                      Email address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="example@example.com"
                      className={inputCls}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Screening questions</h2>
                <h3 className="text-sm font-normal text-gray-500 mb-4 leading-relaxed">
                  We recommend adding 3 or more questions. Applicants must answer each question.
                </h3>

                <div className="mb-5">
                  {cards.map(card => (
                    <QuestionCard key={card.id} card={card} onRemove={() => removeCard(card.id)} />
                  ))}
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Add screening questions:</h3>
                  <div className="flex flex-wrap gap-y-2 gap-x-1">
                    {ALL_TAGS.map(tag => {
                      const isAdded = usedTags.has(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          disabled={isAdded}
                          onClick={() => addCard(tag)}
                          className={`inline-flex items-center gap-1.5 border rounded-full px-3.5 py-1 text-sm font-semibold transition-colors
                            ${isAdded
                              ? "border-gray-300 text-gray-400 bg-white opacity-55 cursor-default"
                              : "border-gray-500 text-gray-600 bg-white hover:bg-gray-100 cursor-pointer"
                            }`}
                        >
                          {isAdded ? <CheckSmall /> : <AddSmall />}
                          {tag}
                        </button>
                      );
                    })}
                    <button
                      type="button"
                      onClick={() => addCard("Custom Question")}
                      className="inline-flex items-center gap-1.5 border border-gray-500 rounded-full px-3.5 py-1 text-sm font-semibold text-gray-600 bg-white hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                      <AddSmall /> Custom Question
                    </button>
                  </div>
                </div>

                <div>
                  <h2 className="text-base font-bold text-gray-900 mb-2.5">Qualification setting</h2>
                  <div className="inline-flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="auto-reject"
                      checked={autoReject}
                      onChange={e => setAutoReject(e.target.checked)}
                      className="w-4 h-4 mt-0.5 flex-shrink-0 accent-blue-600 cursor-pointer"
                    />
                    <label htmlFor="auto-reject" className="text-sm text-gray-500 leading-relaxed cursor-pointer">
                      Filter out and send rejections to applicants who don't meet any must-have qualifications.
                      <button type="button" className="inline-flex items-center align-middle ml-1 text-gray-400 hover:text-gray-600">
                        <QuestionIcon />
                      </button>
                    </label>
                  </div>

                  {autoReject && (
                    <div className="mt-3">
                      <div className="relative">
                        <label className="absolute top-2 left-2.5 text-xs font-semibold text-gray-500 pointer-events-none">
                          Preview
                        </label>
                        <textarea
                          value={rejectionMsg}
                          onChange={e => setRejectionMsg(e.target.value.slice(0, 3000))}
                          rows={5}
                          className="w-full border border-gray-400 rounded px-2.5 pt-6 pb-2 text-sm text-gray-900 outline-none bg-white focus:border-blue-600 resize-y transition-colors"
                        />
                      </div>
                      <div className="text-right text-xs text-gray-400 mt-0.5">
                        {rejectionMsg.length.toLocaleString()}/3,000
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <footer className="border-t border-gray-200 px-6 py-3.5">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="text-sm font-semibold text-gray-500 px-4 py-2 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  Preview
                </button>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="text-sm font-semibold text-gray-500 border border-gray-500 px-5 py-2 rounded-full bg-white hover:bg-gray-100 hover:border-gray-900 hover:text-gray-900 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="text-sm font-semibold text-white bg-blue-600 px-5 py-2 rounded-full hover:bg-blue-800 transition-colors border-0"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </footer>
          </section>
        </main>

        <aside className="w-72 flex-shrink-0 flex flex-col gap-3">

          <section className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.05)] p-3">
            <div className="flex gap-3 items-start">
              <SynclyftLogo />
              <div className="flex-1 min-w-0">
                <p className="text-base font-semibold text-gray-900 leading-tight mb-0.5">Web Developer</p>
                <p className="text-sm text-gray-500 mb-1">Synclyft</p>
                <ul className="text-xs text-gray-500 leading-relaxed list-none p-0 m-0">
                  <li>Jaipur, Rajasthan, India</li>
                  <li>On-site</li>
                </ul>
              </div>
            </div>
            <p className="mt-2.5 text-sm text-gray-500">
              Saved as <span className="font-bold text-gray-900">Draft</span>
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.05)] p-4">
            <LightbulbIcon />
            {[
              [
                "Why use screening questions?",
                "Your job post is targeted to people who match your requirements, and you'll be notified of applicants who pass your screening questions.",
              ],
              [
                "Will my network know that I'm hiring?",
                "When you post your job, we'll notify your network that you're hiring to help increase your job post's visibility. Your network can choose to share your job post to help you reach qualified candidates.",
              ],
              [
                "What information can applicants see about me and my job?",
                "When you post your job, you agree to share details about your job such as company size and location, as well as information around when you created your LinkedIn profile.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="mt-4">
                <p className="text-sm font-bold text-gray-500 leading-snug mb-1">{q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </section>

        </aside>
      </div>
    </div>
  );
}