import logo from "../../assest/logo.png"
import { Link, useNavigate } from "react-router-dom"
import "./header.css"
import {  FaUserAlt } from "react-icons/fa";
import {  BsCartFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {logoutRedux} from "../../../redux/userSlice"
import toast from "react-hot-toast";
const Header = () => {
  const [showMenu,setShowMenu] = useState(false)
  const userData = useSelector((state)=>state.user)
  const dispatch = useDispatch()
   const navigate  = useNavigate()
  const handleLogout = ()=>{
    dispatch(logoutRedux())
    toast("logout successfully")
    navigate("/")
  }

  const showIt = ()=>{
    setShowMenu(prev=>!prev)
  }

  const productOnCart = useSelector(state=>state.product.addToCart)
   return (
    <div className='navbar'>
        <Link to="/">
        <div className="container">
            <img src={logo} alt="" />
        </div>
        </Link>
        <div className="user">
           <div className="userPages">
             <Link to={""}>Home</Link>
             <Link to={"about"}>About</Link>
             <Link to={"contact"}>contact</Link>
             <Link to={"menu/6580356c2ac5d66614734dce"}>menu</Link>
           </div>
            <div className="cart">
            <Link to={"cart"} className="Link">
              <BsCartFill/>
              <div className="badge">{productOnCart.length}</div>
              </Link>
            </div>
          <div className="userIcon" onClick={showIt}>
              <div className="userIconBorder">
              { userData.image ? <img src={userData.image} className="bigImg"/>  : <FaUserAlt/> }
              </div>
              {
                showMenu && <div className="newProduct">
                {
                 userData.email === import.meta.env.VITE_Admin_email && <Link to={"newProduct"} className="add">New Product</Link>
                }
                {
                 userData.firstName ? <p className="login" onClick={handleLogout}>Logout ({userData.firstName})</p> : <Link to={"login"} className="login">Login</Link>
                }
              </div>
              }
          </div>
        </div>
    </div>
  )
}

export default Header
