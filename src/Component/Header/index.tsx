import { Headers } from '../../data';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/icon-cart.svg';
import profil from '../../assets/images/image-avatar.png';

const Header = () => {
  return (
    <nav className="container max-w-auto mx-auto px-8 py-6 flex  justify-between items-center gap-y-8">
      <div className="flex justify-between items-center gap-16 ">
        <div className="flex justify-center items-center">
          <img src={logo} alt="Logo Sneakers" />
        </div>

        <ul className="flex font-sans font-[100] cursor-pointer text-lg text-DarkGrayishBlue gap-12 ">
          {Headers.map((header: string, index: number) => {
            return (
              <li key={index} className="hover:text-VeryDarkBlue">
                {' '}
                {header}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex justify-center items-center gap-8 ">
        <img
          src={cart}
          alt="Le panier"
          className="w-6 hover:text-VeryDarkBlue cursor-pointer"
        />
        <img
          src={profil}
          alt="L'Avatar"
          className="w-16 border-2 rounded-full p-1 border-firstPrimary"
        />
      </div>
    </nav>
  );
};

export default Header;
