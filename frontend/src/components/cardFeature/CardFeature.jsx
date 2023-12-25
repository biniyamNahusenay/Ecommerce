import React from 'react';
import './cardFeature.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/productSlice';

const CardFeature = ({ image, price, category, name,id}) => {
  const dispatch = useDispatch()
  const handle = (e)=>{
    e.stopPropagation()
    dispatch(addToCart({
      id:id,
      category:category,
      price:price,
      image:image,
      name:name
    }))
  }
  return (
    <div className="FeatureCard" >
  <Link to={`/menu/${id}`} className='Link' onClick={()=>window.scrollTo({top:"0",behavior:"smooth"})}>
   
      <div className="imageDiv">
        <img src={image} alt="img" />
      </div>
      <div className="cont">
        <h3>{name}</h3>
        <p>{category}</p>
        <p className="ptag">
          <span>birr : </span>
          {price}
        </p>
      </div>
  </Link>
  <button className="btn" onClick={handle}>Add Cart</button>
  </div>
  );
};

export default CardFeature;
