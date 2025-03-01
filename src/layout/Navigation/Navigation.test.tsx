import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { MemoryRouter } from "react-router-dom";
import { ScrollProvider } from "../../providers/ScrollProvider";
import userEvent from "@testing-library/user-event";

const navbar = [
  {href: "/", title: 'Home'},
  {href: "/About", title: 'About'},
  {href: "/skills", title: 'Skills'},
  {href: "/projects", title: 'Projects'},
  {href: "/experience", title: 'Experience'},
];

beforeEach(() => {
  render(
    <MemoryRouter>
      <ScrollProvider>
        <Navigation items={navbar}/>
      </ScrollProvider>
    </MemoryRouter>
  );
})

describe("Navigation 컴포넌트 테스트", () => {
  it("Navigation 컴포넌트내 텍스트가 정상적으로 렌더링 되어야 한다.", () => {
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });

  it("[PC]Navigation의 각 항목이 `Link`로 렌더링 되어야 한다.", () => {
    navbar.forEach((item) => {
      const linkElement = screen.getByRole("link", { name: item.title });
      expect(linkElement).toHaveAttribute("href", item.href);
    });
  });

  it("[Mobile]모바일 환경에서 햄버거 메뉴가 출력되어야 한다.", () => {
    // 1. 버튼이 렌더링됐는지 확인 (만약 'aria-label'이나 다른 접근성 속성이 있으면 그것을 활용)
    const hamburgerButton = screen.getByRole("button");
    expect(hamburgerButton).toBeInTheDocument();

    // 2. button에 'lg:hidden'이라는 Tailwind 클래스가 붙어 있나 확인
    // 보통 클래스 테스트는 구현 상세를 테스트하는 것이므로, 꼭 필요한 경우에만
    expect(hamburgerButton).toHaveClass("lg:hidden");
  });

  it("[Mobile]햄버거 메뉴 버튼 클릭 시 메뉴가 열리고 닫혀야 한다.", async () => {
    // 1. 처음에 오버레이(div.h-screen...)가 없는지 확인
    expect(
      screen.queryByRole("button", { name: /close/i })
    ).not.toBeInTheDocument();
    // 혹은 오버레이 컨테이너 자체를 queryByText, queryByTestId 등으로 찾을 수도 있음

    // 2. 햄버거 버튼 클릭
    const hamburgerButton = screen.getByRole("button");
    await userEvent.click(hamburgerButton);

    // 3. 메뉴가 열렸는지 (닫기 버튼 or 오버레이 요소가 존재하는지) 확인
    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();

    // 4. 닫기 버튼 클릭 → 다시 사라지는지 확인
    await userEvent.click(closeButton);
    expect(
      screen.queryByRole("button", { name: /close/i })
    ).not.toBeInTheDocument();
  });
});


/*
describe("Navigation 애니메이션 테스트", () => {

});*/