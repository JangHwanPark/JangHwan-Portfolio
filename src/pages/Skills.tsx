import { Tab, TabList, Tabs } from "../components";
import clsx from "clsx";
import { useScroll } from "../providers/ScrollProvider";
import TabPanels from "../components/Tabs/TabPanels";
import TabPanel from "../components/Tabs/TabPanel";
import SkillCategory from "../components/Skills/SkillCategory";
import { getCategorizedSkills } from "../service";

const tabItems = [
  { key: "frequent", label: "자주 사용해요" },
  { key: "familiar", label: "사용해 봤어요" },
];

const Skills = () => {
  const { sections } = useScroll();
  const categorizedSkills = getCategorizedSkills();
  const frequent = categorizedSkills.frequent;
  const familiar = categorizedSkills.familiar;

  const connClass = clsx(
    'w-full max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto px-10 min-h-screen flex flex-col justify-center gap-5');

  return (
    <section ref={sections.skills} id='skills' className={connClass}>
      {/* 사용 빈도별 | 분야별 */}
      <h2 className="w-fit py-10 text-7xl font-bold">
        <span>&lt;</span>SKILLS<span>/&gt;</span>
      </h2>
      <Tabs tabs={tabItems} defaultTab="home">
        <TabList>
          {tabItems.map(tab => (
            <Tab key={tab.key} tabKey={tab.key}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel tabKey="frequent">
            <div className='flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0'>
              <SkillCategory title='<Front End/>' skills={frequent?.FrontEnd}/>
              {/*<SkillCategory title='<Back End/>' skills={frequent?.BackEnd}/>
              <SkillCategory title='<DevOps/>' skills={frequent?.DevOps}/>*/}
              <SkillCategory title='<Toos/>' skills={frequent?.Tools}/>
            </div>
          </TabPanel>
          <TabPanel tabKey="familiar">
            <div className='flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0'>
              {/*<SkillCategory title='<Front End/>' skills={familiar?.FrontEnd}/>*/}
              <SkillCategory title='<Back End/>' skills={familiar?.BackEnd}/>
              <SkillCategory title='<DevOps/>' skills={familiar?.DevOps}/>
              {/*<SkillCategory title='<Toos/>' skills={familiar?.Tools}/>*/}
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </section>
  );
};

export default Skills;