import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import CarsList from '@/components/car/CarsList';
import Spinner from '@/components/ui/base/Spinner';
import ErrorBlock from '@/components/ui/base/ErrorBlock';

import { getCarModels, getCars } from '@/lib/http';
import { CARS_YEARS } from '@/helpers/constants/car';

export async function generateStaticParams() {
  const { Results: carModels } = await getCarModels();

  if (!carModels) {
    notFound();
  }

  if (!carModels.length) {
    return [{ filter: [] }];
  }

  const paths = carModels.flatMap((car) =>
    CARS_YEARS.map((year) => {
      return {
        filter: [String(car.MakeId), String(year)],
      };
    })
  );

  return paths;
}

const CarsItems = async ({ carId, carYear }) => {
  const { Results: cars } = await getCars(carId, carYear);
  if (!cars) {
    return <ErrorBlock />;
  }
  return <CarsList cars={cars} />;
};

const FilteredCarsPage = async ({ params }) => {
  const {
    filter: [carId, carYear],
  } = params;

  return (
    <section>
      <div className="container mx-auto px-[20px] text-center">
        <h2 className="title">Filtered cars</h2>
        <Suspense fallback={<Spinner />}>
          <CarsItems carId={carId} carYear={carYear} />
        </Suspense>
      </div>
    </section>
  );
};

export default FilteredCarsPage;
