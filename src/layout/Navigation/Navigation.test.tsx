import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { MemoryRouter } from "react-router-dom";

const navbar = [
  {href: "/skills", title: 'Skills'},
  {href: "/portfolio", title: 'Portfolio'},
];

describe("Navigation 컴포넌트 테스트", () => {
  it("Navigation 컴포넌트가 정상적으로 렌더링 되어야 한다.", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
  });

  it("Navigation의 각 항목이 `Link`로 렌더링 되어야 한다.", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    navbar.forEach((item) => {
      const linkElement = screen.getByRole("link", { name: item.title });
      expect(linkElement).toHaveAttribute("href", item.href);
    });
  });
})