'use client';

import { useState } from 'react';
import Link from 'next/link';

import Select from '../ui/form/select/Select';
import { CARS_YEARS } from '@/helpers/constants/car';
import ErrorBlock from '../ui/base/ErrorBlock';

const CarSelect = ({ carModels }) => {
  const [car, setCar] = useState({ model: null, year: null });

  let selectOptions;

  if (!carModels) {
    return <ErrorBlock />;
  }

  if (carModels.lenght) {
    selectOptions = <option>no cars found</option>;
  } else {
    selectOptions = carModels.map((car) => (
      <option key={car.MakeId} value={car.MakeId}>
        {car.MakeName}
      </option>
    ));
  }

  const disabledLink = !car.id && !car.year ? true : false;

  const onSelectCar = ({ target }) => {
    setCar((prevCar) => {
      return { ...prevCar, [target.id]: target.value };
    });
  };

  return (
    <>
      <div className="flex sm:flex-col sm:w-full">
        <Select id="model" label="Choose car model" onSelect={onSelectCar}>
          <option value="">not selected</option>
          {selectOptions}
        </Select>
        <Select id="year" label="Choose car year" onSelect={onSelectCar}>
          <option value="">not selected</option>
          {CARS_YEARS.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </div>
      <div className="mt-10">
        <Link
          className="button"
          aria-disabled={disabledLink}
          href={`result/${car.model}/${car.year}`}
        >
          Next
        </Link>
      </div>
    </>
  );
};

export default CarSelect;
