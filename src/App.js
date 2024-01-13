
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { UserDetails } from './pages/UserDetails';
import { ItemDetails } from './pages/ItemDetails';
import MyCart from './pages/MyCart';
import ItemUpload from './pages/ItemUpload';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/itemdetails/:item_id' element={<ItemDetails />} />
          <Route path='userdetails/:user_id' element={<UserDetails />} />
          <Route path='mycart' element={<MyCart />} />
          <Route path='itemupload' element={<ItemUpload />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
