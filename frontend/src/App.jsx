import Header from "./components/header/Header"
import { Outlet } from "react-router-dom"
import "./App.css"
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataProduct } from "../redux/productSlice";
function App() {
  const dispatch = useDispatch()
  const products = useSelector(state=>state.product)
  useEffect(()=>{
    (async()=>{
      const res = await fetch("http://localhost:5000/product")
       const resData = await res.json()
       dispatch(setDataProduct(resData))
    })()
  },[dispatch])
  //console.log(products)
  return (
    <>
    <Toaster/> 
    <div className='app'>
       <Header/>
       <div className="outlet">
         <Outlet/>
       </div>
    </div>
    </>
  )
}

export default App
