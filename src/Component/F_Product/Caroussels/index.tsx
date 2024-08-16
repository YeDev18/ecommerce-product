import { FC, useState } from 'react';
import { Close, Next, Previous } from '../../../picture';
type Carrousel = {
  data: string[];
};

const Caroussels: FC<Carrousel> = ({ data }) => {
  const [slides, setSlides] = useState<number>(0);
  const [clikProduct, setClickProduct] = useState(false);
  const nextSlide = () => {
    setSlides(slides === data.length - 1 ? 0 : slides + 1);
  };
  const prevSlide = () => {
    setSlides(slides === 0 ? data.length - 1 : slides - 1);
  };
  const handleClickProduct = (dataImages: string[]) => {
    return (
      <div className="fixed inset-0 flex size-full flex-col items-center justify-center gap-4 bg-VeryDarkBlue/40">
        <div className="flex w-[28rem] flex-col gap-4 ">
          <div className="flex w-full justify-end  text-LightGrayishBlue ">
            <Close />
          </div>
          <div className="flow-root size-full overflow-y-hidden lg:size-[28rem] lg:overflow-y-hidden lg:rounded-lg">
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
      <div className="size-full overflow-y-hidden lg:size-[28rem] lg:overflow-y-hidden lg:rounded-lg">
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
      {handleClickProduct(data)}
    </div>
  );
};

export default Caroussels;
