import { Filter } from '../../../picture';
import { useCart } from '../../CartContext';

const Panier = () => {
  // const [tableCart, setTableCart] = useState([]);
  const panier = useCart()?.table;
  console.log(panier);

  return (
    <div className="absolute top-[10vh] ml-2 flex h-fit w-[95%]  min-w-[22rem] flex-col rounded-xl bg-White shadow-lg md:ml-4 lg:right-4 lg:w-72 xl:right-0">
      <div className="border-b border-GrayishBlue">
        <h3 className="py-6 pl-2 text-lg font-semibold">Cart</h3>
      </div>
      <div className="flex items-center justify-center py-8">
        <div className=" flex flex-col items-center justify-center gap-6">
          <div className="flex items-center justify-around gap-4">
            <div className=" size-12 rounded-lg bg-DarkGrayishBlue"></div>
            <div className="flex flex-col justify-around  ">
              <p className="text-DarkGrayishBlue">
                Fall Limited Edition Sneakers
              </p>
              <p className="text-DarkGrayishBlue">
                $125.00 x 3{' '}
                <span className="font-bold text-VeryDarkBlue">$375.00</span>
              </p>
            </div>

            <button>
              <Filter />
            </button>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className=" size-12 rounded-lg bg-DarkGrayishBlue"></div>
            <div className="flex flex-col justify-around  ">
              <p className="text-DarkGrayishBlue">
                Fall Limited Edition Sneakers
              </p>
              <p className="text-DarkGrayishBlue">
                $125.00 x 3{' '}
                <span className="font-bold text-VeryDarkBlue">$375.00</span>
              </p>
            </div>

            <button>
              <Filter />
            </button>
          </div>
          <button className="flex h-14 w-full items-center justify-center gap-4 rounded-lg bg-firstPrimary font-semibold text-White">
            Checkout
          </button>
        </div>
        <h4 className="hidden font-semibold text-DarkGrayishBlue">
          You cart is empty
        </h4>
      </div>
    </div>
  );
};

export default Panier;
