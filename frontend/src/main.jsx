import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from './pages/about/About.jsx';
import Home from './pages/home/Home.jsx';
import Contact from './pages/contact/Contact.jsx';
import Menu from './pages/menu/Menu.jsx';
import Login from './pages/login/Login.jsx';
import NewProduct from './pages/newProduct/NewProduct.jsx';
import SignUp from './pages/signUp/SignUp.jsx';
import {store} from "../redux/store.js"
import { Provider } from 'react-redux';
import Cart from './pages/cart/Cart.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
       <Route index element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='contact' element={<Contact/>}/>
       {/* <Route path='menu' element={<Menu/>}/> */}
       <Route path='menu/:filterBy' element={<Menu/>}/>
       <Route path='login' element={<Login/>}/>
       <Route path='newProduct' element={<NewProduct/>}/>
       <Route path='signup' element={<SignUp/>}/>
       <Route path='cart' element={<Cart/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
      <RouterProvider router={router} />,
   </Provider>
)
