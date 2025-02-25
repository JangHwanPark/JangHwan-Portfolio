import { Tab, TabList, TabPanel, TabPanels, Tabs } from "../components";
import { TabItem } from "../types/tabs";
import PageHeader from "../layout/PageHeader/PageHeader";

const tabs: TabItem[] = [
  { key: "tab1", label: "전체" },
  { key: "tab2", label: "프런트엔드" },
  { key: "tab3", label: "백엔드" },
  { key: "tab4", label: "풀스택" },
];

const Project = () => {
  return (
    <section className='w-full py-16 min-h-screen max-w-3xl mx-auto'>
      <PageHeader title="Projects">
        개발은 단순한 코드 작성이 아니라, 문제를 해결하고 더 나은 서비스를 만드는 과정이라고 생각합니다.
        다양한 프로젝트를 진행하며 팀원들과 협업하고, 새로운 기술을 적용하며 성장해왔습니다.
        특히, 사용자 경험을 개선하고, 유지보수성이 높은 코드를 작성하는 데 집중하고 있습니다.
        아래 프로젝트들은 제가 경험한 작업물들입니다.
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
      전체
      Vanila JS
      React
      NextJS
      NodeJS

      Titov(Visionlife)
      DA
      Teamming
      Node-Apis
      React-Components
      LLK
      React Shopping
      Attack-web
    </section>
  );
};

export default Project;