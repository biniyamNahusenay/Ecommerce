import { Link } from "react-router-dom"
import "./homeCard.css"

const HomeCard = ({image,name,price,category,id}) => {
  return (
    <Link to={`/menu/${id}`} className='Link'>
      <div className='homeCard'>
          <div className="card">
              <img src={image} alt="img"/>
          </div>
          <h3>{name}</h3>
          <p>{category}</p>
          <p className="ptag"><span>birr : </span>{price}</p>
      </div>
    </Link>
  )
}

export default HomeCard
