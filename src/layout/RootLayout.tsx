import { Footer, Header } from "../layout";
import { ThemeProvider } from "../providers/ThemeProvider";
import clsx from "clsx";
// Home, Project, , ProjectDetail
import { About, Project, Skills, Experience, ProjectDetail } from "../pages";
import { AsideMenu } from "../layout";
import { ScrollProvider } from "../providers/ScrollProvider";
import CurveLine from "../components/Line/CurveLine";
import LinearLine from "../components/Line/LinearLine";
// import { useRef } from "react";
// import { ScrollRestoration } from "react-router-dom";
// import gsap from "gsap";
// import Preloader from "../components/Preloader/Preloader";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


const RootLayout = () => {
  /*const [complete, setComplete] = useState(false);*/

  // min-h-[calc(100vh-136px)]
  // "max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto",
  const classes = clsx("w-full min-h-[calc(100vh-136px)]");

  const dark = clsx(
    "relative",
    "text-gray-800 bg-white",
    "dark:bg-gray-800 dark:text-white",
    'overflow-x-hidden');

  return (
    <ThemeProvider>
      {/* <Preloader setComplete={setComplete}/>
      {complete && (*/}
      <ScrollProvider>
      <div className={dark}>
        <h1 className='hidden'>페이지 본문</h1>
        <Header />
        <main className={classes}>
          {/*<Home />*/}
          <LinearLine className='w-8/12 xl:w-9/12'/>
          <About />
          <CurveLine
            firstClass='w-6/12 ml-72'
            lastClass='w-4/12 ml-72'/>
          <Skills />
          <CurveLine
            containerClass='mt-12'
            firstClass='w-7/12 ml-56'
            lastClass='w-full ml-56'/>
          <Project />
          <ProjectDetail/>
          <LinearLine className='w-6/12 mt-32'/>
          <Experience />
        </main>
        <Footer />
        <AsideMenu/>
      </div>
      </ScrollProvider>
      {/*)}*/}
    </ThemeProvider>
  );
};

export default RootLayout;