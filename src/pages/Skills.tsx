import { TabItem } from "../types/tabs";
import TabList from "../components/Tabs/TabList";
import Tab from "../components/Tabs/Tab";
import TabPanels from "../components/Tabs/TabPanels";
import TabPanel from "../components/Tabs/TabPanel";
import Tabs from "../components/Tabs/Tabs";

const tabs: TabItem[] = [
    { key: "tab1", label: "Tab 1" },
    { key: "tab2", label: "Tab 2" },
    { key: "tab3", label: "Tab 3" },
    { key: "tab4", label: "Tab 4" },
];

const Skills = () => {
  return (
    <div>
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
      {/* Front */}
      HTML
      CSS
      JavaScript
      TypeScript
      React
      NextJS
      ...

      {/* Back */}
      C++
      Java
      Python
      NodeJS(Express.js)
      MySQL
      MongoDB

      {/* OS & Cloud */}
      Linux(Ubuntu)
      Docker
      AWS(EC2, S3, RDS)
      NCP(Server)

      {/* Tools*/}
      Figma
      Git / Github
      Confluence / Jira
      Slack
      Postman
      JetBrains
      Swagger
    </div>
  );
};

export default Skills;