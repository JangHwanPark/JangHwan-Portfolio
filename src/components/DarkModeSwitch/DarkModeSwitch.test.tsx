import { MemoryRouter } from 'react-router-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { RootLayout } from '../../layout';
import { ThemeProvider } from '../../providers/ThemeProvider';
import DarkModeSwitch from './DarkModeSwitch';

describe('DarkModeSwitch 컴포넌트 테스트', () => {
  it('초기 테마는 라이트 모드여야 한다.', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <RootLayout />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(document.documentElement.dataset.theme).toBe('light');
  });

  it('초기 컴포넌트 아이콘이 정상적으로 렌더링 되어야 한다.', () => {
    render(
      <ThemeProvider>
        <DarkModeSwitch />
      </ThemeProvider>
    );
    // 초기 값은 "light"이므로 LightMode 아이콘이 존재해야 함
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('버튼 클릭시 테마가 변경되어야 한다.', () => {
    render(
      <ThemeProvider>
        <DarkModeSwitch />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');

    // 1. 초기 테마 확인
    expect(document.documentElement.dataset.theme).toBe('light');

    // 2. light 버튼 → 클릭 후 dark 로 변경 확인
    fireEvent.click(button);
    expect(document.documentElement.dataset.theme).toBe('dark');

    // 3. dark 버튼 → 클릭 후 light 로 변경 확인
    fireEvent.click(button);
    expect(document.documentElement.dataset.theme).toBe('light');
  });
});
