import React, { useEffect, useRef, useState } from 'react'

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

  return (
    <>
       {/* 2. THE BLACK SECTION (Curtain Reveal Animation) */}
        {/* 2. Scroll Animation Wrapper */}
      <div ref={containerRef} className="w-full z-50 overflow-hidden flex justify-center sticky top-0">
      <div 
             style={{
            width: `${scaleWidth}%`
          }}
        ref={darkSectionRef}
          className="bg-black/91 text-white py-24 px-6 md:py-32 flex flex-col items-center justify-center transition-all duration-400 ease-out shadow-2xl"
      >
        <div className="max-w-4xl text-center space-y-6">
          {/* Subtitle */}
          <span className={`inline-block text-xs font-semibold tracking-widest text-slate-400 uppercase transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Our Approach
          </span>

          {/* Main heading reveal transition */}
          <h2 className={`text-3xl md:text-5xl font-bold tracking-tight transition-all duration-1000 delay-200 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            We turn business ideas into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">
              reliable digital products
            </span>
          </h2>

          {/* Description reveal transition */}
          <p className={`text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            As your long-term technology partner, we combine product engineering excellence 
            with business acumen. From startups to enterprise systems, we build software that 
            performs, scales, and drives real outcomes.
          </p>
        </div>
      </div>
      </div>
      <div className='h-[100vh] w-full h-white'>

      </div>
    </>
     )
}

export default Approach
