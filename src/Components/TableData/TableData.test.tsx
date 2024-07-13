import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableData from '.';

describe('TableData', () => {
  it('render children component', () => {
    const children = 'children text';
    render(<TableData>{children}</TableData>);
    const childrenElement = screen.getByText(children);
    expect(childrenElement).toBeInTheDocument();
  });
});
