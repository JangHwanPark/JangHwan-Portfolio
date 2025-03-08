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
  const skillsTextClass = clsx('text-t-sub xs:text-sm sm:text-base lg:text-lg xl:text-xl leading-8');
  const tagClass = clsx('bg-gradient-to-b from-[#F4B400] to-white bg-clip-text text-transparent');

  return (
    <section ref={sections.skills} id="skills" className='w-full max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-8 md:px-10 lex flex-col justify-center gap-5 mb-32 lg:mb-0'>
      {/* 섹션 헤더 */}
      <header className='pt-20 lg:pt-5 pb-10'>
        <h2 className="w-fit pb-3 text-4xl font-bold lg:pb-8 lg:text-5xl 2xl:text-6xl">
          <span className={tagClass}>&lt;</span>
          SKILLS
          <span className={tagClass}>/&gt;</span>
        </h2>
        <p className={skillsTextClass}>
          새로운 기술을 탐험하고, 더 나은 사용자 경험을 위한 해결책을 고민합니다.
        </p>
        <p className={skillsTextClass}>
          작은 문제 하나하나를 해결하며, 더 나은 가치를 만들기 위해 끊임없이 고민합니다.
        </p>
      </header>
      {/* 섹션 본문 (사용 빈도별 | 분야별) */}
      <Tabs tabs={tabItems} defaultTab="home">
        <TabList>
          {tabItems.map(tab => (
            <Tab
              key={tab.key}
              tabKey={tab.key}>
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabPanels className='lg:py-10'>
          {/* ✅ 자주 사용해요 */}
          <TabPanel tabKey="frequent">
            {categories.map((category, index) => frequent?.[category]?.length > 0 && (
              <SkillCategory
                key={index}
                title={`<${category} />`}
                className={clsx(
                  // 첫 번째 카드는 2~4번 열에 배치
                  category === 'FrontEnd' && 'col-span-2 col-start-1 col-end-1 md:col-end-2',
                  category === 'Tools' && 'md:col-start-2 md:col-end-3')}
                skills={frequent[category]} />
            ))}
          </TabPanel>

          {/* ✅ 사용해 봤어요 */}
          <TabPanel tabKey="familiar">
            {categories.map((category, index) => familiar?.[category]?.length > 0 && (
              <SkillCategory
                key={index}
                title={`<${category} />`}
                className={clsx(
                  // 첫 번째 카드는 2~4번 열에 배치
                  category === 'BackEnd' && 'col-span-2 col-start-1 col-end-1 md:col-end-2',
                  category === 'DevOps' && 'md:col-start-2 md:col-end-3')}
                skills={familiar[category]} />
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
};

export default Skills;