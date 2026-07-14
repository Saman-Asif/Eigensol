import React, { useEffect, useRef, useState } from 'react'
import Services from './Services';

const Approach = () => {
    const darkSectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    // Intersection Observer to trigger text animations when the black section rolls up
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 } // Triggers when 20% of the dark section is visible
        );

        if (darkSectionRef.current) {
            observer.observe(darkSectionRef.current);
        }

        return () => {
            if (darkSectionRef.current) {
                observer.unobserve(darkSectionRef.current);
            }
        };
    }, []);


    const containerRef = useRef(null);
    const [scaleWidth, setScaleWidth] = useState(45); // Starts at 85% width

    // use refs to store mutable values for smooth calculation loop
    const targetWidthRef = useRef(45);
    const currentWidthRef = useRef(45)
    const requestRef = useRef(null)
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            // Get the bounding rectangle of the section relative to the viewport
            const rect = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate when the element enters the viewport from the bottom
            const totalAnimationDistance = viewportHeight * 0.2; // Controls how fast it expands
            const distanceFromBottom = viewportHeight - rect.top;

            if (distanceFromBottom > 0) {
                // Calculate a percentage (0 to 1) of how far the element has scrolled up
                const scrollProgress = Math.min(Math.max(distanceFromBottom / totalAnimationDistance, 0), 1);

                // Map progress to width (from 85% to 100%)
                targetWidthRef.current = 45 + (55 * scrollProgress);
            } else {
                // Reset to initial small state if scrolled all the way back up
                targetWidthRef.current = 45;
            }
        };
        // 2. The Lerping loop running at 60fps+ to smooth out the values
        const updateSmoothWidth = () => {
            // Linear Interpolation formula: Current = Current + (Target - Current) * EaseFactor
            // 0.1 creates a beautifully slow, dampening glide effect
            const easeFactor = 0.7;

            currentWidthRef.current += (targetWidthRef.current - currentWidthRef.current) * easeFactor;

            // Update the React state to force re-render with the smooth value
            setScaleWidth(currentWidthRef.current);

            // Keep the loop running smoothly
            requestRef.current = requestAnimationFrame(updateSmoothWidth);
        };

        // Listeners and initialization
        window.addEventListener('scroll', handleScroll);
        requestRef.current = requestAnimationFrame(updateSmoothWidth);
        handleScroll(); // Initial run

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

     const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "10+", label: "Years of Experience" },
  { value: "40+", label: "Product Experts" },
];

 const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Tracks horizontal scroll position on mobile to highlight the correct dot
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const cardWidth = container.clientWidth;
    // Calculate the active index based on current scroll position
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };
    // Allows users to click a dot to scroll directly to that card
  const scrollToCard = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.clientWidth;
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };
    return (
        <>
            {/* 2. THE BLACK SECTION (Curtain Reveal Animation) */}
            {/* 2. Scroll Animation Wrapper */}
            <div ref={containerRef} className="w-full mt-4 z-50 overflow-hidden flex justify-center sticky top-0">
                <div
                    style={{
                        width: `${scaleWidth}%`
                    }}
                    ref={darkSectionRef}
                    className="bg-[#131315] text-white py-24 px-6 md:py-32 flex flex-col items-center justify-center transition-all duration-400 ease-out shadow-2xl"
                >
                    <div className="max-w-4xl text-center space-y-8">
                        {/* Subtitle */}
                        <span className={`inline-block text-sm py-2 px-4 rounded-full bg-white/10 font-medium tracking-tight text-slate-400 uppercase transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}>
                            Our Approach
                        </span>

                        {/* Main heading reveal transition */}
                        <h2 className={`text-3xl md:text-5xl font-sans lg:text-6xl font-bold tracking-tight transition-all duration-1000 delay-200 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}>
                            We turn business ideas into reliable digital products
                        </h2>

                        {/* Description reveal transition */}
                        <p className={`text-base md:text-lg font-sans lg:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}>
                            As your long-term technology partner, we combine product engineering excellence
                            with business acumen. From startups to enterprise systems, we build software that
                            performs, scales, and drives real outcomes.
                        </p>
                       {/* 1. CARDS CONTAINER */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="
          w-full max-w-full flex flex-row flex-nowrap gap-4 overflow-x-auto pb-4 scrollbar-none
          snap-x snap-mandatory scroll-smooth mt-10 font-sans text-black/70 justify-start md:justify-center items-center
          md:grid md:grid-cols-3 md:overflow-visible md:gap-6
        "
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="
              w-full snap-center shrink-0 
              md:min-w-0 md:shrink
              lg:w-70 h-30 flex flex-col justify-center items-center rounded-2xl bg-[#1F1F21]  border border-white/30
            "
          >
            <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
            <p className="text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* 2. PAGINATION DOTS (Mobile Screen Only: 'md:hidden') */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {stats.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            aria-label={ `Go to slide ${index + 1}`}
            className={`
              h-2.5 rounded-full transition-all duration-300
              ${activeIndex === index ? "w-6 bg-orange-500" : "w-2.5 bg-slate-600"}
            `}
          />
        ))}
      </div>
      </div>
      </div>
                    </div>
            <Services/>
        </>
    )
}

export default Approach
