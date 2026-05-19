import Total from "../../assets/home-images/total.avif"

export default function OurNumbers() {
  return (
    <section className="max-w-7xl mx-auto  py-5">

      <p className="text-gray-900 text-lg mb-3">
        Active Users
      </p>

      <div className="flex items-center gap-1 mb-5">

        <span className="text-[130px] font-extrabold leading-none 
                         bg-gradient-to-r from-blue-700 to-blue-500 
                         bg-clip-text text-transparent">
          28
        </span>

        <img
          src={Total}
          alt="Million Graphic"
          className=" w-xl h-[120px] object-cover"
        />

      </div>

      <div className="flex justify-between">

        <div>
          <p className="text-gray-900 text-lg mb-2">
            Assessments
          </p>
          <p className="text-4xl font-semibold text-gray-900">
            22.3<span className="text-blue-600 font-bold">M+</span>
          </p>
        </div>

        <div>
          <p className="text-gray-900 text-lg mb-2">
            Opportunities
          </p>
          <p className="text-4xl font-semibold text-gray-900">
            140<span className="text-blue-600 font-bold">K+</span>
          </p>
        </div>

        <div>
          <p className="text-gray-900 text-lg mb-2">
            Organisations
          </p>
          <p className="text-4xl font-semibold text-gray-900">
            42<span className="text-blue-600 font-bold">K+</span>
          </p>
        </div>

        <div>
          <p className="text-gray-900 text-lg mb-2">
            Brands trust us
          </p>
          <p className="text-4xl font-semibold text-gray-900">
            800<span className="text-blue-600 font-bold">+</span>
          </p>
        </div>

        <div>
          <p className="text-gray-900 text-lg mb-2">
            Countries
          </p>
          <p className="text-4xl font-semibold text-gray-900">
            78<span className="text-blue-600 font-bold">+</span>
          </p>
        </div>

      </div>
    </section>
  )
}