import React, { ReactNode } from 'react';

interface CardTableProps {
  children?: ReactNode;
  title?: string;
}

const CardTable: React.FC<CardTableProps> = ({ children, title }) => {
  return (
    <div className="border p-2">
      {title && <h2 className="font-bold text-2xl mb-2">{title}</h2>}
      {children}
    </div>
  );
};

export default CardTable;
