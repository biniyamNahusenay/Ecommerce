import "./cart.css"
import { useSelector } from 'react-redux'
import CartProduct from '../../components/cartPro/CartProduct'
import emptyImg from "../../assest/empty.gif"

const Cart = () => {
  const productOnCart = useSelector(state=>state.product.addToCart)
  const totalPrice = productOnCart.reduce((acc,cur)=>acc + parseInt(cur.total),0)
  const totalQty = productOnCart.reduce((acc,cur)=>acc + parseInt(cur.qty),0)
  return (
    <div className='cart'>
       <h2>your cart items</h2>
       { productOnCart[0] ? 
       <div className="cartCont">
         <div className="displayCart">
            { productOnCart.map(el=>{
              return(
                <CartProduct
                key={el.id}
                 id={el.id}
                image={el.image}
                price={el.price}
                category={el.category}
                name={el.name}
                qty={el.qty}
                total={el.total}
                />
                )
            })
            
            }
         </div>
         <div className="totalCart">
           <h2>Summary</h2>
           <div className="totalQuant">
             <p className="first">Total Qty:</p>
             <p className="second">{totalQty}</p>
           </div>
           <div className="totalQuant">
            <p className="first"> Total Price:</p>
            <p className="second">{totalPrice}</p>
           </div>
           <button className="payment">Payment</button>
         </div>
       </div>
    :  <>
         <div className="empty">
           <img src={emptyImg} alt="empty"/>
           <p>Empty Cart</p>
         </div>
       </>
       }
    </div>
  )
}

export default Cart
