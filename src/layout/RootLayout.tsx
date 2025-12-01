import { useState } from 'react';

import { ScrollProvider } from '@/providers/ScrollProvider';

import CursorEffect from '../components/CursorEffect/CursorEffect';
import CurveLine from '../components/Line/CurveLine';
import LinearLine from '../components/Line/LinearLine';
import Preloader from '../components/Preloader/Preloader';
import { Footer, Header } from '../layout';
import { AsideMenu } from '../layout';
import { About, Experience, Project, ProjectDetail, Skills } from '../pages';

const RootLayout = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectsType | null>(null);
  const [complete, setComplete] = useState(false);

  return (
    <>
      <Preloader setComplete={setComplete} />
      {complete && (
        <ScrollProvider>
          <h1 className="hidden">JangHwanPark | FrontEnd Development</h1>
          <CursorEffect />
          <Header />
          <main className="min-h-[calc(100vh-136px)] w-full">
            <LinearLine className="w-8/12 lg:ml-5 lg:w-9/12" />
            <About />
            <CurveLine
              firstClass="lg:w-8/12 xl:w-6/12 h-52 lg:ml-38 xl:ml-112"
              lastClass="w-4/12 h-72 lg:ml-38 xl:ml-112"
            />
            <Skills />
            <CurveLine
              containerClass="mt-12"
              firstClass="w-6/12 h-52 ml-56 pl-4 border-b-2"
              lastClass="w-full h-72 ml-56"
            />
            <Project onSelectProject={setSelectedProject} />
            {selectedProject && (
              <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
            <Experience />
          </main>
          <Footer />
          <AsideMenu />
        </ScrollProvider>
      )}
    </>
  );
};

export default RootLayout;
