import { useScroll } from "../providers/ScrollProvider";
import clsx from "clsx";

const Experience = () => {
  const { sections } = useScroll();
  const connClass = clsx(
    'bg-amber-200',
    'w-full max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto',
    'min-h-screen',);
  return (
    <section ref={sections.experience} id='experience' className={connClass}>
      Experience
    </section>
  );
};

export default Experience;