import ProfileCompletion from "./ProfileCompletion"
export default function UserProfile() {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      
      <div className="relative">
        <img
          src="https://d8it4huxumps7.cloudfront.net/uploads/images/655b289aa0e26_property_1component_84.png"
          className="w-full h-[220px] object-cover"
          alt="banner"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-start">

          <div className="flex gap-6 items-center">

            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-orange-200 flex items-center justify-center relative">
                <img
                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/png/35.png"
                  className="w-24 h-24 rounded-full"
                  alt="avatar"
                />
              </div>
              <span className="absolute bottom-0 right-0 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                59%
              </span>
            </div>

            <div>
              <h1 className="text-2xl font-semibold capitalize">
                Manish Sharma
              </h1>
              <p className="text-gray-500">@gpdfaqxk67258</p>
              <p className="text-sm mt-1 text-gray-700">
                🎓 ICFAI University, Jaipur
              </p>
            </div>
          </div>

          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8 grid grid-cols-3 gap-6">

        <div className="col-span-2 space-y-6">

          <ProfileCompletion />

        </div>

        <div className="sticky space-y-6">

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Rankings</h3>
            <div className="flex justify-between mb-3">
              <span>Total Points</span>
              <strong>0</strong>
            </div>
            <div className="flex justify-between">
              <span>Total Badges</span>
              <strong>3</strong>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Streak</h3>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-gray-200 rounded-sm"
                />
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Current Streak: <strong>9 Days</strong>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
function ProfileCard({ title, description, action }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">{description}</p>
      <button className="text-blue-600 font-medium hover:underline">
        {action}
      </button>
    </div>
  )
}