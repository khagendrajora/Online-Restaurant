
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { UserDetails } from './pages/UserDetails';
import { ItemDetails } from './pages/ItemDetails';
import MyCart from './pages/MyCart';
import ItemUpload from './pages/ItemUpload';
import EmailVerify from './auth/EmailVerify';
import { ForgetPasswort } from './pages/ForgetPasswort';
import { ResetPassword } from './auth/ResetPassword';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgetpassword' element={<ForgetPasswort />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='email/confirmation/:token' element={<EmailVerify />} />
          <Route path='/itemdetails/:item_id' element={<ItemDetails />} />
          <Route path='userdetails/:user_id' element={<UserDetails />} />
          <Route path='mycart' element={<MyCart />} />
          <Route path='itemupload' element={<ItemUpload />} />
          <Route path='resetpassword/:token' element={<ResetPassword />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
