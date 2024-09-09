import CarSelect from './CarSelect';

import { getCarModels } from '@/lib/http';

const CarForm = async () => {
  const { Results: carModels } = await getCarModels();

  return (
    <div
      className="
          flex flex-col items-center justify-center 
          p-[20px] border-cyan-900 border-2 rounded-md max-w-[750px] 
          mx-auto shadow-md shadow-cyan-800
        "
    >
      <CarSelect carModels={carModels} />
    </div>
  );
};

export default CarForm;
