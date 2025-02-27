// import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import { Footer, Header, Navigation } from "../layout";
import { ThemeProvider } from "../providers/ThemeProvider";
import clsx from "clsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Experience, Home, About, Project, Skills } from "../pages";
// import Preloader from "../components/Preloader/Preloader";
// import { useGSAP } from "@gsap/react";
// https://stackblitz.com/edit/vitejs-vite-d73sck?file=src%2Fviews%2FLayers.jsx
const iconNavbar  = [
  {href: '/', icon: <FaGithub className='w-6 h-6'/>},
  {href: '/', icon: <FaLinkedin className='w-6 h-6'/>}
];

const RootLayout = () => {
  /*const [complete, setComplete] = useState(false);*/

  const classes = clsx(
    'max-w-4xl md:max-w-5xl lg:max-w-6xl',
    'mx-auto w-full',
    'min-h-[calc(100vh-136px)]');

  const dark = clsx(
    'relative',
    'text-gray-800 bg-white',
    'dark:bg-gray-800 dark:text-white');

  return (
    <ThemeProvider>
     {/* <Preloader setComplete={setComplete}/>
      {complete && (*/}
      <ScrollRestoration/>
        <div className={dark}>
        <Header/>
        <main className={classes}>
          <Home/>
          <About/>
          <Skills/>
          <Project/>
          <Experience/>
        </main>
        <Footer/>
        <Navigation
          items={iconNavbar}
          type='icon'
          // absolute bottom-1/12 left-12
          className='fixed bottom-1/12 left-12'/>
      </div>
      {/*)}*/}
    </ThemeProvider>
  )
};

export default RootLayout;