import { Suspense } from 'react';

import CarForm from '@/components/car/CarForm';
import Spinner from '@/components/ui/base/Spinner';

export default function Home() {
  return (
    <>
      <section>
        <div className="container mx-auto px-[20px] text-center">
          <h2 className="title">Select your preferable car</h2>
          <Suspense fallback={<Spinner />}>
            <CarForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
