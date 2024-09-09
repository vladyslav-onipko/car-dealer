import CarItem from './CarItem';

const CarsList = ({ cars }) => {
  if (!cars.length) {
    return <p className="text-5xl text-center font-bold">No cars found</p>;
  }

  const uniqueCars = [
    ...new Map(cars.map((car) => [car.Model_ID, car])).values(),
  ];

  return (
    <ul className="flex flex-wrap" role="list">
      {uniqueCars.map((car) => (
        <li
          className="w-1/5 min-h-44 p-2 md:w-1/3 sm:w-full"
          key={car.Model_ID}
        >
          <CarItem car={car} />
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
