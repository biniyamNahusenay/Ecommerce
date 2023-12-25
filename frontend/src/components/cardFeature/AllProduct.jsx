import React, { useEffect, useState } from 'react'
import FilterProduct from '../FilterProduct/FilterProduct'
import CardFeature from './CardFeature'
import "../../pages/home/home.css"
import { useSelector } from 'react-redux'

const AllProduct = ({heading}) => {
    const product = useSelector((state)=>state.product.productList)
    const categoryList = [...new Set(product.map(el=>el.category))]

    //filter
    const [dataFilter,setDataFilter] = useState([])
    
    useEffect(()=>{
      setDataFilter(product)
    },[product])
 
    const handleFilter = (category)=>{
     const filtered = product.filter(el=>el.category.toLowerCase() === category.toLowerCase())
     setDataFilter(()=>{
       return[
          ...filtered
       ]
     })
    }
  return (
    <div className="YourProduct">
    <h2>{heading}</h2>
    <div className="knife">
      {
        categoryList[0] && categoryList.map(el=>{
          return(
            <FilterProduct category={el} onClick={()=>handleFilter(el)}/>
          )
        })
      }
    </div>
    <div className="">
    <div className="filteredProo">  
       {
        dataFilter.map((el,index)=>{
          return(
           <CardFeature
            key={el._id}
            id={el._id}
            image={el.image}
            price={el.price}
            category={el.category}
            name={el.name}
          />
          )
        })
      }
    </div>
      </div>
  </div>
  )
}

export default AllProduct
