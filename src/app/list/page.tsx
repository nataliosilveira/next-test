'use client';
import { useForm } from 'react-hook-form';
import CardTable from '@/Components/CardTable';
import TableRow from '@/Components/TableRow';
import TableData from '@/Components/TableData';
import queryString from 'query-string';
import { useEffect, useState } from 'react';

type Inputs = {
  year: number;
  winner: string;
};

interface Movie {
  id: number;
  year: number;
  title: string;
  studios: string[];
  producers: string[];
  winner: boolean;
}

interface SortInfo {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
}

interface Pageable {
  sort: SortInfo;
  offset: number;
  pageSize: number;
  pageNumber: number;
  paged: boolean;
  unpaged: boolean;
}

interface MovieResponse {
  content: Movie[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: SortInfo;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export default function List() {
  const { register, watch } = useForm<Inputs>();
  const years = watch('year');
  const winner = watch('winner');
  const [actualPage, setPage] = useState(0);
  const [movies, setMovies] = useState<MovieResponse>();

  const getdata = async (year: number, winner: string, page: number) => {
    try {
      const result = queryString.stringifyUrl({
        url: 'http://localhost:3000/api/listOfMovies',
        query: { year: year, winner: winner, page: page },
      });
      const response: MovieResponse = await (await fetch(result)).json();
      if (actualPage > response.totalPages) {
        setPage(0);
      }
      setMovies(response);
    } catch (error) {}
  };

  useEffect(() => {
    getdata(years, winner, actualPage);
  }, [years, winner, actualPage]);

  return (
    <main>
      <form>
        <CardTable>
          <div>
            <h3 className="text-xl mb-2">List of movies</h3>
            <table className="border-collapse table-auto w-full border border-slate-400">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-slate-300 text-center p-2">Id</th>
                  <th className="border border-slate-300 text-center p-2">
                    <span>Year</span>
                    <input
                      type="number"
                      id="year"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      min="0"
                      max="3000"
                      step="1"
                      {...register('year')}
                    />
                  </th>
                  <th className="border border-slate-300 text-center p-2">Title</th>
                  <th className="border border-slate-300 text-center p-2">
                    <span>Winner</span>
                    <select
                      id="winner"
                      {...register('winner')}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value=""></option>
                      <option value="true">yes</option>
                      <option value="false">no</option>
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody>
                {movies?.content.length &&
                  movies?.content.map((field) => (
                    <TableRow key={field.id}>
                      <TableData>{field.id}</TableData>
                      <TableData>{field.year}</TableData>
                      <TableData>{field.title}</TableData>
                      <TableData>{field.winner ? 'yes' : 'no'}</TableData>
                    </TableRow>
                  ))}
              </tbody>
            </table>
          </div>

          <nav className="flex items-cente justify-center mt-4">
            <ul className="inline-flex -space-x-px text-sm">
              <li>
                <button
                  onClick={() => {
                    if (actualPage > 0) {
                      setPage(actualPage - 1);
                    }
                  }}
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </button>
              </li>
              {movies?.totalPages &&
                Array.from({ length: movies.totalPages }, (_, i) => i + 1).map((page) => (
                  <li key={page}>
                    <a
                      onClick={() => {
                        setPage(page - 1);
                      }}
                      href="#"
                      className={
                        actualPage + 1 === page
                          ? 'flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                          : 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                      }
                    >
                      {page}
                    </a>
                  </li>
                ))}

              <li>
                <a
                  onClick={() => {
                    setPage(actualPage + 1);
                  }}
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </CardTable>
      </form>
    </main>
  );
}
