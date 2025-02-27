import { Footer, Header } from "../layout";
import { ThemeProvider } from "../providers/ThemeProvider";
import clsx from "clsx";
// Home,
import { About, Project, Skills, Experience } from "../pages";
import AsideMenu from "../components/AsideMenu/AsideMenu";
import { ScrollProvider } from "../providers/ScrollProvider";
// import { useRef } from "react";
// import { ScrollRestoration } from "react-router-dom";
// import gsap from "gsap";
// import Preloader from "../components/Preloader/Preloader";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


const RootLayout = () => {
  /*const [complete, setComplete] = useState(false);*/

  const classes = clsx(
    // min-h-[calc(100vh-136px)]
    // "max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto",
    "w-full min-h-[calc(100vh-136px)]");

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
          <About />
          <Skills />
          <Project />
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