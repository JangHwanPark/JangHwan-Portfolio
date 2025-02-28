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

const categories = ["FrontEnd", "BackEnd", "DevOps", "Tools"];

const Skills = () => {
  const { sections } = useScroll();
  const categorizedSkills = getCategorizedSkills();
  const frequent = categorizedSkills.frequent;
  const familiar = categorizedSkills.familiar;

  const connClass = clsx(
    'w-full max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto',
    'px-10 lex flex-col justify-center gap-5');

  const skillsConnClass = clsx(
    "py-5 grid grid-cols-2 grid-rows-1 gap-10");

  return (
    <section ref={sections.skills} id="skills" className={connClass}>
      {/* 사용 빈도별 | 분야별 */}
      <h2 className="w-fit pt-24 pb-32 text-7xl font-bold">
        <span>&lt;</span>SKILLS<span>/&gt;</span>
      </h2>
      <Tabs tabs={tabItems} defaultTab="home">
        <TabList>
          {tabItems.map(tab => (
            <Tab key={tab.key} tabKey={tab.key}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {/* ✅ 자주 사용해요 */}
          <TabPanel tabKey="frequent">
            <div className={skillsConnClass}>
              {categories.map((category, index) => frequent?.[category]?.length > 0 && (
                <SkillCategory
                  key={index}
                  title={`<${category} />`}
                  className={clsx(
                    // 첫 번째 카드는 2~4번 열에 배치
                    category === 'FrontEnd' && 'col-span-2 col-start-1 col-end-2',
                    category === 'Tools' && 'col-start-2 col-end-3')}
                  skills={frequent[category]} />
              ))}
            </div>
          </TabPanel>

          {/* ✅ 사용해 봤어요 */}
          <TabPanel tabKey="familiar">
            <div className={skillsConnClass}>
              {categories.map((category, index) => familiar?.[category]?.length > 0 && (
                <SkillCategory
                  key={index}
                  title={`<${category} />`}
                  className={clsx(
                    // 첫 번째 카드는 2~4번 열에 배치
                    category === 'BackEnd' && 'col-span-2 col-start-1 col-end-2',
                    category === 'DevOps' && 'col-start-2 col-end-3')}
                  skills={familiar[category]} />
              ))}
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
};

export default Skills;