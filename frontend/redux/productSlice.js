import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast"

const initialState = {
    productList : [],
    addToCart:[]
}

export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        setDataProduct:(state,action)=>{
            state.productList = action.payload
        },
        addToCart:(state,action)=>{
            const check = state.addToCart.some(el=>el.id === action.payload.id)
            if(check){
                toast("the item is alread in the cart")
            }else{
             const total = action.payload.price
             state.addToCart = [...state.addToCart,{...action.payload,qty:1,total:total}]
             toast("item added success")
            }
        },
        deleteCart:(state,action)=>{
          const index = state.addToCart.findIndex(el=>el.id === action.payload)
          state.addToCart.splice(index,1)
          toast("one item delted")
        },
        increaseQty:(state,action)=>{
          const index = state.addToCart.findIndex(el=>el.id === action.payload)
          let qty = state.addToCart[index].qty
          const qtyInc = ++qty
          state.addToCart[index].qty = qtyInc

          const price = state.addToCart[index].price
          const total = price * qtyInc
          state.addToCart[index].total = total
        },
        decreaseQty:(state,action)=>{
            const index = state.addToCart.findIndex(el=>el.id === action.payload)
            let qty = state.addToCart[index].qty
            if(qty>1){
                const qtyDec = --qty 
                state.addToCart[index].qty = qtyDec
                
                const price = state.addToCart[index].price
                const total = price * qtyDec
                state.addToCart[index].total = total
            }
        }
    }
})

export const {setDataProduct,addToCart,deleteCart,increaseQty,decreaseQty} = productSlice.actions
export default productSlice.reducer