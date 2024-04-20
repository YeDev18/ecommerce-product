// import cart from '../../assets/images/icon-cart.svg';
import minus from '../../assets/images/icon-minus.svg';
import plus from '../../assets/images/icon-plus.svg';
const F_Product = () => {
  return (
    <div className="container mx-auto hidden justify-between items-center h-[85vh] px-14">
      <div className="flex flex-col w-1/2 gap-y-4">
        <div className="w-[28rem] h-[28rem] bg-SecondPrimary rounded-lg"></div>
        <div className="flex flex-row justify-between w-[28rem]">
          <div className="w-[5rem] h-[5rem] bg-SecondPrimary rounded-lg "></div>
          <div className="w-[5rem] h-[5rem] bg-SecondPrimary rounded-lg "></div>
          <div className="w-[5rem] h-[5rem] bg-SecondPrimary rounded-lg "></div>
          <div className="w-[5rem] h-[5rem] bg-SecondPrimary rounded-lg "></div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 justify-start gap-8">
        <h4 className="font-semibold text-firstPrimary tracking-widest text-lg">
          SNEAKER COMPAGNY
        </h4>
        <h2 className="text-5xl font-bold tracking-wider font-sans text-VeryDarkBlue">
          Fall Limite
          <br /> Sneakers
        </h2>
        <p className="text-DarkGrayishBlue text-lg -tracking-tight leading-relaxed pr-7 font-medium">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex flex-row gap-4 w-[12rem]">
          <div className=" flex flex-col gap-1">
            <p className="font-bold text-3xl text-VeryDarkBlue">$125.00</p>
            <p className="font-medium text-GrayishBlue text-lg">
              <s>$250.00</s>
            </p>
          </div>
          <p className="bg-SecondPrimary text-firstPrimary font-semibold h-fit py-0.5 px-3 mt-1 rounded-lg">
            50%
          </p>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex flex-row w-[10.5rem] h-[3.5rem] bg-LightGrayishBlue rounded-lg">
            <button className="w-1/3 text-firstPrimary">
              <img className="block mx-auto" src={minus} alt="Minus" />
            </button>
            <p className="w-1/3  flex justify-center items-center text-VeryDarkBlue font-semibold">
              5
            </p>
            <button className="w-1/3 text-firstPrimary font-bold block mx-auto">
              <img className="block mx-auto" src={plus} alt="Plus" />
            </button>
          </div>
          <button className="w-[16rem] h-[3.5rem] bg-firstPrimary flex justify-center items-center gap-4 rounded-lg shadow-lg shadow-firstPrimary">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="hsl(223, 64%, 98%)"
                fill-rule="nonzero"
              />
            </svg>
            <p className="text-LightGrayishBlue font-semibold">Add Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default F_Product;
