const F_Product = () => {
  return (
    <div className="container mx-auto hidden h-[85vh] items-center justify-between px-14">
      <div className="flex w-1/2 flex-col gap-y-4">
        <div className="size-[28rem] rounded-lg bg-SecondPrimary"></div>
        <div className="flex w-[28rem] flex-row justify-between">
          <div className="size-20 rounded-lg bg-SecondPrimary "></div>
          <div className="size-20 rounded-lg bg-SecondPrimary "></div>
          <div className="size-20 rounded-lg bg-SecondPrimary "></div>
          <div className="size-20 rounded-lg bg-SecondPrimary "></div>
        </div>
      </div>
      <div className="flex w-1/2 flex-col justify-start gap-8">
        <h4 className="text-lg font-semibold tracking-widest text-firstPrimary">
          SNEAKER COMPAGNY
        </h4>
        <h2 className="font-sans text-5xl font-bold tracking-wider text-VeryDarkBlue">
          Fall Limite
          <br /> Sneakers
        </h2>
        <p className="pr-7 text-lg font-medium leading-relaxed -tracking-tight text-DarkGrayishBlue">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex w-48 flex-row gap-4">
          <div className=" flex flex-col gap-1">
            <p className="text-3xl font-bold text-VeryDarkBlue">$125.00</p>
            <p className="text-lg font-medium text-GrayishBlue">
              <s>$250.00</s>
            </p>
          </div>
          <p className="mt-1 h-fit rounded-lg bg-SecondPrimary px-3 py-0.5 font-semibold text-firstPrimary">
            50%
          </p>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex h-14 w-[10.5rem] flex-row rounded-lg bg-LightGrayishBlue">
            <button className="w-1/3 text-firstPrimary">
              <img className="mx-auto block" src="" alt="Minus" />
            </button>
            <p className="flex  w-1/3 items-center justify-center font-semibold text-VeryDarkBlue">
              5
            </p>
            <button className="mx-auto block w-1/3 font-bold text-firstPrimary">
              <img className="mx-auto block" src="" alt="Plus" />
            </button>
          </div>
          <button className="flex h-14 w-64 items-center justify-center gap-4 rounded-lg bg-firstPrimary shadow-lg shadow-firstPrimary">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="hsl(223, 64%, 98%)"
                fill-rule="nonzero"
              />
            </svg>
            <p className="font-semibold text-LightGrayishBlue">Add Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default F_Product;
