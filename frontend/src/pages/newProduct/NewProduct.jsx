import { useState } from "react";
import { toBase64 } from "../../utility/toBase64";
import "./newProduct.css"
import { FaUpload } from "react-icons/fa6";
import { toast } from "react-hot-toast"
const NewProduct = () => {
  const [data,setData] = useState({
    name :"",
    category :"",
    image :"",
    price :"",
    description :""
  })
 
  const handleChange = (e)=>{
     e.preventDefault()
     const {name,value} = e.target
     setData((prev)=>{
      return{
       ...prev,
       [name]:value
      }
     })
  }

   const uploadImage = async (e)=>{
    const data = await toBase64(e.target.files[0])
      setData((prev)=>{
        return{
          ...prev,
          image:data
        }
      })
   }

   const handleSubmit = async (e)=>{
    e.preventDefault()
     console.log(data)

     const {name,category,image,price} = data
     if(name && category && image && price){
    const fetchRes = await fetch("http://127.0.0.1:5000/product",{
      method:"POST",
      headers:{
        "content-type" : "application/json"
      },
      body:JSON.stringify(data)
    })
    const fetchedData = await fetchRes.json()
    console.log(fetchedData)
   toast(fetchedData.message)
   setData(()=>{
    return{
      name :"",
      category :"",
      image :"",
      price :"",
      description :""
    }
   })
  }else{
    toast("please fill al the fields")
  }
}
  
  return (
    <div className="NewProduct">
       <form className="formProduct" onSubmit={handleSubmit}>
         <label htmlFor="name">Name</label>
         <input type={"text"} name="name" onChange={handleChange} value={data.name}/>
         
         <label htmlFor="category" className="category">Category</label>
         <select name="category" onChange={handleChange} value={data.category}>
          <option>select category</option>
           <option value="Fruits">Fruits</option>
           <option value="Vegetable">Vegetable</option>
           <option value="Icecream">Icecream</option>
           <option value="Dosa">Dosa</option>
           <option value="Piza">Piza</option>
           <option value="Cake">Cake</option>
           <option value="rice">rice</option>
           <option value="Burger">Burger</option>
         </select>

       <label htmlFor="imagee">image
         <div id="image" className="upload">
          {
            data.image ? <img src={data.image} alt="img" className="small"/> : <span className="icon"><FaUpload/></span>
          }
            <input type={"file"} accept="image/*" id="imagee" className="hidden" onChange={uploadImage}/>
         </div>
       </label>
         <label htmlFor="price" className="priceLabel">Price</label>
          <input type={"text"} name="price" className="price" onChange={handleChange} value={data.price}/>

          <label htmlFor="description">Description</label>
          <textarea rows="2" name="description" onChange={handleChange} value={data.description}></textarea>
          <button type="submit">Save</button>
       </form>
    </div>
  )
}

export default NewProduct
