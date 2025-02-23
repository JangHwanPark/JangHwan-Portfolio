import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer 컴포넌트 테스트", () => {
  it("Footer가 정상적으로 렌더링되어야 한다", () => {
    render(<Footer />);

    // Footer의 텍스트가 화면에 표시되는지 확인
    const footerText = screen.getByText("© 2025 JangHwanPark. All Rights Reserved.");
    expect(footerText).toBeInTheDocument();
  });

  it("Footer가 올바른 스타일을 가지고 있어야 한다", () => {
    render(<Footer />);

    // Footer 요소가 'w-full py-5' 클래스를 가지고 있는지 확인
    const footerElement = screen.getByRole("contentinfo"); // `<footer>` 태그 가져오기
    expect(footerElement).toHaveClass("w-full py-5");
  });
});
