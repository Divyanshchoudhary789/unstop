export default function RightSection() {
  return (
    <div className="space-y-6 sticky top-20">

      {/* AI Credits */}
      <div className="bg-white rounded-2xl border p-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/avif/un_black_golden_circle_logo.svg"
            className="w-6 h-6"
          />
          <span className="font-medium">AI Credits</span>
        </div>

        <div className="w-14 h-14 rounded-full border-4 border-blue-500 flex items-center justify-center text-sm font-semibold">
          3/3
        </div>
      </div>

      {/* My Attempts */}
      <div className="bg-white rounded-2xl border p-5">
        <h3 className="font-semibold mb-4">My Attempts</h3>

        <div className="space-y-4 text-sm">
          <AttemptRow
            title="Backend Developer"
            score="4/30"
            date="19 Feb 26, 6:34 PM"
          />
          <AttemptRow
            title="Software Engineer"
            score="21/30"
            date="19 Feb 26, 6:22 PM"
          />
        </div>
      </div>

      {/* Referral */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-5 flex justify-between items-center">
        <div>
          <div className="font-semibold">Refer & Win</div>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-full text-sm">
          Refer now
        </button>
      </div>

      {/* Banner */}
      <img
        src="https://d8it4huxumps7.cloudfront.net/uploads/images/avif/banner-2.png?d=600x200"
        className="rounded-xl"
      />
    </div>
  );
}
function AttemptRow({ title, score, date }) {
  return (
    <div className="flex justify-between items-center border-b pb-3">
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-gray-500 text-xs">
          Last Attempted: {date}
        </div>
      </div>

      <div className="font-semibold">{score}</div>
    </div>
  );
}