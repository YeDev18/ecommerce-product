import { FC, useState } from 'react';
import { Next, Previous } from '../../../picture';
type Carrousel = {
  data: string[];
};
const Caroussels: FC<Carrousel> = ({ data }) => {
  const [slides, setSlides] = useState<number>(0);
  const nextSlide = () => {
    setSlides(slides === data.length - 1 ? 0 : slides + 1);
  };
  const prevSlide = () => {
    setSlides(slides === 0 ? data.length - 1 : slides - 1);
  };

  return (
    <div className="relative size-full flex-col gap-y-4 lg:flex">
      <div className="absolute inset-2/4 flex w-full -translate-x-2/4 items-center justify-between px-4 lg:hidden">
        <Previous onClick={prevSlide} />
        <Next onClick={nextSlide} />
      </div>
      <div className="size-full overflow-y-hidden rounded-lg lg:size-[28rem] lg:overflow-y-hidden">
        {data.map((items, index) => {
          return (
            <img
              key={index}
              src={items}
              alt="imgages"
              className={
                slides === index ? 'flex aspect-square w-full' : 'hidden'
              }
            />
          );
        })}
      </div>
      <div className="hidden w-[28rem] flex-row justify-between lg:flex">
        {data.map((items, index) => {
          return (
            <div
              className="size-20 overflow-hidden rounded-lg bg-SecondPrimary "
              key={index}
            >
              <img
                key={index}
                src={items}
                alt="imgages"
                className={'flex w-full'}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Caroussels;
