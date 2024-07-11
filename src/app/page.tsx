'use client';
import RegularTable from '@/Components/RegularTable';
import CardTable from '@/Components/CardTable';
import { Search } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  year: number;
};

export default function Home() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <main className="">
      <div className="grid grid-cols-2 gap-4">
        <CardTable title="List years with multiple winners">
          <RegularTable />
        </CardTable>
        <CardTable title="Top 3 studio with winners">
          <RegularTable />
        </CardTable>
        <CardTable title="Producers with longest and shortest interval between wins">
          <RegularTable title="Maximum" />
          <div className="mb-2" />
          <RegularTable title="Minimum" />
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
                defaultValue={2024}
                {...register('year')}
              />
            </div>
            <div className="col-span-1 flex items-end">
              <button type="submit" className="bg-blue-500 p-2 rounded-md">
                <Search color="white" />
              </button>
            </div>
          </form>
          <RegularTable title="Maximum" />
        </CardTable>
      </div>
    </main>
  );
}
