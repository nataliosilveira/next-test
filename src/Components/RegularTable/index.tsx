import { title } from 'process';
import React from 'react';

interface RegularTableProps {
  title?: string;
}

const RegularTable: React.FC<RegularTableProps> = ({ title }) => {
  return (
    <div>
      {title && <h3 className="text-xl mb-2">List of years</h3>}
      <table className="border-collapse table-auto w-full border border-slate-400">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-slate-300 text-left p-2">Year</th>
            <th className="border border-slate-300 text-left p-2">Win</th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-gray-100">
            <td className="border border-slate-300 p-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td className="border border-slate-300 p-2">Malcolm Lockyer</td>
          </tr>
          <tr className="even:bg-gray-100">
            <td className="border border-slate-300 p-2">Witchy Woman</td>
            <td className="border border-slate-300 p-2">The Eagles</td>
          </tr>
          <tr className="even:bg-gray-100">
            <td className="border border-slate-300 p-2">Shining Star</td>
            <td className="border border-slate-300 p-2">Earth, Wind, and Fire</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RegularTable;
