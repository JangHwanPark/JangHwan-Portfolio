import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData
} from "react-router-dom";
import Project from "./pages/Project.tsx";
import Home from "./pages/Home.tsx";

// 프로젝트 상세 페이지의 로더 함수
const projectLoader = async ({ params }: never) => {
  const { id } = params;
  // 여기서 ID에 해당하는 프로젝트 데이터를 가져오는 로직 추가 가능
  const response = await fetch('/src/data/mock.json')
  const projects = await response.json();
  const project = projects.find((project: never) => project.id === id);
  return { project };
};

// 라우터 설정
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/projects/:id",
    loader: projectLoader,
    Component() {
      const data = useLoaderData() as { project: never };
      return <Project project={data.project} />;
    },
  }
]);

function App() {
  /**
   * RouterProvider - 생성된 라우터를 App 에 제공
   * fallbackElement - 로딩중일때 표시될 요소 지정
   */
  return <RouterProvider router={router} fallbackElement={<p>Loading</p>}/>
}

export default App