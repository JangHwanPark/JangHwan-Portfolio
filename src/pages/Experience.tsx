import { useScroll } from "../providers/ScrollProvider";

const Experience = () => {
  const { sections } = useScroll();
  return (
    <section ref={sections.experience} id='experience' className='bg-amber-200 min-h-screen'>
      Experience
    </section>
  );
};

export default Experience;