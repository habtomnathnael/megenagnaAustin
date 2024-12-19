import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/features/auth/Login';
import Public from './components/public/Public';
import MenuList from './components/main/menu/Index';
import ScheduleReservation from './components/main/reserv/ScheduleReservation.js'
import OrderOnline from './components/main/orderOnline/OrderOnline.js'
import About from './components/main/aboutUs/About.js'
import HoursLocation from './components/main/hoursLocation/HoursLocation.js'
import ShopOnline from './components/main/shop/ShopOnline.js'
import BackToTopButton from './components/BackToTop/BackToTop.js';
import Prefetch from './features/auth/Prefetch.js';
import ScheduleReservationForm from './components/main/reserv/ScheduleReservationForm.js';
import ConfirmationPage from './components/confirmation/ConfirmationPage.js';
import Success from './components/main/orderOnline/Success.js'
import Cancel from './components/main/orderOnline/Cancel.js'
import NewOrder from './components/main/orderOnline/NewOrder.js'

import CartProvider from './features/cartContext/CartContext.js';
import ShoppingCart from './components/main/orderOnline/ShoppingCart.js';
import Notification from './components/notifications/Notification.js';
import CheckOut from './components/main/orderOnline/CheckOut.js';
import Mentenance from './components/404_Page/Mentenance.js';
import useTitle from './features/hook/useTitle.js';


function App() {
  useTitle('Megenagna Mart & Cafe')
  return (
    <CartProvider>
      <div className="App">

        <Routes>
          <Route element={<Prefetch />}>
            <Route path='/' element={<Layout />}>
              <Route index element={<Public />} />
              <Route path='Home' element={<Public />} />
              <Route path='Menu' element={<MenuList />} />
              <Route path='BookaTable'>
                <Route index element={<ScheduleReservation />} />
                <Route path="new" element={<ScheduleReservationForm />} />
                <Route path="confirmation" element={<ConfirmationPage />} />
              </Route>
              <Route path='OnlineOrdering'>
                <Route index element={<OrderOnline />} />
                <Route path="cart" element={<NewOrder />} />
                <Route path="checkOut" element={<CheckOut />} />
                <Route path="success" element={<Success />} />
                <Route path="cancel" element={<Cancel />} />
              </Route>
              <Route path='Notifications' element={<Notification />} />
              <Route path='About' element={<About />} />
              <Route path='HoursLocations' element={< HoursLocation />} />
              <Route path='Shop' element={<ShopOnline />} />
              <Route path='login' element={<Login />} />
              <Route path='mantenance' element={<Mentenance />} />
            </Route>
          </Route>

        </Routes>
        {/* <BackToTopButton /> */}
      </div>
    </CartProvider>
  );
}

export default App;
