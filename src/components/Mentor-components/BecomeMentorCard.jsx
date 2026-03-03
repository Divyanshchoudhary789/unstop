export default function BecomeMentorCard() {
    return (
        <div className="w-full flex justify-center pt-20 pb-5">
            <div className="max-w-7xl w-full px-4">
                <a
                    href="/become-a-mentor"
                    target="_blank"
                    rel="noreferrer"
                    className="relative group block rounded-3xl overflow-visible 
                     bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 
                     transition-all duration-300 hover:shadow-2xl 
                     h-[290px]"
                >
                    <div className="absolute -right-20 -top-20 w-72 h-72 bg-blue-300 opacity-30 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10 w-full max-w-4xl p-8">
                        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
                            <span className="text-blue-700 font-extrabold">
                                Become a Mentor
                            </span>
                            <br />
                            & Guide Unstoppable Talent!
                        </h2>

                        <p className="mt-4 text-lg text-gray-700">
                            Join the clan of 2000+ Mentors & guide talent to help them
                            create a difference.
                        </p>

                        <div className="mt-8">
                            <div className="inline-flex items-center gap-3 bg-blue-700 text-white rounded-full px-8 py-4 font-semibold text-base shadow-md group-hover:shadow-xl transition">
                                Become a Mentor
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 -right-15 h-[380px] z-20 pointer-events-none">
                        <img
                            src="https://d8it4huxumps7.cloudfront.net/uploads/images/68f8b1e60ae8a_become_mentor.png?d=1084x612"
                            className="h-full w-auto object-contain"
                            draggable={false}
                            alt=""
                        />
                    </div>

                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition duration-300 pointer-events-none rounded-3xl"></div>
                </a>
            </div>
        </div>
    );
}