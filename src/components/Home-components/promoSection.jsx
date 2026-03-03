import { ArrowRight } from "lucide-react"
import Promo from "../../assets/home-images/promo.webp"

export default function PromoSection() {
  return (
    <div className="max-w-7xl px-7 mx-auto flex gap-4 py-3" >

      <a
        href="https://play.google.com/store/apps/details?id=com.dare2compete.app"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[32%] bg-[#dfeaf5] rounded-2xl 
                   flex flex-col justify-center items-center
                   hover:shadow-md transition duration-300"
      >
        <div className="flex flex-col justify-center items-center pt-4">
          <p className="color  font-extrabold text-2xl ">
            Download
          </p>
          <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
            Unstop App
          </h2>
        </div>

        <div className="flex items-center justify-center m-auto">
          <img
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/68f8c2d9e820b_refer.png?d=616x306"
            alt="Unstop App"
            className="w-[80%] object-contain"
          />
        </div>
      </a>

      <a
        href="/refer-and-earn"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 relative rounded-2xl p-8
                   bg-gradient-to-r
                   from-[#cfe3f5] via-[#b9d6ec] to-[#a7cbe4]
                   overflow-hidden
                   hover:shadow-md transition duration-300"
      >
        <div className="max-w-sm">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
            Refer & Win
          </h2>

          <p className="text-gray-700 text-base">
            MacBook, iPhone, Apple Watch, AirPods,
            <br />
            Cash Rewards and more!
          </p>

          <button
            className="mt-6 flex items-center gap-3
                       bg-[#2f5cf3] text-white
                       px-5 py-2.5 rounded-full
                       text-base font-medium
                       hover:bg-[#254edb]
                       transition duration-300 cursor-pointer"
          >
            Refer Now
            <span className="bg-white text-[#2f5cf3]
                             rounded-full p-1.5
                             flex items-center justify-center">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>

        <div className="absolute right-4 bottom-0 w-[35%]">
          <img
            src={Promo}
            alt="Rewards"
            className="w-full object-contain"
          />
        </div>
      </a>
    </div>
  )
}