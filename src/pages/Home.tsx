import { useTheme } from "../providers/ThemeProvider";

const tag = [
  { label: "프론트엔드" },
  { label: "협업" },
  { label: "팀워크" },
  { label: "사용자 중심" },
];

const Home = () => {
  const { theme, handleClick } = useTheme();
  console.log(theme);
  return (
    <section className="w-full min-h-[calc(100vh-124px)] flex items-center justify-center">
      <header className="font-bold leading-8">
        <p className="text-lg">
          {tag.map((item, index) => (
            <span key={index} className='px-2'>#{item.label}</span>
          ))}
        </p>
        <h1 className="mb-8 text-3xl">데이터를 조각하는 프론트엔드 개발자 박장환 입니다.</h1>
        <h2 className="text-xl">저는 팀워크와 협업을 중시하는 신입 프론트엔드 개발자입니다.<br />
          사용자 중심의 웹 애플리케이션을 개발하기 위해 팀과 함께 협력하며 성장하고 있습니다.<br />
          제 포트폴리오에서 다양한 프로젝트와 협업 경험을 확인해보세요.</h2>
      </header>
      <article className="text-black bg-white dark:text-white dark:bg-black p-4 rounded-lg">
        <h2 className="text-xl text-gray-900 dark:text-gray-100">title</h2>
        <p className="text-gray-600 dark:text-gray-300">content</p>
      </article>
      <div>
        <button value='light' onClick={(e) => handleClick(e)}>light</button>
        <button value='dark' onClick={(e) => handleClick(e)}>dark</button>
      </div>
    </section>
  );
};

export default Home;