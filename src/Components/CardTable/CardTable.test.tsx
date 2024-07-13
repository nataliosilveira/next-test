import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardTable from '.';

describe('CardTable', () => {
  it('renders with title', () => {
    const title = 'Test Title';
    render(<CardTable title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders children content', () => {
    const childText = 'This is a child';
    render(
      <CardTable>
        <div>{childText}</div>
      </CardTable>
    );
    const childElement = screen.getByText(childText);
    expect(childElement).toBeInTheDocument();
  });

  it('renders title and children together', () => {
    const title = 'Test Title';
    const childText = 'This is a child';
    render(
      <CardTable title={title}>
        <div>{childText}</div>
      </CardTable>
    );
    const titleElement = screen.getByText(title);
    const childElement = screen.getByText(childText);
    expect(titleElement).toBeInTheDocument();
    expect(childElement).toBeInTheDocument();
  });
});
