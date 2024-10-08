import { createContext, FC, ReactNode, useContext, useState } from 'react';

type Table = {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  percentReduce: number;
  image: string;
  images: string[];
};

type Context = {
  table: Table[];
  quantity: number;
  MinusCart: () => void;
  PlusCart: () => void;
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
  image: string;
  images: string[];
}

type Props = {
  children: ReactNode;
};
const MyCart = createContext<Context | null>(null);

const CartContext: FC<Props> = ({ children }) => {
  // const tableOne =u;
  const [quantity, setQuantity] = useState<number>(1);
  const [table, setTable] = useState<Table[]>([]);
  const AddToCart = (product: Product) => {
    !table.includes(product) && setTable([...table, product]);
  };
  const DeleteCart = (index: number) => {
    setTable(table?.filter(cart => cart?.id !== index));
  };
  const MinusCart = () => {
    quantity >= 2 && setQuantity((quantity ?? 0) - 1);
  };
  const PlusCart = () => {
    setQuantity((quantity ?? 0) + 1);
  };
  return (
    <MyCart.Provider
      value={{ table, quantity, AddToCart, DeleteCart, MinusCart, PlusCart }}
    >
      {children}
    </MyCart.Provider>
  );
};
export default CartContext;

export const useCart = () => {
  return useContext(MyCart);
};
