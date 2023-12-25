import "./signUp.css"
import loginSignUpImage from "../../assest/login-animation.gif"
import {BiHide, BiShow} from "react-icons/bi"
import { useState } from "react"
import {Link,useNavigate} from "react-router-dom"
import { toBase64 } from "../../utility/toBase64"
import { toast } from "react-hot-toast"
const SignUp = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
     image:""
  })

  const handleShow = ()=>{
    setShowPassword(prev=>!prev)
  }
  const handleConfirmShow = ()=>{
    setShowConfirmPassword(prev=>!prev)
  }

  const handleFile = async (e)=>{
    const data = await toBase64(e.target.files[0])
   
    setData((prev)=>{
      return{
        ...prev,
        image : data
      }
    })
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
     const {firstName,lastName,email,password,confirmPassword} = data
     if(firstName && email && password && confirmPassword){
        if(password === confirmPassword){
          const fetchData = await fetch("http://127.0.0.1:5000/signUp",{
            method:"POST",
            headers:{
              "content-type" : "application/json"
            },
            body:JSON.stringify(data)
          }) 
          const resData = await fetchData.json()
          console.log(resData) 
          toast(resData.message)
          if(resData.alert){
            navigate("/login")
          }
          //alert(resData.message)
        }else{
          alert("password and confirmPassword are not the same")
        }
     }else{
       alert("please add all the fields")
     }
  }
 
  return (
    <div className="signUp">
       <div className="signUpContainer">
          <div className="signUpImageContainer">
             <img src={data.image ? data.image : loginSignUpImage} alt="imgSignin"/>
             
             <label htmlFor="lab" className="lab">
               <div className="upload">
                 <p>upload</p>
               </div>
               <input type="file" id="lab" name="lab" className="hidden" onChange={handleFile}/>
             </label>
          </div>
           <form className="signUpForm" onSubmit={onSubmit}>
             <label htmlFor="firstName">First Name</label>
             <input type={"text"} id="firstName" name="firstName"
              className="nameInput" value={data.firstName} onChange={handleSubmit}/>
              
              <label htmlFor="lastName">Last Name</label>
              <input type={"text"} id="lastName" name="lastName" 
              className="nameInput" value={data.lastName} onChange={handleSubmit}/>

              <label htmlFor="email">Email</label>
              <input type={"email"} id="email" name="email"
               className="nameInput"  value={data.email} onChange={handleSubmit}/>

              <label htmlFor="password">Password</label>
               <div className="passwordContainer">
                 <input type={showPassword ? "text": "password"} id="password" name="password"
                  className="nameInput"  value = {data.password} onChange={handleSubmit}/>
                 <span onClick={handleShow}>{showPassword ? <BiShow/> : <BiHide/>}</span>
               </div>
               <label htmlFor="confirmPassword">confirmPassword</label>
               <div className="passwordContainer">
                 <input type={showConfirmPassword ? "text": "password"} id="confirmPassword" 
                   name="confirmPassword" onChange={handleSubmit} value = {data.confirmPassword} className="nameInput"/>
                 <span onClick={handleConfirmShow}>{showConfirmPassword ? <BiShow/> : <BiHide/>}</span>
               </div>
               <button type="submit" className="signUpButton">Sign Up</button>
               <p>already have an account? <Link to="/login" className="already">Login</Link></p>
           </form>
       </div>
    </div>
  )
}

export default SignUp
