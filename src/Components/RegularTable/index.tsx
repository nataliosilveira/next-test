import React, { ReactNode } from 'react';

interface RegularTableProps {
  title?: string;
  tableTitle: string[];
  children: ReactNode;
}

const RegularTable: React.FC<RegularTableProps> = ({ title, children, tableTitle }) => {
  return (
    <div>
      {title && <h3 className="text-xl mb-2">List of years</h3>}
      <table className="border-collapse table-auto w-full border border-slate-400">
        <thead className="bg-gray-200">
          <tr>
            {tableTitle.map((field) => (
              <th className="border border-slate-300 text-left p-2" key={field}>
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default RegularTable;
