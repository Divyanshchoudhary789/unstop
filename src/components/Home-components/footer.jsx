import { ArrowUpRight, Send } from "lucide-react"
import Logo from "../../assets/logo.png"
export default function Footer() {
    return (
        <footer
            className="
    bg-blue-50
    text-[#2d3748]
    [clip-path:polygon(0_0,_40%_0,_44%_40px,_100%_40px,_100%_100%,_0_100%)] w-full mx-auto
  "
        >
            <div className=" mx-auto px-11 pt-5 pb-10 flex justify-between items-center 
    border-b-[4px] border-transparent
    [border-image:repeating-linear-gradient(160deg,_#bfdbfe,_#bfdbfe_1px,_transparent_1px,_transparent_4px)_1] max-w-6xl
  ">

                <div className="flex flex-col gap-3 ">

                    <img
                        src={Logo}
                        alt="Unstop Logo"
                        className="h-24 w-24"
                    />

                    <p className="text-sm text-gray-700 flex items-center gap-2">
                        Built with
                        <div
                            className="h-6 w-6 bg-pink-700 -rotate-10"
                            style={{
                                WebkitMaskImage: "url(https://cdn.unstop.com/assets/icons/heart_filled.svg)",
                                maskImage: "url(https://cdn.unstop.com/assets/icons/heart_filled.svg)",
                                WebkitMaskRepeat: "no-repeat",
                                maskRepeat: "no-repeat",
                                WebkitMaskSize: "contain",
                                maskSize: "contain",
                            }}
                        />
                        in <strong className="font-semibold">India</strong>
                        for the <strong className="font-semibold">world</strong>
                    </p>

                </div>

                <div className="flex items-center  gap-5 mt-30 ">
                    {[
                        "65b8ddae44fdd_twitter_logo.svg",
                        "social-share/instagram-icon.svg",
                        "social-share/linkedin-icon.svg",
                        "social-share/facebook-icon.svg",
                        "social-share/telegram-icon.svg",
                        "social-share/discord-icon.svg",
                        "social-share/youtube-icon.svg",
                    ].map((icon, index) => (
                        <img
                            key={index}
                            src={`https://d8it4huxumps7.cloudfront.net/uploads/images/${icon}`}
                            alt="social"
                            className="h-5 w-5 transition cursor-pointer"
                        />
                    ))}
                </div>

            </div>

            <div className="max-w-6xl mx-auto px-6  border-blue-300"></div>

            <div className="max-w-6xl mx-auto px-6 py-14 flex gap-16">

                <div className="flex gap-16 flex-1 text-sm">

                    <div className="space-y-10">
                        <FooterSection
                            title="Products"
                            links={[
                                "Brand & Engage",
                                "Source",
                                "Screen",
                                "Assess",
                                "Interview",
                                "Hiring Automation",
                            ]}
                        />
                        <FooterSection
                            title="Mentorship"
                            links={[
                                "Be a Mentor",
                                "Explore Mentors",
                                "Mentorship FAQs",
                                "Mentorship Blogs",
                            ]}
                        />
                        <FooterSection
                            title="Legal"
                            links={[
                                "Terms & Conditions",
                                "Privacy Policy",
                                "Sitemap",
                            ]}
                        />
                    </div>

                    <div className="space-y-10">
                        <FooterSection
                            title="Participate"
                            links={[
                                "Competitions & Challenges",
                                "Assessments",
                                "Hackathons",
                                "Workshops & Webinars",
                            ]}
                        />
                        <FooterSection
                            title="Apply"
                            links={[
                                "Internships",
                                "Jobs",
                                "Scholarships",
                            ]}
                        />
                    </div>

                    <div className="space-y-10">
                        <FooterSection
                            title="Learn"
                            links={[
                                "Courses",
                                "Articles",
                                "Blog Series",
                                "Workshops",
                            ]}
                        />
                        <FooterSection
                            title="Others"
                            links={[
                                "About Us",
                                "Careers",
                                "Life at Unstop",
                                "FAQs",
                            ]}
                        />
                    </div>

                </div>

                <div className="w-[320px] space-y-8 ">

                    <img
                        src="https://d8it4huxumps7.cloudfront.net/uploads/images/694baa56aab62_we_are_hiring_footer_new_img.svg"
                        alt="Hiring"
                        className="w-36"
                    />

                    {/* <div className="border-t border-dashed border-blue-300"></div> */}

                    <div className="space-y-4 text-sm font-medium border-t-[4px] border-transparent
    [border-image:repeating-linear-gradient(160deg,_#bfdbfe,_#bfdbfe_1px,_transparent_1px,_transparent_4px)_1] pt-11">

                        <a className="flex items-center text-gray-700 font-bold text-lg gap-2 hover:underline cursor-pointer">
                            Contact Us <ArrowUpRight size={14} />
                        </a>

                        <a className="flex items-center gap-2 text-gray-700 font-bold text-lg hover:underline cursor-pointer">
                            Share Your Story Now <ArrowUpRight size={14} />
                        </a>

                        <div>
                            <h4 className="font-semibold mt-3 mb-1 text-gray-700  text-lg">
                                Stay Updated
                            </h4>

                            <p className="text-gray-600 text-sm mb-4">
                                Get regular updates on opportunities/jobs to showcase your talent and get hired.                            </p>

                            <a
                                href="/about/newsletter"
                                className="flex items-center w-full h-10 rounded-lg overflow-hidden"
                            >
                                <div className="flex items-center flex-1 px-4 py-11 bg-[#e5e7eb] text-[#174073] text-[14px] font-medium">
                                    Subscribe to our newsletter!
                                </div>

                                <div className="flex items-center justify-center w-12 h-full bg-[#2f3dbf] ">
                                    <Send className="text-white rotate-35" size={16} />
                                </div>
                            </a>
                        </div>

                    </div>

                </div>

            </div>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                <div>
                    <img
                        src="https://d8it4huxumps7.cloudfront.net/uploads/images/692925bc2b20c_unstop_payment_info_footer_imag.png?d=1360x104"
                        alt="100% safe & secure payment"
                        className="h-12 object-contain"
                    />
                </div>

                <div className="flex items-center gap-6">

                    <img
                        src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/gdpr-logo.png?d=300x300"
                        alt="GDPR"
                        className="h-14 w-14 object-contain"
                    />

                    <img
                        src="https://d8it4huxumps7.cloudfront.net/uploads/images/6231c2a5bdf94_iso_27001.svg"
                        alt="ISO 27001"
                        className="h-14 w-14 object-contain"
                    />

                    <img
                        src="https://d8it4huxumps7.cloudfront.net/uploads/images/6231c2c0b51ff_iso_9001.svg"
                        alt="ISO 9001"
                        className="h-14 w-14 object-contain"
                    />

                </div>

            </div>

        </footer>
    )
}

function FooterSection({ title, links }) {
    return (
        <div>
            <h4 className="font-semibold text-gray-800 mb-3">
                {title}
            </h4>
            <ul className="space-y-2 text-gray-600">
                {links.map((link, index) => (
                    <li
                        key={index}
                        className="hover:text-blue-600 cursor-pointer transition"
                    >
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    )
}