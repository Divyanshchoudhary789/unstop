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

const FIELDS = [
  { id: "linkedinLink",  label: "Linkedin"     },
  { id: "fbLink",        label: "Facebook"     },
  { id: "instaLink",     label: "Instagram"    },
  { id: "twitterLink",   label: "Twitter"      },
  { id: "githubLink",    label: "Git"          },
  { id: "mediumLink",    label: "Medium"       },
  { id: "redditLink",    label: "Reddit"       },
  { id: "slackLink",     label: "Slack"        },
  { id: "dribbbleLink",  label: "Dribbble"     },
  { id: "behanceLink",   label: "Behance"      },
  { id: "codePenLink",   label: "CodePen"      },
  { id: "figmaLink",     label: "Figma"        },
  { id: "customLink",    label: "Custom Link"  },
];

const URL_PATTERN =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

export default function SocialLinksForm() {
  const [links, setLinks]   = useState(Object.fromEntries(FIELDS.map((f) => [f.id, ""])));
  const [errors, setErrors] = useState({});

  const handleChange = (id, value) => {
    setLinks((prev) => ({ ...prev, [id]: value }));
    if (value && !URL_PATTERN.test(value)) {
      setErrors((prev) => ({ ...prev, [id]: true }));
    } else {
      setErrors((prev) => { const n = { ...prev }; delete n[id]; return n; });
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center font-sans">
      <div className="w-full max-w-[860px] flex flex-col">

        <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-6 py-[14px] border-b border-gray-100">
          <strong className="text-[15px] font-semibold text-gray-800 tracking-[-0.1px]">
            Social Links
          </strong>
          <div className="flex items-center gap-0.5 text-gray-600">
            <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
              <IconBulb />
            </button>
          </div>
        </div>

        <div
          className="px-6 pt-5 pb-4 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 116px)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-[18px]">
            {FIELDS.map(({ id, label }) => (
              <div key={id} className="flex flex-col gap-[7px]">

                <label htmlFor={id} className="text-[13.5px] text-gray-800">
                  {label}
                </label>

                <input
                  id={id}
                  type="text"
                  name={id}
                  value={links[id]}
                  onChange={(e) => handleChange(id, e.target.value)}
                  placeholder="Add link"
                  autoComplete="off"
                  pattern="^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
                  className={[
                    "w-full px-4 py-[11px] text-sm rounded-lg border bg-white outline-none transition-colors placeholder-gray-400 text-gray-800",
                    errors[id]
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 focus:border-[#3b4cca]",
                  ].join(" ")}
                />

                {errors[id] && (
                  <p className="text-xs text-red-500">Please enter a valid URL</p>
                )}
              </div>
            ))}
          </div>

          <div className="h-4" />
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-[14px] flex justify-end">
          <button
            type="button"
            className="flex items-center gap-2 px-7 py-[9px] bg-[#3b4cca] hover:bg-[#2f3da8] active:scale-95 text-white text-sm font-semibold rounded-full transition-all shadow-sm"
          >
            <IconCheck />
            Save
          </button>
        </div>

      </div>
    </div>
  );
}