import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import AddProduct from './Components/AddProduct/AddProduct';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path='/add' element={<AddProduct></AddProduct>}></Route>
          <Route path='/update' element={<AddProduct></AddProduct>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
