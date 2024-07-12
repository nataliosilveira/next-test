import React, { ReactNode } from 'react';

interface TableRowProps {
  children: ReactNode;
}
const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <tr className="even:bg-gray-100">{children}</tr>;
};

export default TableRow;
