import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer 컴포넌트 테스트", () => {
  it("Footer가 정상적으로 렌더링되어야 한다", () => {
    render(<Footer />);
    // DOM을 출력해보기
    screen.debug();

    // footer 태그 → role="contentinfo"로 접근
    const footerEl = screen.getByRole("contentinfo");

    // Footer의 전체 텍스트가 원하는 문구를 포함하는지 확인
    expect(footerEl).toHaveTextContent("© 2025 JangHwanPark. All Rights Reserved.");
  });

  it("Footer가 올바른 스타일을 가지고 있어야 한다", () => {
    render(<Footer />);

    // Footer 요소가 'w-full py-5' 클래스를 가지고 있는지 확인
    const footerElement = screen.getByRole("contentinfo"); // `<footer>` 태그 가져오기
    expect(footerElement).toHaveClass("w-full py-5");
  });
});