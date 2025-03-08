import { Footer, Header } from "../layout";
import {
  About,
  Project,
  Skills,
  Experience,
  ProjectDetail, Home,
} from "../pages";
import { AsideMenu } from "../layout";
import { ScrollProvider } from "../providers/ScrollProvider";
import CurveLine from "../components/Line/CurveLine";
import LinearLine from "../components/Line/LinearLine";
import { useState } from "react";

const RootLayout = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectsType | null>(null);
  /*const [complete, setComplete] = useState(false);*/

  return (
    <div className='text-t-primary bg-primary'>
      {/*<Preloader setComplete={setComplete} />
      {complete && (*/}
      <ScrollProvider>
        <h1 className="hidden">
          JangHwanPark | FrontEnd Development
        </h1>
        <Header />
        <main className="w-full min-h-[calc(100vh-136px)]">
          <Home/>
          <LinearLine className="w-8/12 xl:w-9/12" />
          <About />
          <CurveLine
            firstClass="w-6/12 ml-72"
            lastClass="w-4/12 ml-72" />
          <Skills />
          <CurveLine
            containerClass="mt-12"
            firstClass="w-7/12 ml-56"
            lastClass="w-full ml-56" />
          <Project onSelectProject={setSelectedProject} />
          {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
          <LinearLine className="w-6/12 mt-32" />
          <Experience />
        </main>
        <Footer />
        <AsideMenu />
      </ScrollProvider>
      {/* )}*/}
    </div>
  );
};

export default RootLayout;