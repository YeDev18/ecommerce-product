import { Product } from '../../data';
import { Minus, Plus } from '../../picture';
import { useCart } from '../CartContext';
import Caroussels from './Caroussels';
const F_Product = () => {
  const panier = useCart();

  const PlusCart = () => panier?.PlusCart;

  const MinusCart = () => {
    return panier?.MinusCart;
  };
  const handleClick = (index: number) => {
    panier?.AddToCart(Product[index]);
  };
  return (
    <div className="container mx-auto flex flex-col justify-between lg:h-[85vh] lg:flex-row lg:items-center lg:gap-8 lg:px-14">
      <div className="h-[50vh] w-full lg:flex lg:w-1/2">
        <Caroussels data={Product[0].images} />
      </div>

      <div className="flex flex-col justify-start gap-4 p-4 lg:w-1/2 lg:gap-8 lg:py-0">
        <h4 className="text-sm font-semibold tracking-wide text-firstPrimary lg:text-lg lg:tracking-widest">
          {Product[0].category}
        </h4>
        <h2 className="font-sans text-3xl font-bold tracking-wider text-VeryDarkBlue lg:text-4xl">
          {Product[0].name}
        </h2>
        <p className=" text-base font-medium leading-relaxed -tracking-tight text-DarkGrayishBlue lg:pr-7 lg:text-lg">
          {Product[0].description}
        </p>
        <div className="flex w-48 flex-row gap-4">
          <div className=" flex flex-col gap-1">
            <p className="text-3xl font-bold text-VeryDarkBlue">
              $
              {(
                Product[0].price -
                (Product[0].price * Product[0].percentReduce) / 100
              ).toFixed(2)}
            </p>
            <p className="text-lg font-medium text-GrayishBlue">
              <s>{Product[0].price.toFixed(2)}</s>
            </p>
          </div>
          <p className="mt-1 h-fit rounded-lg bg-SecondPrimary px-3 py-0.5 font-semibold text-firstPrimary">
            50%
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex h-14 w-full flex-row rounded-lg bg-LightGrayishBlue lg:w-[10.5rem]">
            <button
              className="flex w-1/3 items-center justify-center text-firstPrimary"
              onClick={MinusCart()}
            >
              <Minus />
            </button>
            <p className="flex w-1/3 items-center justify-center font-semibold text-VeryDarkBlue">
              {panier?.quantity}
            </p>
            <button
              className="flex w-1/3 items-center justify-center font-bold text-firstPrimary"
              onClick={PlusCart()}
            >
              <Plus />
            </button>
          </div>
          <button
            className="flex h-14 w-full items-center justify-center gap-4 rounded-lg bg-firstPrimary shadow-lg shadow-firstPrimary lg:w-64"
            onClick={() => handleClick(0)}
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="hsl(223, 64%, 98%)"
                fill-rule="nonzero"
              />
            </svg>
            <span className="font-semibold text-LightGrayishBlue">
              Add Cart
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default F_Product;
