import "./filterproduct.css"
import {CiForkAndKnife} from "react-icons/ci"
const FilterProduct = ({category,onClick}) => {
  return (
    <div className='filter' onClick={onClick}>
         <div className="ContK">
            <CiForkAndKnife/>
          </div>
          <p>{category}</p>
    </div>
  )
}

export default FilterProduct
