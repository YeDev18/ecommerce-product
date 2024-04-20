import { Headers } from '../../data';
// import logo from '../../assets/images/logo.svg';
// import cart from '../../assets/images/icon-cart.svg';
// import profile from '../../assets/images/image-avatar.png';
// import iconMenu from '../../assets/images/icon-menu.svg';
// import close from '../../assets/images/icon-close.svg';
import { useState } from 'react';
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <nav className="lg:container max-w-auto mx-auto h-[15vh] flex flex-col relative">
      <div>
        <div className="bg-VeryDarkBlue w-full h-[100vh] absolute opacity-85 lg:hidden"></div>
        <div className="bg-White w-3/4 h-[100vh] absolute lg:hidden flex flex-col gap-16 p-8">
          <button onClick={handleClick}>
            {/* <img src={close} alt="Fermeture" /> */}
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
        </div>
      </div>

      <div className="w-full px-8 py-6 flex justify-between">
        <div className="flex justify-between items-center gap-6 lg:gap-16 ">
          {/* <button className="lg:hidden" onClick={handleClick}>
            <img src={iconMenu} alt="Icom Menu" />
          </button> */}

          <div className="flex justify-center items-center">
            {/* <img src={logo} alt="Logo Sneakers" /> */}
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
          {/* <img
            src={cart}
            alt="Le panier"
            className="w-6 hover:text-VeryDarkBlue cursor-pointer"
          /> */}
          {/* <img
            src={profile}
            alt="L'Avatar"
            className="w-12 lg:w-16  rounded-full p-1 lg:border-2 lg:border-firstPrimary"
          /> */}
        </div>
      </div>
      <div className="border-b border-b-GrayishBlue mx-8"></div>
    </nav>
  );
};

export default Header;
