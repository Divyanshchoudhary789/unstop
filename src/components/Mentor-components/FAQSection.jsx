import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "What is Unstop Mentorship?",
            answer:
                "Unstop Mentorship is a unique platform which connects top quality mentors from around the globe with ambitious mentees who are looking for guidance, all on a single platform.",
        },
        {
            question: "How does Unstop Mentorship work?",
            answer:
                "Users can browse mentors, book 1:1 sessions, and get personalized guidance based on their goals and career aspirations.",
        },
        {
            question: "What is the goal of 1:1 mentorship sessions?",
            answer:
                "The goal is to provide personalized guidance, career clarity, and skill development through focused 1:1 interaction.",
        },
        {
            question: "Who is eligible to take 1:1 mentorship sessions?",
            answer:
                "Students, working professionals, and aspirants looking for guidance can take mentorship sessions.",
        },
        {
            question: "Who are Unstop mentors?",
            answer:
                "Mentors are experienced professionals, industry leaders, and experts across domains who provide career and skill guidance.",
        },
    ];

    return (
        <section className="w-full flex justify-center py-20">
            <div className="max-w-6xl w-full px-4">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-1.5 h-10 bg-blue-600 rounded-full"></div>

                    <h2 className="text-3xl md:text-4xl font-bold">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className={` rounded-xl transition-all duration-300 hover:bg-blue-100 ${isActive ? "bg-blue-100" : "bg-blue-50"
                                    }`}
                            >
                                <button
                                    onClick={() =>
                                        setActiveIndex(isActive ? null : index)
                                    }
                                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                                >
                                    <span className="font-medium text-lg">
                                        {faq.question}
                                    </span>

                                    {isActive ? (
                                        <Minus size={22} />
                                    ) : (
                                        <Plus size={22} />
                                    )}
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-40 px-6 pb-5" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}