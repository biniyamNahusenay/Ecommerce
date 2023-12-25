import "../signUp/signUp.css"
import loginSignUpImage from "../../assest/login-animation.gif"
import {BiHide, BiShow} from "react-icons/bi"
import { useState } from "react"
import {Link,useNavigate} from "react-router-dom"
import { toast } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { loginRedux } from "../../../redux/userSlice" 

const Login = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [data,setData] = useState({
    email:"",
    password:""
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userData = useSelector(state=>state.user)

  const handleShow = ()=>{
    setShowPassword(prev=>!prev)
  }
  const handleSubmit = (e)=>{
    const {name,value} = e.target
    setData((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }

  const onSubmit = async (e)=>{
     e.preventDefault()
     const {email,password} = data
     if(email && password){  
      const fetchData = await fetch("http://127.0.0.1:5000/login",{
        method:"POST",
        headers:{
          "content-type" : "application/json"
        },
        body:JSON.stringify(data)
      }) 
      const resData = await fetchData.json()
      toast(resData.message)
       if(resData.alert){
         dispatch(loginRedux(resData))
         navigate("/")
       }
     }else{
       alert("please add all the fields")
     }
  }
 
  return (
    <div className="signUp">
       <div className="signUpContainer">
          <div className="signUpImageContainer">
             <img src={loginSignUpImage} alt="imgSignin"/>
          </div>
           <form className="signUpForm" onSubmit={onSubmit}>
              <label htmlFor="email">Email</label>
              <input type={"email"} id="email" name="email"
               className="nameInput"  value={data.email} onChange={handleSubmit}/>

              <label htmlFor="password">Password</label>
               <div className="passwordContainer">
                 <input type={showPassword ? "text": "password"} id="password" name="password"
                  className="nameInput"  value = {data.password} onChange={handleSubmit}/>
                 <span onClick={handleShow}>{showPassword ? <BiShow/> : <BiHide/>}</span>
               </div>
               <button type="submit" className="signUpButton">login</button>
               <p>don't you have an account? <Link to="/signUp" className="already">signUp</Link></p>
           </form>
       </div>
    </div>
  )
}

export default Login
