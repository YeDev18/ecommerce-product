import { createContext, FC, ReactNode, useContext, useState } from 'react';

type Table = {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  percentReduce: number;
};

type Context = {
  table: Table[];
  AddToCart: (product: Product) => void;
  DeleteCart: (index: number) => void;
};
interface Product {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  percentReduce: number;
}

type Props = {
  children: ReactNode;
};
const MyCart = createContext<Context | null>(null);

const CartContext: FC<Props> = ({ children }) => {
  // const tableOne =u;
  const [table, setTable] = useState<Table[]>([]);
  const AddToCart = (product: Product) => {
    setTable([...table, product]);
  };
  const DeleteCart = (index: number) => {
    setTable(table?.filter(cart => cart?.id !== index));
  };
  return (
    <MyCart.Provider value={{ table, AddToCart, DeleteCart }}>
      {children}
    </MyCart.Provider>
  );
};
export default CartContext;

export const useCart = () => {
  return useContext(MyCart);
};
