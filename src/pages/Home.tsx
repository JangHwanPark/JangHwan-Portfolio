import React from 'react';
import Header from "../components/Header.tsx";
import Project from "../components/Project.tsx";
import Footer from "../components/Footer.tsx";
import MyInfo from "../components/MyInfo.tsx";
import mock from '../data/mock.json';

const Home: React.FC = () => {
  return (
    <>
      <Header/>
      <main className='profile-main'>
        <section className='profile-section info'>
          <div>
            <img src="/src/assets/Image.png" alt="프로필 이미지"/>
          </div>
          <article className='info-article'>
            <MyInfo/>
          </article>
        </section>
        <section className='profile-section'>
          <h2 className='project-title'>Project</h2>

          {mock.map(item => (
            <Project title={item.title}/>
          ))}
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
