import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Product from './pages/product/Product';
import Register from './pages/register/Register';
import ProductDetail from './pages/productDetail/ProductDetail';
import Home from './pages/home/Home';
import {AppProvider} from './AppProvider';
import CartPage from './pages/cart/CartPage';


function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productDetail/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
