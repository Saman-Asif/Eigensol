import { Eye } from 'lucide-react'
 import { useState, useRef } from 'react';

const ServiceCard = () => {
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
const services = [
  {
    id: 'custom-software',
    title: 'Custom Software',
    description: 'Tailored platforms built around your operations, workflows, and business goals.',
    // Inline SVGs for clean, sharp, dependency-free icons
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 'web-apps',
    title: 'Web Apps',
    description: 'Secure, scalable web products engineered with modern architecture and product thinking.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: 'mobile',
    title: 'Mobile',
    description: 'Cross-platform and native mobile experiences designed for usability and scale.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'ui-ux',
    title: 'UI/UX',
    description: 'Interfaces and systems that keep products consistent, clear, and easy to scale.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: 'ai-devops',
    title: 'AI & DevOps',
    description: 'Automation, delivery pipelines, and cloud operations that keep teams moving faster.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  }
];
 // Defaulting the active card to the first one like your layout
  const [activeId, setActiveId] = useState('custom-software');
  return (
    <>
      {/* Cards Container Grid */}
      <div ref={scrollContainerRef}
        onScroll={handleScroll}
         className=" w-full max-w-full flex flex-row flex-nowrap gap-4 overflow-x-auto pb-4 scrollbar-none
          snap-x snap-mandatory scroll-smooth mt-10 font-sans text-black/70 justify-start lg:justify-center items-center lg:overflow-visible lg:pb-0">
        {services.map((service) => {
          const isActive = activeId === service.id;
          return (
            <div
              key={service.id}
              onClick={() => setActiveId(service.id)}
              className={`group relative overflow-hidden shrink-0 lg:shrink snap-center max-w-full rounded-2xl px-6 py-10 w-full sm:w-[240px] lg:h-[300px] md:w-full lg:w-[240px] flex flex-col items-center text-center border-[1.5px] transition-all duration-300 cursor-pointer
                ${isActive 
                  ? 'bg-white border-[#ff5a50] shadow-lg -translate-y-1' 
                  : 'bg-[#f1f5f9] border-transparent hover:bg-white hover:border-[#ff5a50] hover:shadow-lg hover:-translate-y-1'
                }`}
            >
              {/* Top Gradient Accent (only visible when card is inactive) */}
              <span 
                className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#ff5a50] to-[#4facfe] transition-opacity duration-300
                  ${isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`} 
              />

              {/* Icon Container with Glow */}
              <div 
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-300
                  ${isActive 
                    ? 'bg-blue-50 text-slate-800 shadow-[0_0_20px_rgba(147,197,253,0.5)]' 
                    : 'bg-slate-200 text-slate-600 group-hover:bg-blue-50 group-hover:text-slate-800 group-hover:shadow-[0_0_20px_rgba(147,197,253,0.5)]'
                  }`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                {service.description}
              </p>
            </div>
          );
        })}
        </div>
          {/* 2. PAGINATION DOTS (Mobile Screen Only: 'md:hidden') */}
      <div className="flex justify-center gap-2 mt-4 lg:hidden">
        {services.map((_, index) => (
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
        </>
  )
}

export default ServiceCard
