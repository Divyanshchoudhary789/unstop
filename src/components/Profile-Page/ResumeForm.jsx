import { useState, useRef } from "react";

const IconEye = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-5 h-5">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconBulb = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-5 h-5">
    <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6z"/>
  </svg>
);
const IconCloudUpload = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-400">
    <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
  </svg>
);

export default function ResumeForm() {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef();

  const handleFile = (f) => {
    if (!f) return;
    const allowed = ["application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(f.type)) return alert("Only PDF, DOC, DOCX allowed.");
    if (f.size > 10 * 1024 * 1024) return alert("File size must be under 10 MB.");
    setFile(f);
  };

  const onInputChange = (e) => handleFile(e.target.files[0]);
  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="min-h-screen bg-white flex justify-center font-sans">
      <div className="w-full max-w-[860px] flex flex-col">

        {/* ── HEADER ── */}
        <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-6 py-[13px] border-b border-gray-100">
          <strong className="flex items-center gap-2.5 text-[15px] font-semibold text-gray-800">
            {/* progress arc */}
            <svg className="w-7 h-7" viewBox="0 0 32 32" style={{ transform: "rotate(-90deg)" }}>
              <circle cx="16" cy="16" r="12" fill="none" stroke="#e5e7eb" strokeWidth="3"/>
              <circle cx="16" cy="16" r="12" fill="none" stroke="#3b4cca" strokeWidth="3"
                strokeDasharray="15 100" strokeLinecap="round"/>
            </svg>
            Resume
          </strong>
          <div className="flex gap-0.5 text-gray-600">
            <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-gray-100">
              <IconEye/>
            </button>
            <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-gray-100">
              <IconBulb/>
            </button>
          </div>
        </div>

        <div className="px-6 pt-6 pb-6 flex flex-col gap-5 overflow-y-auto">

          <div className="resume-form flex flex-col gap-5">

            <div className="flex items-start justify-between w-full">
              <div>
                <h3 className="text-[15px] font-semibold text-gray-800 mb-1">
                  Resume<sup className="text-red-500 ml-0.5">*</sup>
                </h3>
                <h4 className="text-[13px] text-gray-500 font-normal leading-[1.5] max-w-[480px]">
                  Remember that one pager that highlights how amazing you are? Time to let employers notice your potential through it.
                </h4>
              </div>
              <button
                type="button"
                className="text-[12px] text-[#3b4cca] font-medium cursor-pointer hover:underline shrink-0 mt-0.5"
              >
                Create
              </button>
            </div>

            <div
              onClick={() => inputRef.current.click()}
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
              className={[
                "flex flex-col items-center justify-center gap-3 w-full py-10 px-6 rounded-lg border-2 border-dashed cursor-pointer transition-colors",
                dragging
                  ? "border-[#3b4cca] bg-indigo-50"
                  : "border-gray-300 bg-white hover:border-gray-400",
              ].join(" ")}
            >
              <input
                ref={inputRef}
                type="file"
                id="banner"
                name="banner"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={onInputChange}
              />

              <IconCloudUpload/>

              <div className="text-center">
                {file ? (
                  <p className="text-sm text-gray-800 font-medium">{file.name}</p>
                ) : (
                  <span className="text-[13.5px] text-gray-600">
                    Update Resume{" "}
                    <strong className="font-semibold text-gray-700">
                      Supported file formats DOC, DOCX, PDF. File size limit 10 MB.
                    </strong>
                  </span>
                )}
              </div>

              {file && (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setFile(null); }}
                  className="text-xs text-red-500 hover:underline mt-1"
                >
                  Remove
                </button>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}