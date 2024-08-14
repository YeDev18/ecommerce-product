import { createContext, FC, ReactNode, useContext } from 'react';

type Context = {
  table: object[];
};

type Props = {
  children: ReactNode;
};
const MyCart = createContext<Context | null>(null);

const CartContext: FC<Props> = ({ children }) => {
  const table = [{}];
  return <MyCart.Provider value={{ table }}>{children}</MyCart.Provider>;
};
export default CartContext;

export const useCart = () => {
  return useContext(MyCart);
};
