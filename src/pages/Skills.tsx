import { TabItem } from "../types/tabs";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from "../components";
import { skills } from "../data";
import PageHeader from "../layout/PageHeader/PageHeader";

const tabs: TabItem[] = [
  { key: "tab1", label: "Tab 1" },
  { key: "tab2", label: "Tab 2" },
  { key: "tab3", label: "Tab 3" },
  { key: "tab4", label: "Tab 4" },
];

const Skills = () => {
  return (
    <section className='w-full max-w-3xl mx-auto'>
      <PageHeader title='SKILLS'>
        저는 새로운 기술을 배우고 실험하는 것을 즐깁니다.
        프론트엔드부터 백엔드, 데이터베이스, 개발 도구까지 다양한 기술을 익히고 활용하며,
        이를 통해 더 나은 사용자 경험을 만들기 위해 노력하고 있습니다.
        지금까지 사용해 본 주요 언어, 기술, 도구, 플랫폼은 다음과 같습니다.
      </PageHeader>

      <Tabs tabs={tabs} defaultTab="tab1">
        <TabList>
          {tabs.map((tab) => (
            <Tab key={tab.key} tabKey={tab.key}>
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel tabKey="tab1">Tab 1 Content</TabPanel>
          <TabPanel tabKey="tab2">Tab 2 Content</TabPanel>
          <TabPanel tabKey="tab3">Tab 3 Content</TabPanel>
          <TabPanel tabKey="tab4">Tab 4 Content</TabPanel>
        </TabPanels>
      </Tabs>

      {/* UI 테스트 */}
      {skills.map((item, index) => (
        <article key={index} className="flex items-center gap-3">
          <figure className='w-10 h-10'>{item.icon}</figure>
          <div className='text-left'>
            <h2 className=''>{item.name}</h2>
            <p>description</p>
          </div>
        </article>
      ))}

    </section>
  );
};

export default Skills;