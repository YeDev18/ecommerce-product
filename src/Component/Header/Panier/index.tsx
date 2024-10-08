import { Filter } from '../../../picture';
import { useCart } from '../../CartContext';

const Panier = () => {
  // const [tableCart, setTableCart] = useState([]);
  const panier = useCart()?.table;
  const Delete = useCart()?.DeleteCart;
  const number = useCart()?.quantity || 1;

  return (
    <div className="absolute top-[10vh] z-40 ml-2 flex h-fit min-h-64 w-[95%]  min-w-[22rem] flex-col rounded-xl bg-White shadow-lg md:ml-4 lg:right-4 lg:w-72 xl:right-0">
      <div className="border-b border-GrayishBlue">
        <h3 className="py-6 pl-8 text-lg font-semibold">Cart</h3>
      </div>
      <div className="flex items-center justify-center py-8 ">
        {panier?.length !== 0 ? (
          <div className=" flex flex-col items-center justify-center gap-6">
            {panier?.map((items, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-around gap-4"
                >
                  <div className=" size-12 rounded-lg bg-DarkGrayishBlue">
                    <img
                      src={items.image}
                      alt={items.name}
                      className="size-full rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col justify-around  ">
                    <p className="text-DarkGrayishBlue">{items.name}</p>
                    <p className=" text-DarkGrayishBlue">
                      ${items.price} X {number}
                      <span className="pl-2 font-bold text-VeryDarkBlue">
                        ${items.price * number}
                      </span>
                    </p>
                  </div>

                  <button onClick={() => Delete?.(items?.id)}>
                    <Filter />
                  </button>
                </div>
              );
            })}
            <button className="flex h-14 w-full items-center justify-center gap-4 rounded-lg bg-firstPrimary font-semibold text-White">
              Checkout
            </button>
          </div>
        ) : (
          <h4 className=" font-semibold text-DarkGrayishBlue">
            You cart is empty
          </h4>
        )}
      </div>
    </div>
  );
};

export default Panier;
