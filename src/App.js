import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Provider from './Context/CartContext';
import Cart from './Components/Cart/Cart';
import ItemList from './Components/ItemList';
import Error404 from './views/Error404';


function App() {

  return (
    <Provider>
    <BrowserRouter>
      <Navbar/>      
      <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoria" element={<ItemList/>}/>
          <Route path="Item/detail/:id" element={<ItemDetailContainer/>}/>
          <Route path="/Cart" element={<Cart/>} />
          <Route path='*' element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
    );
}

export default App;