import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const originalData = [
    {
        title: "H&S Brand Champion Challenge",
        image:
            "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/fullbanner/699407471448e_hs-brand-champion-challenge.jpg?d=451x676",
        mode: "Online",
        price: "Free",
    },
    {
        title: "Unstop Weekend Internship",
        image:
            "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/fullbanner/69871a1664c48_unstop-weekend-internship.jpg?d=451x676",
        mode: "WFH",
        price: "Free",
    },
    {
        title: "India Innovates 2026",
        image:
            "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/fullbanner/6998570fe6905_india_innovates_featured.jpg?d=451x676",
        mode: "Offline",
        price: "Free",
    },
    {
        title: "Virtual Webinar on April 10",
        image:
            "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/fullbanner/699970e0d6d80_virtual-webinar-on-april-10.jpg?d=451x676",
        mode: "Online",
        price: "Free",
    },
];

const CARD_WIDTH = 324; 
const VISIBLE_COUNT = 4;
const VIEWPORT_WIDTH = 1290; 

const FeaturedCarousel = () => {
    const trackRef = useRef(null);

    const data = [
        ...originalData.slice(-VISIBLE_COUNT),
        ...originalData,
        ...originalData.slice(0, VISIBLE_COUNT),
    ];

    const [index, setIndex] = useState(VISIBLE_COUNT);
    const [isHovered, setIsHovered] = useState(false);

    const moveTo = (newIndex) => {
        setIndex(newIndex);
    };

    useEffect(() => {
        const track = trackRef.current;

        track.style.transition = "transform 0.9s ease";
        track.style.transform = `translateX(-${index * CARD_WIDTH}px)`;

        const handleTransitionEnd = () => {
            if (index >= originalData.length + VISIBLE_COUNT) {
                track.style.transition = "none";
                const newIndex = VISIBLE_COUNT;

                track.style.transform = `translateX(-${newIndex * CARD_WIDTH}px)`;

                track.offsetHeight;

                setIndex(newIndex);
            }

            if (index < VISIBLE_COUNT) {
                track.style.transition = "none";
                const newIndex = originalData.length + VISIBLE_COUNT - 1;

                track.style.transform = `translateX(-${newIndex * CARD_WIDTH}px)`;

                track.offsetHeight;

                setIndex(newIndex);
            }
        };

        track.addEventListener("transitionend", handleTransitionEnd);

        return () =>
            track.removeEventListener("transitionend", handleTransitionEnd);
    }, [index]);
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            moveTo(index + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, [index, isHovered]);

    return (
        <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
  <span className="w-1.5 h-8 bg-color rounded-sm"></span>
  <span>Featured</span>
</h2>
            <div className="relative p-3">
                <button
                    onClick={() => moveTo(index - 1)}
                    className="absolute -left-14 top-1/2 -translate-y-1/2 z-20
             w-12 h-12 flex items-center justify-center
             bg-white border border-gray-200
             shadow-xl rounded-full
             hover:scale-110 hover:shadow-2xl
             transition-all duration-300 cursor-pointer"
                >
                    <ChevronLeft size={22} />
                </button>

                <div
                    className="overflow-hidden mx-auto"
                    style={{ width: `${VIEWPORT_WIDTH}px` }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        ref={trackRef}
                        className="flex gap-6"
                        style={{
                            transform: `translateX(-${index * CARD_WIDTH}px)`,
                        }}
                    >
                        {data.map((item, i) => (
                            <div
                                key={i}
                                className="min-w-[300px] bg-white rounded-xl shadow-md cursor-pointer hover:text-blue-500"
                            >
                                <div className="relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-[320px] object-cover rounded-t-xl"
                                    />
                                    <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                                        <Heart size={16} />
                                    </button>
                                </div>

                                <div className="p-4">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                                            {item.mode}
                                        </span>
                                        <span className="text-green-600 font-medium">
                                            {item.price}
                                        </span>
                                    </div>

                                    <h3 className="text-sm font-semibold line-clamp-2">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => moveTo(index + 1)}
                    className="absolute -right-14 top-1/2 -translate-y-1/2 z-20
             w-12 h-12 flex items-center justify-center
             bg-white border border-gray-200
             shadow-xl rounded-full
             hover:scale-110 hover:shadow-2xl
             transition-all duration-300 cursor-pointer"
                >
                    <ChevronRight size={22} />
                </button>
            </div>
        </div>
    );
};

export default FeaturedCarousel;