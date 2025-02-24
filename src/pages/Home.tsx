const tag = [
  { label: "협업" },
  { label: "팀워크" },
  { label: "사용자 중심" },
];

const Home = () => {
  return (
    <section className="w-full min-h-[calc(100vh-124px)] flex items-center justify-center">
      <header className="font-bold leading-8">
        <p className="text-lg mb-3">
          {tag.map((item, index) => (
            <span key={index} className='first:pr-2 last:pl-2'>#{item.label}</span>
          ))}
        </p>
        <h1 className="mb-8 text-3xl leading-10 whitespace-pre-line">
          {/* 사용자 경험을 디자인하는 */}
          {/* 사용자 경험을 고민하는 */}
          데이터를 조각하는<br/>
          프런트엔드 개발자 박장환입니다.
        </h1>
        <h2 className="text-xl leading-8">
          저는 팀워크와 협업을 중시하는 신입 프론트엔드 개발자입니다.<br />
          사용자 중심의 웹 애플리케이션을 개발하기 위해 팀과 함께 협력하며 성장하고 있습니다.<br />
          제 포트폴리오에서 다양한 프로젝트와 협업 경험을 확인해보세요.
        </h2>
      </header>
    </section>
  );
};

export default Home;