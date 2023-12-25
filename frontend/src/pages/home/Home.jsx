import { useSelector } from "react-redux"
import HomeCard from "../../components/homeCard/HomeCard"
import "./home.css"
import CardFeature from "../../components/cardFeature/CardFeature"
import {GrNext, GrPrevious} from "react-icons/gr"
import { useEffect, useRef, useState } from "react"
import AllProduct from "../../components/cardFeature/AllProduct"
const Home = () => {
   const product = useSelector((state)=>state.product.productList)
   const productCartList = product.slice(0,4)
   const productVegetabel = product.filter(el=>el.category === "Vegetable",[])
  
   const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };

  
   return (
    <div className="homeCont">
       <div className="home">

       <div className="homeLeft">
        <div className="bike">
          <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="bikeImg"
            />   
            <p className="deliver">bike delivery</p>    
         </div>
         <h2>The fastest <br /> delivery in <span className="spanHome">Your <br /> Home</span></h2>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Fugiat odit corrupti  optioillum vitae
            praesentium. Illum corrupti do lorummollitia earum veniam fuga,
          voluptate molestias repellat, nobis obcaecati sunt? Excepturi, voluptatum.</p>
          <button className="order">Order Now</button>
       </div>
       <div className="homeRight">
        {
          productCartList.map((el)=>{
            return(
              <HomeCard 
               key= {el._id}
               id={el._id}
               image={el.image}
               name={el.name}
               price={el.price}
               category={el.category}
              />
            )
          })
        }
       </div>
    </div>
      <div className="feature">
        <h2>Fresh Vegetables</h2>
        <div className="IconsLeft">
         <button className="btnSecond" onClick={nextProduct}><GrPrevious className="previous"/></button>
         <button className="btnSecond" onClick={preveProduct}><GrNext className="previous"/></button>
        </div>
        <div className="cardFeat" ref={slideProductRef}>
          {
           productVegetabel.map((el,index)=>{
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
     <AllProduct heading={"Your Products"}/>
    </div>
  )
}

export default Home
