import React from 'react';
import Header from "../components/Header.tsx";
import Project from "../components/Project.tsx";
import Footer from "../components/Footer.tsx";
import MyInfo from "../components/MyInfo.tsx";

const Home: React.FC = () => {
  return (
    <>
      <Header/>
      <main className='profile-main'>
        <section className='profile-section info'>
          <div>
            <img src="/src/assets/Image.png" alt="프로필 이미지"/>
          </div>
          <article>
            <MyInfo/>
          </article>
        </section>
        <section className='profile-section'>
          <h2>Project</h2>
          <Project/>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default Home;