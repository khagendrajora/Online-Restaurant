
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { UserDetails } from './pages/UserDetails';
import { ItemDetails } from './pages/ItemDetails';
import MyCart from './pages/MyCart';
import EmailVerify from './auth/EmailVerify';
import { ForgetPasswort } from './pages/ForgetPasswort';
import { ResetPassword } from './auth/ResetPassword';
import { Admin } from './admin/Admin';
import { OrderList } from './admin/OrderList';
import Layouts from './components/Layouts';
import ItemUpload from './pages/ItemUpload';
import { ItemList } from './admin/ItemList';
import UpdateItem from './admin/UpdateItem';
import { Helmet } from 'react-helmet';
import { CheckOut } from './pages/CheckOut';
import ConfirmOrder from './pages/ConfirmOrder';






function App() {
  return (
    <>
      <Helmet>
        <title>Online Food Ordering App</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Layouts />} >
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgetpassword' element={<ForgetPasswort />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='email/confirmation/:token' element={<EmailVerify />} />
            <Route path='/itemdetails/:item_id' element={<ItemDetails />} />
            <Route path='userdetails/:user_id' element={<UserDetails />} />
            <Route path='mycart' element={<MyCart />} />

            <Route path='resetpassword/:token' element={<ResetPassword />} />
            <Route path='admin' element={<Admin />} />
            <Route path='admin/orderlist' element={<OrderList />} />
            <Route path='admin/itemupload' element={<ItemUpload />} />
            <Route path='admin/itemlist' element={<ItemList />} />
            <Route path='admin/itemupdate/:itemId' element={<UpdateItem />} />
            <Route path='checkout' element={<CheckOut />} />
            <Route path='confirmorder' element={<ConfirmOrder />} />
            {/* <Route path='admin' element={<Admin />} /> */}
          </Route>

          {/* 
          <Route path='admin/' element={<Admin />} >
            <Route path='orderlist' element={<OrderList />} />
            <Route path='itemupload' element={<ItemUpload />} />
          </Route> */}



        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
