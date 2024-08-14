import './App.css';
import CartContext from './Component/CartContext';
import Home from './Page/Home';

function App() {
  return (
    <CartContext>
      <Home />
    </CartContext>
  );
}

export default App;
