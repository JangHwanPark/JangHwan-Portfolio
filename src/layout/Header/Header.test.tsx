import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import { ScrollProvider } from "../../providers/ScrollProvider";
import { ThemeProvider } from "../../providers/ThemeProvider";

describe("Header 스냅샷 테스트", () => {
  it("Header 레이아웃이 변경되지 않아야 한다.", () => {
    const { container } = render(
      <MemoryRouter>
        <ThemeProvider>
          <ScrollProvider>
            <Header />
          </ScrollProvider>
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});