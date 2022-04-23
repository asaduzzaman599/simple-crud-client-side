import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import AddProduct from './Components/AddProduct/AddProduct';
import { useState } from 'react';
import UpdateProduct from './Components/UpdateProduct.js/UpdateProduct';

function App() {

  const [isReload, setIsReload] = useState(false)
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path={'/'} element={<Home reload={[isReload, setIsReload]}></Home>}>
          <Route index element={<AddProduct reload={[isReload, setIsReload]}></AddProduct>}></Route>
          <Route path='/add' element={<AddProduct reload={[isReload, setIsReload]}></AddProduct>}></Route>
          <Route path='/update/:productId' element={<UpdateProduct reload={[isReload, setIsReload]}></UpdateProduct>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
