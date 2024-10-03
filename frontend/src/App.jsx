import './App.css';
import { ProductComponent } from './components/ProductComponent';
import { CartComponent } from './components/CartComponent';



function App() {
  return (
    <div className="App">

      <h1>Gestion de Panier</h1>
      <ProductComponent />
      <CartComponent />

    </div>
  );
}

export default App;
