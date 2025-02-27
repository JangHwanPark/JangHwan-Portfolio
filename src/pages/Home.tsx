import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";

const Home = () => {
  const sectionRef = useRef(null);
  return (
    <section ref={sectionRef} className="content mx-auto w-full min-h-screen flex flex-col justify-center bg-amber-100">

    </section>
  );
};

export default Home;