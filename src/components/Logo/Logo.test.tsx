import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Logo from "./Logo";
import { MemoryRouter } from "react-router-dom";

describe('Logo 컴포넌트 테스트', () => {
  it('Logo 컴포넌트가 정상적으로 렌더링 되어야한다.', () => {
    render(
      <MemoryRouter>
        <Logo/>
      </MemoryRouter>
    );

    const text = screen.getByText("japark.dev");
    expect(text).toBeInTheDocument();
  })
})