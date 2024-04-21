import { Headers } from '../../data';
import { Close, Menu, Logo, Cart } from '../../picture';
import picture from '../../assets/images/image-avatar.png';
import { useState } from 'react';
const Header = () => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    return setOpen(!open);
  };
  return (
    console.log(open),
    (
      <nav className="lg:container max-w-auto mx-auto h-[15vh] flex flex-col relative">
        <div>
          <div
            className={
              !open
                ? 'bg-[#000] w-full h-screen fixed opacity-0 lg:hidden'
                : 'hidden'
            }
          ></div>
          {/* <div className="bg-White w-[75%] overflow-x-hidden h-[100vh] fixed left-[0rem] lg:hidden flex flex-col gap-16 px-8 py-10 active:left-0 ">
            <button onClick={handleClick}>
              <Close />
            </button>
            <ul className="flex flex-col font-semibold gap-4">
              {Headers.map((header: string, index: number) => {
                return (
                  <li key={index} className="w-fit pr-4 cursor-pointer">
                    {header}
                  </li>
                );
              })}
            </ul>
          </div> */}
        </div>
        <div className="w-full px-8 py-6 flex justify-between">
          <div className="flex justify-between items-center gap-6 lg:gap-16 ">
            <button className="lg:hidden" onClick={handleClick}>
              {open ? <Menu /> : <Close />}
            </button>

            <div className="flex justify-center items-center">
              <Logo />
            </div>

            <ul className="hidden lg:flex font-sans font-[100] cursor-pointer text-lg text-DarkGrayishBlue gap-12 ">
              {Headers.map((header: string, index: number) => {
                return (
                  <li
                    key={index}
                    className=" font-normal hover:text-VeryDarkBlue"
                  >
                    {' '}
                    {header}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-4 md:gap-8 ">
            <Cart />
            <img
              src={picture}
              alt="L'Avatar"
              className="w-12 lg:w-16  rounded-full p-1 lg:border-2 lg:border-firstPrimary"
            />
          </div>
        </div>
        <div className=" lg:border-b border-b-GrayishBlue mx-8"></div>
      </nav>
    )
  );
};

export default Header;
