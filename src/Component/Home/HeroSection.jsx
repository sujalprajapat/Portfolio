import { ReactTyped } from "react-typed";
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import developer from '../../Asset/developer.glb'

function Model({ url, sectionRef, ...props }) {
  const modelRef = useRef();
  const rotationX = useRef(Math.PI / 2);
  const positionY = useRef(0);
  const scaleRef = useRef(2);

  const { scene } = useGLTF(url);
  const { mouse, gl } = useThree();

  const touchX = useRef(0);

  useEffect(() => {
    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const width = window.innerWidth;

      touchX.current = (touch.clientX / width) * 2 - 1;
    };

    gl.domElement.addEventListener("touchmove", handleTouchMove);

    return () => {
      gl.domElement.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gl]);

  useLayoutEffect(() => {
    if (!modelRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(positionY, {
        current: -3.9,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(rotationX, {
        current: rotationX.current - 2.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(scaleRef, {
        current: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
    // eslint-disable-next-line 
  }, []);

  useFrame(() => {
    if (!modelRef.current) return;

    const isMobile = "ontouchstart" in window;

    const x = isMobile ? touchX.current : mouse.x;

    modelRef.current.rotation.y = x * Math.PI;
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[0, -1.5, 0]}
      scale={1.8}
    />
  );
}
function HeroSection() {
  const heroRef = useRef(null);

  return (
    <div className="flex  md:flex-row items-center justify-between w-[90%] m-auto gap-8 flex-col-reverse pb-10 md:pb-0">
      <div className="md:w-[50%] w-full md:pe-10  flex flex-col justify-center h-full">
        <p className="xl:text-md text-sm  text-brownMedium text-center md:text-start">
          <ReactTyped
            strings={["Hi, I’m"]}
            typeSpeed={70}
            backSpeed={30}
            showCursor={false}
          />
        </p>

        <div className="text xl:text-[120px] sm:text-[80px] text-[70px] text-center md:text-start">
          <h1>
            <ReactTyped
              strings={["Sujal"]}
              typeSpeed={70}
              showCursor={false}
              startDelay={800}
            />
          </h1>
          <h1>
            <ReactTyped
              strings={["Prajapat"]}
              typeSpeed={70}
              showCursor={false}
              startDelay={1500}
            />
          </h1>
        </div>

        <p className="xl:text-md text-sm  mt-3 text-brownMedium text-center md:text-start">
          <ReactTyped
            strings={[
              "A passionate <u><b> Full stack web Developer</b> </u> with a strong focus on building clean, user-friendly, and efficient web applications. I enjoy solving problems through code and continuously improving my skills to stay updated with modern technologies.",
            ]}
            typeSpeed={30}
            showCursor={false}
            startDelay={2500}
          />
        </p>
      </div>
      <div ref={heroRef} className="md:w-1/2 w-full h-[100vh] flex items-center justify-center">
        <Canvas camera={{ position: [0, 0, 8], fov: 30 }}>
          <ambientLight intensity={2} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <Model url={developer} sectionRef={heroRef} />
          </Suspense>
        </Canvas>
      </div>
    </div>

  )
}
export default HeroSection;