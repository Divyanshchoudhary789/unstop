import { X, ChevronRight, Lock, Trophy, BriefcaseBusiness, NotepadText } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function HostModal({ onClose, onOpportunityClick }) {
  const modalRef = useRef(null);
  const navigate = useNavigate(null);
  useEffect(() => {
    function handleClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  return (
    <div className="fixed inset-0 ]">

      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

      <div className="absolute right-32 top-40">

        <div
          ref={modalRef}
          className="w-[420px] rounded-2xl bg-[#f3f4f6] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
        >

          <div className="flex items-center gap-3 mb-5">
            <button
              onClick={onClose}
              className="text-gray-600 hover:bg-gray-200 p-1 rounded-full cursor-pointer"
            >
              <X size={20} />
            </button>

            <h2 className="text-lg font-semibold text-gray-800">Host</h2>
          </div>

          <div className="bg-white rounded-xl p-4 space-y-3">

            {/* <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 border rounded-lg flex items-center justify-center">
                  <Trophy className="text-orange-500" />
                </div>

                <div >
                  <p className="text-sm font-semibold text-gray-800">
                    Opportunity
                  </p>
                  <p className="text-xs text-gray-500">
                    Engage your target audience
                  </p>
                </div>
              </div>

              <ChevronRight size={18} className="text-gray-400" />
            </div> */}

            <div onClick={() => navigate("/jobpost")} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 border rounded-lg flex items-center justify-center">
                  <BriefcaseBusiness className="text-amber-900" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Hire an Intern
                  </p>
                  <p className="text-xs text-gray-500">
                    Hire the Right Talent
                  </p>
                </div>
              </div>

              <ChevronRight size={18} className="text-gray-400" />
            </div>

            {/* <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 border rounded-lg flex items-center justify-center">
                  <NotepadText />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Assessments
                  </p>
                  <p className="text-xs text-gray-500">
                    Evaluate candidates
                  </p>
                </div>
              </div>

              <button className="flex items-center gap-2 border rounded-full px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200">
                <Lock size={14} />
                Upgrade
              </button>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
}