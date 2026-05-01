import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CarouselDemo } from './CarouselDemo';
gsap.registerPlugin(ScrollTrigger);

function Project() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(textRef.current, {
        scale: 1,
        opacity: 1,
        zIndex: 10,
      });

      gsap.set(sectionRef.current, {
        scale: 0,
        opacity: 0,
        yPercent: 0
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      tl.to(textRef.current, {
        scale: 10,
        opacity: 0,
        duration: 1,
        zIndex: 0,
        ease: 'power2.inOut'
      })
        .to(sectionRef.current, {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.out'
        }, '<0.8');

    }, containerRef);

    return () => ctx.revert();
  }, []);



  return (
    <div className="bg-dark1 rounded-[50px] over overflow-hidden">
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="md:text-[150px] text-[60px] text font-bold">
            PROJECTS
          </h1>
        </div>

        <div
          ref={sectionRef}
          className="absolute inset-0 flex items-center justify-center h-full w-full"
        >
          <div className="w-full md:px-8 px-4 py-12">
            <CarouselDemo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;