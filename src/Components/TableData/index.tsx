import React, { ReactNode } from 'react';

interface TableDataProps {
  children: ReactNode;
}

const TableData: React.FC<TableDataProps> = ({ children }) => {
  return <td className="border border-slate-300 p-2">{children}</td>;
};

export default TableData;
