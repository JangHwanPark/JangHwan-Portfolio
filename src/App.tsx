import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Project from "./pages/Project.tsx";
import Home from "./pages/Home.tsx";
import Layout from "./layout/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projects/:id",
        element: <Project />,
      }
    ],
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