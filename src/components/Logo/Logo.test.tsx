import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Logo from './Logo';

describe('Logo 컴포넌트 테스트', () => {
  it('Logo 컴포넌트가 정상적으로 렌더링 되어야한다.', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    const text = screen.getByText('japark.dev');
    expect(text).toBeInTheDocument();
  });
});
