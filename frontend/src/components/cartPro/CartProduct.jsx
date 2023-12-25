import "./cartProduct.css"
import {TbPlus,TbMinus} from "react-icons/tb"
import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from 'react-redux';
import {decreaseQty, deleteCart, increaseQty} from "../../../redux/productSlice"
const CartProduct = ({id,image,price,category,name,qty,total}) => {
   const dispatch = useDispatch()
  return (
    <div className='cartProd'>
    <div className="cartCont">
       <div className="cartImg">
         <img src={image} alt="imag"/>
       </div>
       <div className="cartDesc">
            <h3>{name}</h3>
            <div className="aiDelete" onClick={()=>dispatch(deleteCart(id))}>
             <AiFillDelete/>
            </div>
            <p>{category}</p>
            <p className="ptag"><span>birr : </span>{price}</p>
         <div className="btnTotal">
            <div className="CartBuy">
              <button className="btn" onClick={()=>dispatch(decreaseQty(id))}><TbMinus/></button>
               <p className="qty">{qty}</p>
              <button className="btn" onClick={()=>dispatch(increaseQty(id))}><TbPlus/></button>
           </div>
           <div className="total">
              <p>Total</p>
              <p>{total}</p>
           </div>
        </div>
         </div>
        </div>
       </div>
  )
}

export default CartProduct
