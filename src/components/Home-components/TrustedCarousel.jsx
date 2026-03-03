import React, { useRef, useEffect } from "react";

const logos = [
  "https://d8it4huxumps7.cloudfront.net/uploads/images/6928262b69bec_amazon_logo.png?d=180x80",
  "https://d8it4huxumps7.cloudfront.net/uploads/images/69282664232be_coca_cola_logo.png?d=180x80",
  "https://d8it4huxumps7.cloudfront.net/uploads/images/692826d79d4e3_mahindra_logo.png?d=180x80",
  "https://d8it4huxumps7.cloudfront.net/uploads/images/6928274382f7a_samsung_logo.png?d=180x80",
  "https://d8it4huxumps7.cloudfront.net/uploads/images/692827375e3b9_reliance_logo.png?d=180x80",
  "https://d8it4huxumps7.cloudfront.net/uploads/images/69282725c6d83_pepsico_logo.png?d=180x80",
  "https://d8it4huxumps7.cloudfront.net/uploads/images/6928278262d21_tata_logo.png?d=200x200",
];

const TrustedCarousel = () => {
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const data = [...logos, ...logos, ...logos];

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;

    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    const firstItem = track.children[0];
    const itemWidth = firstItem.offsetWidth;
    const gap = 16;
    const totalWidth = logos.length * (itemWidth + gap);

    currentTranslate = totalWidth;
    prevTranslate = totalWidth;

    track.style.transform = `translateX(-${totalWidth}px)`;

    const startDrag = (e) => {
      isDragging = true;
      startX = e.pageX || e.touches[0].pageX;
      container.style.cursor = "grabbing";
    };

    const drag = (e) => {
      if (!isDragging) return;

      const currentX = e.pageX || e.touches[0].pageX;
      const delta = currentX - startX;

      currentTranslate = prevTranslate - delta;

      track.style.transform = `translateX(-${currentTranslate}px)`;
    };

    const endDrag = () => {
      isDragging = false;
      prevTranslate = currentTranslate;
      container.style.cursor = "grab";

      if (currentTranslate >= totalWidth * 2) {
        currentTranslate = totalWidth;
        prevTranslate = totalWidth;
        track.style.transform = `translateX(-${totalWidth}px)`;
      }

      if (currentTranslate <= 0) {
        currentTranslate = totalWidth;
        prevTranslate = totalWidth;
        track.style.transform = `translateX(-${totalWidth}px)`;
      }
    };

    container.addEventListener("mousedown", startDrag);
    container.addEventListener("mousemove", drag);
    container.addEventListener("mouseup", endDrag);
    container.addEventListener("mouseleave", endDrag);

    container.addEventListener("touchstart", startDrag);
    container.addEventListener("touchmove", drag);
    container.addEventListener("touchend", endDrag);

    return () => {
      container.removeEventListener("mousedown", startDrag);
      container.removeEventListener("mousemove", drag);
      container.removeEventListener("mouseup", endDrag);
      container.removeEventListener("mouseleave", endDrag);

      container.removeEventListener("touchstart", startDrag);
      container.removeEventListener("touchmove", drag);
      container.removeEventListener("touchend", endDrag);
    };
  }, []);

  return (
    <div className="w-full py-10 max-w-7xl mx-auto">
      <h2 className="text-center text-3xl font-extrabold mb-12">
        <strong className="color">Trusted</strong> by Industry Veterans
      </h2>

      <div
        ref={containerRef}
        className="overflow-hidden cursor-grab"
      >
        <div
          ref={trackRef}
          className="flex items-center gap-4 select-none"
        >
          {data.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[120px]"
            >
              <img
                src={logo}
                alt="company"
                className="h-10 object-contain opacity-100 "
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCarousel;