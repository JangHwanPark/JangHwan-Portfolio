import { skills } from "../data";
import { IconSkills } from "../components";
import clsx from "clsx";
import { useScroll } from "../providers/ScrollProvider";

const Skills = () => {
  const { sections } = useScroll();
  const frequency = skills.filter(item => item.usage.includes('frequent'));
  const familiar = skills.filter(item => item.usage.includes('familiar'));

  const skillsConn = clsx(
    'p-10 border rounded-xl');

  const subTitleClass = clsx(
    'mb-10 text-xl font-semibold text-center');

  return (
    <section ref={sections.skills} id='skills' className='w-full max-w-full py-16 bg-red-200'>
      <article className='w-full max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto px-10 min-h-screen flex flex-col justify-center gap-10'>
        {/*<h2>
          <span>&lt;</span>
          SKILLS
          <span>/&gt;</span>
        </h2>*/}
        <h2 className="w-fit py-10 text-7xl font-bold">SKILLS</h2>
        <div className='flex items-center justify-between'>
          <div className={skillsConn}>
            <h3 className={subTitleClass}>자주 사용해요</h3>
            <IconSkills skills={frequency}/>
          </div>

          <div className={skillsConn}>
            <h3 className={subTitleClass}>사용해 봤어요</h3>
            <IconSkills skills={familiar}/>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Skills;