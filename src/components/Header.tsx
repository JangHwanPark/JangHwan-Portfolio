import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='profile-header'>
      <h2>안녕하세요</h2>
      <h3>데이터를 조각하는 프론트엔드 개발자 박장환 입니다.</h3>
      <p>저는 팀워크와 협업을 중시하는 신입 프론트엔드 개발자입니다.<br/>
        사용자 중심의 웹 애플리케이션을 개발하기 위해 팀과 함께 협력하며 성장하고 있습니다.<br/>
        제 포트폴리오에서 다양한 프로젝트와 협업 경험을 확인해보세요.</p>
    </header>
  );
};

export default Header;