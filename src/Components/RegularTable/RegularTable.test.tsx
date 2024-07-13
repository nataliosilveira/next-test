import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegularTable from '.';

describe('RegularTable', () => {
  it('render with title', () => {
    const title = 'test title';
    render(
      <RegularTable title={title} tableTitle={['item-1', 'item-2']}>
        <div>test</div>
      </RegularTable>
    );
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });
  it('render with item titles', () => {
    const title = 'test title';
    const itemTitle = 'item-3';
    render(
      <RegularTable title={title} tableTitle={['item-1', 'item-2', itemTitle]}>
        <div>test</div>
      </RegularTable>
    );
    const itemTitleElement = screen.getByText(itemTitle);
    expect(itemTitleElement).toBeInTheDocument();
  });
  it('render children component', () => {
    const title = 'test title';
    const children = 'children item';
    render(
      <RegularTable title={title} tableTitle={['item-1', 'item-2']}>
        <div>{children}</div>
      </RegularTable>
    );
    const childrenElement = screen.getByText(children);
    expect(childrenElement).toBeInTheDocument();
  });
});
