export default function BrandsStats() {
    return (
        <section className=" py-5">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="relative flex  flex-col min-h-[230px]  justify-between  rounded-3xl   bg-gradient-to-br from-pink-200 to-pink-300 overflow-hidden">
                        <div className="absolute z-10" >

                            <h3 className="text-6xl font-black text-gray-900 pt-5 pl-5">
                                3,000+
                            </h3>
                            <p className="text-xl font-medium text-gray-800 pl-6 pt-2">
                                Mentors
                            </p>
                        </div>

                        <div className="relative pt-20">

                            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/66dfca39ed61e_mentors.png?d=592x310" className="h-42 w-full " alt="" />
                        </div>
                        {/* <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-pink-400 rounded-full opacity-40 blur-2xl"></div> */}
                    </div>


                    <div className="relative flex flex-col min-h-[230px]  justify-between rounded-3xl p-2 bg-[#F2F0FF] overflow-hidden">
                        <div className="absolute -pt-3 ">

                            <h3 className="text-5xl  leading-relaxed font-black text-gray-900">
                                350,000+
                            </h3>

                            <p className="text-lg font-medium text-gray-800  leading-snug">
                                Mentorship Mins
                                <br />
                                on Unstop
                            </p>
                        </div>
                        <div className=" relative flex justify-between pt-26">

                            <div className="flex gap-1 mt-4 text-yellow-400 text-2xl">
                                ★ ★ ★ ★ ★
                            </div>
                            <div>
                                <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/66dfca6837817_mentorship_mins.png?d=238x238" alt="" className="h-32 w-32" />
                            </div>
                        </div>
                        {/* <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-400 rounded-full opacity-30 blur-2xl"></div> */}
                    </div>

 
                    <div className="relative flex   rounded-3xl min-h-[230px] p-8 bg-[#FFF1CC] overflow-hidden">
                        <div className="absolute">

                        <h3 className="text-5xl font-black text-gray-900">
                            70+
                        </h3>

                        <p className="text-lg font-medium text-gray-800 mt-2">
                            Domains
                        </p>
                        </div>

                        <div className=" relative  ml-28 flex flex-col  gap-3 w-auto">

                            <img src="	https://d8it4huxumps7.cloudfront.net/uploads/images/66dfca7cb5e6f_domains.png?d=438x434" className="w-42" alt="" />

                        </div>

                        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-yellow-400 rounded-full opacity-30 blur-2xl"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}