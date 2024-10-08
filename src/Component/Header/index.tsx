import { useState } from 'react';
import picture from '../../assets/images/image-avatar.png';
import { Headers } from '../../data';
import { Cart, Close, Logo, Menu } from '../../picture';
import { useCart } from '../CartContext';
import Panier from './Panier';

const Header = () => {
  const [open, setOpen] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const panier = useCart()?.table;
  const handleClick = () => {
    return setOpen(!open);
  };

  return (
    <nav className=" container relative mx-auto flex flex-col lg:h-[15vh]">
      <div>
        <div
          className={
            open
              ? 'hidden'
              : 'fixed h-screen w-full bg-VeryDarkBlue/[0.5] lg:hidden'
          }
        ></div>
        <div
          className={
            open
              ? 'hidden'
              : 'fixed  flex h-screen w-3/5 flex-col gap-16 overflow-x-hidden bg-White px-4 py-8 lg:hidden '
          }
        >
          <button onClick={handleClick}>
            <Close />
          </button>
          <ul className="flex flex-col gap-4 font-semibold">
            {Headers.map((header: string, index: number) => {
              // setActiveIndex(index);
              // console.log(activeIndex);
              return (
                <li key={index} className="w-fit cursor-pointer pr-4">
                  {header}
                </li>
              );
            })}
            {/* {activeIndex ? console.log('viva') : console.log('street')} */}
          </ul>
        </div>
      </div>
      <div className="flex w-full justify-between p-4 lg:px-8  lg:py-6">
        <div className="flex items-center justify-between gap-6  lg:gap-16 ">
          <button className="lg:hidden" onClick={handleClick}>
            {open && <Menu />}
          </button>

          <div className="flex items-center justify-center">
            <Logo />
          </div>
          <div className="relative">
            <ul className=" hidden  cursor-pointer gap-12  font-sans text-lg text-DarkGrayishBlue lg:flex ">
              {Headers.map((header: string, index: number) => {
                return (
                  <li key={index} className="header font-normal">
                    {header}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-8 ">
          <button
            data-cart-items={panier?.length || 0}
            className={`${(panier?.length || -1) >= 0 && `cart `} cursor-pointer`}
            onClick={() => setShowCart(!showCart)}
          >
            <Cart />
          </button>

          <img
            src={picture}
            alt="L'Avatar"
            className="w-12 rounded-full  p-1 lg:w-16 lg:border-2 lg:border-firstPrimary"
          />
        </div>
      </div>
      <div className=" mx-8 border-b-GrayishBlue lg:border-b"></div>
      {showCart ? <Panier /> : ''}
    </nav>
  );
};

export default Header;
