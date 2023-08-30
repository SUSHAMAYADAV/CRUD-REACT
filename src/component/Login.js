import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const navigate=useNavigate()
    console.log(email,password)
    let ss = JSON.parse(localStorage.getItem('userSignupDetails'))
    console.log("ss variable",ss)
    

    function submitButton(){
    const loginDetails = {
        email: email,
        password: password
    } 
    
    if(email !== "" && password !== ""){
 ss?.map((item)=>{
    if(item.email===email && item.password===password){
        navigate('/home')
    }
    else{
        alert('Please Enter Valid Emila and Passsword')
    }
 })

  navigate("/home")
}
else{
    email === "" ? alert('Please Enter Email') : alert("Please Enter pasword")
}
    }
  
    const signupPage=()=>{
navigate("/signup")
    }
    
    const inputStyle = {
        borderRadius: '10px',
        padding:'10px',
    }
 return(
    <>
    <div  style={{backgroundColor:"gray"}}>
    <div style={{paddingTop:"20px"}} >
        <div style={{paddingRight:"120px"}}>
        <label>Email</label>
        </div>
    <input style={inputStyle} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Your Email"/>
    </div>
    <div style={{paddingTop:"10px"}}>
        <div style={{paddingRight:"90px"}}>
        <label>Password</label>
        </div>
    <input style={inputStyle} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Your Password" />
    </div>
    <div style={{paddingTop:"20px"}}>
    <button onClick={submitButton}  style={{padding:"5px 70px 12px 70px ",borderRadius:"10px"}}>Login</button>
    </div>
    <button onClick={signupPage} 
     style={{padding:"5px 70px 12px 70px ",borderRadius:"10px"}}>Signup</button>
    </div>
    </>
 )
}
export default Login