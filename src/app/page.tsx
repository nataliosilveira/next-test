'use client';
import RegularTable from '@/Components/RegularTable';
import CardTable from '@/Components/CardTable';
import { Search } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';
import TableRow from '@/Components/TableRow';
import TableData from '@/Components/TableData';

type Inputs = {
  year: number;
};

interface YearWinnerCount {
  year: number;
  winnerCount: number;
}

interface YearsData {
  years: YearWinnerCount[];
}

type Studio = {
  name: string;
  winCount: number;
};

type StudiosData = {
  studios: Studio[];
};

interface WinInterval {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}

interface IntervalData {
  min: WinInterval[];
  max: WinInterval[];
}

type Movie = {
  id: number;
  year: number;
  title: string;
  studios: string[];
  producers: string[];
  winner: boolean;
};

export default function Home() {
  const { register, handleSubmit } = useForm<Inputs>();
  const [winners, setWinners] = useState<YearsData>({ years: [] });
  const [topThree, setTopThree] = useState<StudiosData>({ studios: [] });
  const [intervals, setIntervals] = useState<IntervalData>({ min: [], max: [] });
  const [byYear, setByYear] = useState<Movie[]>([]);

  const getMultipleWinners = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/multipleWinners');
      setWinners(await response.json());
    } catch (error) {
      setWinners({ years: [] });
    }
  };
  const getTopThree = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/topThreeWinners');
      setTopThree(await response.json());
    } catch (error) {
      setTopThree({ studios: [] });
    }
  };
  const getIntervals = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/intervals');
      setIntervals(await response.json());
    } catch (error) {
      setIntervals({ min: [], max: [] });
    }
  };
  const getByYear = async (year: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/winnerByYear?year=${year}`);
      setByYear(await response.json());
    } catch (error) {
      setByYear([]);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    getByYear(data.year);
  };

  useEffect(() => {
    getMultipleWinners();
    getTopThree();
    getIntervals();
    getByYear(new Date().getFullYear());
  }, []);

  return (
    <main className="">
      <div className="grid grid-cols-2 gap-4">
        <CardTable title="List years with multiple winners">
          <RegularTable tableTitle={['year', 'win count']}>
            {winners.years.map((field) => (
              <TableRow key={field.year}>
                <TableData>{field.year}</TableData>
                <TableData>{field.winnerCount}</TableData>
              </TableRow>
            ))}
          </RegularTable>
        </CardTable>
        <CardTable title="Top 3 studio with winners">
          <RegularTable tableTitle={['name', 'Win count']}>
            {topThree.studios.slice(0, 3).map((field) => (
              <TableRow key={field.name}>
                <TableData>{field.name}</TableData>
                <TableData>{field.winCount}</TableData>
              </TableRow>
            ))}
          </RegularTable>
        </CardTable>
        <CardTable title="Producers with longest and shortest interval between wins">
          <RegularTable title="Maximum" tableTitle={['Producer', 'Interval', 'Previous year', 'following year']}>
            {intervals?.max.map((field) => (
              <TableRow key={field.producer}>
                <TableData>{field.producer}</TableData>
                <TableData>{field.interval}</TableData>
                <TableData>{field.previousWin}</TableData>
                <TableData>{field.followingWin}</TableData>
              </TableRow>
            ))}
          </RegularTable>
          <div className="mb-2" />
          <RegularTable title="Minimum" tableTitle={['Producer', 'Interval', 'Previous year', 'following year']}>
            {intervals?.min.map((field) => (
              <TableRow key={field.producer}>
                <TableData>{field.producer}</TableData>
                <TableData>{field.interval}</TableData>
                <TableData>{field.previousWin}</TableData>
                <TableData>{field.followingWin}</TableData>
              </TableRow>
            ))}
          </RegularTable>
        </CardTable>
        <CardTable title="List movie winners by year">
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-10 mb-3 gap-4">
            <div className="col-span-9">
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <input
                type="number"
                id="year"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                min="0"
                max="3000"
                step="1"
                defaultValue={new Date().getFullYear()}
                {...register('year')}
              />
            </div>
            <div className="col-span-1 flex items-end">
              <button type="submit" className="bg-blue-500 p-2 rounded-md">
                <Search color="white" />
              </button>
            </div>
          </form>
          <RegularTable title="Maximum" tableTitle={['id', 'Year', 'Title']}>
            {byYear.map((field) => (
              <TableRow key={field.id}>
                <TableData>{field.id}</TableData>
                <TableData>{field.year}</TableData>
                <TableData>{field.title}</TableData>
              </TableRow>
            ))}
          </RegularTable>
        </CardTable>
      </div>
    </main>
  );
}
