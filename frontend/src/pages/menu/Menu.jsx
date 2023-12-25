import { useParams } from "react-router-dom"
import "./menu.css"
import { useDispatch, useSelector } from "react-redux"
import AllProduct from "../../components/cardFeature/AllProduct"
import { addToCart } from "../../../redux/productSlice"

const Menu = () => {
  const {filterBy} = useParams()
   const productData = useSelector(state=>state.product.productList)
   const productDisplay = productData.filter(el=> el._id === filterBy)[0]
   
   const dispatch = useDispatch()

   const handle = (e)=>{
    e.stopPropagation()
    dispatch(addToCart(productDisplay))
  }
  return (
    <>
       <div className="menuCont">
         <div className="menuImg">
           <img src={productDisplay.image} alt="" />
         </div>
         <div className="menuDesc">
            <h3>{productDisplay.name}</h3>
            <p>{productDisplay.category}</p>
            <p className="ptag"><span>birr : </span>{productDisplay.price}</p>
            <div className="CartBuy">
              <button className="btn" onClick={handle}>Add Cart</button>
              <button className="btn">Buy</button>
            </div>
            <div className="description">
              <p>Description:</p>
              <p>{productDisplay.description}</p>
            </div>
         </div>
       </div>
       <AllProduct heading={"Related Products"}/>
    </>
  )
}

export default Menu
