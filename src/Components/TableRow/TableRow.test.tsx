import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableRow from '.';

describe('TableRow', () => {
  it('render children element', () => {
    const children = 'children item';
    render(
      <TableRow>
        <p>{children}</p>
      </TableRow>
    );
    const childrenElement = screen.getByText(children);
    expect(childrenElement).toBeInTheDocument();
  });
});
