/*
import { TabItem } from "../types/tabs";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  FilteredSkills
} from "../components";
//
import PageHeader from "../layout/PageHeader/PageHeader";

const tabs: TabItem[] = [
  { key: "tab1", label: "전체" },
  { key: "tab2", label: "자주 사용해요" },
  { key: "tab3", label: "사용 해봤어요" },
];

const IconSkills = () => {
  return (
    <section className='w-full max-w-full py-16 bg-red-300'>
      <article className='w-full max-w-3xl md:max-w-4xl lg:max-w-3xl mx-auto min-h-screen'>
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
            <TabPanel tabKey="tab1">
              <FilteredSkills filter="tab1"/>
            </TabPanel>
            <TabPanel tabKey="tab2">
              <FilteredSkills filter="tab2"/>
            </TabPanel>
            <TabPanel tabKey="tab3">
              <FilteredSkills filter="tab3"/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </article>
    </section>
  );
};

export default IconSkills;*/