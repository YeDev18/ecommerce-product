import { FC, useState } from 'react';
import { CloseGood, Next, Previous } from '../../../picture';
type Carrousel = {
  data: string[];
};

const Caroussels: FC<Carrousel> = ({ data }) => {
  const [slides, setSlides] = useState<number>(0);
  const [clikProduct, setClickProduct] = useState<boolean>(false);
  const nextSlide = () => {
    setSlides(slides === data.length - 1 ? 0 : slides + 1);
  };
  const prevSlide = () => {
    setSlides(slides === 0 ? data.length - 1 : slides - 1);
  };
  const handleClickProduct = (dataImages: string[]) => {
    return (
      <div className="fixed inset-0 hidden size-full flex-col items-center justify-center gap-4 lg:flex">
        <div
          className="absolute z-0 size-full bg-VeryDarkBlue/40"
          onClick={() => setClickProduct(false)}
        ></div>
        <div className="absolute z-0 flex w-[30rem] flex-col gap-4">
          <button
            className="flex w-full justify-end  text-LightGrayishBlue"
            onClick={() => setClickProduct(false)}
          >
            <CloseGood />
          </button>
          <div className="flow-root size-full overflow-y-hidden lg:size-[30rem] lg:overflow-y-hidden lg:rounded-lg">
            <div className=" absolute inset-2/4 flex w-[105%] -translate-x-2/4 items-center justify-between ">
              <Previous onClick={prevSlide} />
              <Next onClick={nextSlide} />
            </div>
            {dataImages.map((items, index) => {
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
          <div className="hidden w-[30rem] flex-row justify-between lg:flex">
            {data.map((items, index) => {
              return (
                <button
                  className={`size-20 overflow-hidden rounded-lg   ${slides === index && 'border-2 border-firstPrimary'} relative`}
                  key={index}
                  onClick={() => setSlides(index)}
                >
                  <div
                    className={`absolute size-20 bg-White opacity-50 ${slides === index ? 'opacity-50' : 'opacity-0'}`}
                  ></div>
                  <img src={items} alt="imgages" className={'flex w-full'} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative size-full flex-col gap-y-4 lg:flex">
      <div className="absolute inset-2/4 flex w-full -translate-x-2/4 items-center justify-between px-4 lg:hidden">
        <Previous onClick={prevSlide} />
        <Next onClick={nextSlide} />
      </div>
      <div
        className="size-full overflow-y-hidden lg:size-[28rem] lg:overflow-y-hidden lg:rounded-lg"
        onClick={() => setClickProduct(true)}
      >
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
            <button
              className={`size-20 overflow-hidden rounded-lg   ${slides === index && 'border-2 border-firstPrimary'} relative`}
              key={index}
              onClick={() => setSlides(index)}
            >
              <div
                className={`absolute size-20 bg-White opacity-50 ${slides === index ? 'opacity-50' : 'opacity-0'}`}
              ></div>
              <img src={items} alt="imgages" className={'flex w-full'} />
            </button>
          );
        })}
      </div>
      {clikProduct && handleClickProduct(data)}
    </div>
  );
};

export default Caroussels;
