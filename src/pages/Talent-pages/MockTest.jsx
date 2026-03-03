import { Sparkles } from "lucide-react";
import TopRolesSection from "../../components/MockTest/TopRoleSection";
import CodingSprintSection from "../../components/Home-components/codeSprintSection"
export default function MockTestHero() {
    return (
        <section className="w-full flex mx-auto flex-col justify-center">
            <header
                className="w-full py-16 -mt-3 bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(180deg, #fff 0.48%, #fff0 32.88%), linear-gradient(272.34deg, #0073e63d, #937ff33d 97.87%)

      `,
                }}
            >
                <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center justify-between gap-12 ">

                    <div className="max-w-2xl">

                        <span className="inline-flex items-center gap-2 bg-[#291b69]  text-white text-sm font-medium px-4 py-2 rounded-full mb-6 bg-[url('https://d8it4huxumps7.cloudfront.net/uploads/images/67af3b2140445_ai_button.png')] mix-blend-color-burn">
                            <Sparkles size={18} />
                            AI-Powered
                        </span>

                        <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-700">
                            AI-Powered Company-Wise Mock Tests
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Master your concepts with full-length AI-Powered mock exams for 360° preparation!
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <img
                            src="https://d8it4huxumps7.cloudfront.net/uploads/images/68ef65cbea052_mock_interview_image.png?d=500x500"
                            alt="Role Based Mock Tests"
                            className="w-[400px] h-auto object-contain"
                            draggable={false}
                        />
                    </div>
                </div>
            </header>
            <div>
                <TopRolesSection />
            </div>
            <div className="max-w-8xl mx-auto ml-30">
                <CodingSprintSection />
            </div>

        </section>

    );
}