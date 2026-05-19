import React from "react";
import { Users, Briefcase, Trophy, BookLock } from "lucide-react";

export default function LeftSide() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">

        {/* Stats */}
        <div className="grid grid-cols-4 gap-5">

          <StatCard
            title="Total Candidates"
            number="0"
            icon={Users}
            color="text-indigo-600 bg-indigo-50"
          />

          <StatCard
            title="Active J&I"
            number="0"
            icon={Briefcase}
            color="text-emerald-600 bg-emerald-50"
            bottomContent={
              <>
                <InfoRow label="Total" value="0" />
                <InfoRow label="Registrations" value="0" />
              </>
            }
          />

          <StatCard
            title="Active Opportunities"
            number="0"
            icon={Trophy}
            color="text-amber-600 bg-amber-50"
            bottomContent={
              <>
                <InfoRow label="Total" value="1" />
                <InfoRow label="Registrations" value="0" />
              </>
            }
          />

          <StatCard
            title="Active Assessments"
            number="0"
            icon={BookLock}
            color="text-rose-600 bg-rose-50"
            muted
            bottomContent={
              <button className="mt-3 px-3 py-1.5 text-xs font-medium rounded-md border border-slate-200 hover:bg-slate-50 transition">
                🔒 Upgrade to unlock
              </button>
            }
          />

        </div>

        {/* Recent Listing */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

          <div className="px-6 py-4 flex items-center justify-between border-b border-slate-200">
            <h2 className="text-sm font-semibold text-slate-800">
              Recent Listing
            </h2>
          </div>

          <div className="min-h-[280px] flex items-center justify-center">

            <div className="flex flex-col items-center gap-4 text-center">

              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/64dc4c904c175_no_search_result.png"
                alt="no data"
                className="w-[220px] opacity-80"
              />

              <div>
                <p className="text-sm font-semibold text-slate-700">
                  No data available
                </p>

                <p className="text-xs text-slate-400">
                  No recently listed opportunity found
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}


function StatCard({ title, number, icon: Icon, color, bottomContent, muted }) {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition ${
        muted ? "opacity-70" : ""
      }`}
    >
      <div className="flex items-center justify-between">

        <div>
          <p className="text-xs text-slate-500 font-medium">{title}</p>
          <p className="text-2xl font-semibold text-slate-900 mt-1">
            {number}
          </p>
        </div>

        {Icon && (
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
            <Icon size={20} />
          </div>
        )}

      </div>

      {bottomContent && (
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-1">
          {bottomContent}
        </div>
      )}
    </div>
  );
}


function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between text-xs text-slate-500">
      <span>{label}</span>
      <span className="font-medium text-slate-700">{value}</span>
    </div>
  );
}