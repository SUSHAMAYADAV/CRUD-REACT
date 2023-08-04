import {useState} from 'react'
import {useNavigate } from 'react-router-dom'
//import Login from './Login'
function Signup(){
   const [fullname,setFullname] = useState('')
   const [email,setEmail] = useState('')
   const [phone,setPhone] = useState('')
   const [password,setPassword] = useState('')
   const navigate = useNavigate()

   function Loginpage(){
    navigate("/")
   }
    
    function submitButton(){
     //   console.log(userdetails)
   const userdetails = {
        name: fullname,
        email: email,
        phone: phone,
        password:password,
   }
   if(fullname !=="" && email !=="" && password !==""){
   if(localStorage.getItem('userSignupDetails')){
    let newUserDetails = JSON.parse(localStorage.getItem('userSignupDetails'))

    console.log("ifff",newUserDetails)

    localStorage.setItem('userSignupDetails',JSON.stringify([...newUserDetails,userdetails]))

   
   }
   else{
    localStorage.setItem('userSignupDetails',JSON.stringify([userdetails]))
   }
   }
   else{
    alert('plz Enter this field')
   }
}

    const divStyle = {
        margin: '10px',

    }
    const inputStyle = {
        padding:'10px',
        borderRadius:'7px',
    }
    
    
    return(
        <>
        <div>
        <div style={divStyle}>
            <div style={{marginRight:"100px"}}>
            <label>Username</label>
            </div>
       <input style={inputStyle} onChange={(e)=>setFullname(e.target.value)} type="text" placeholder="Enter Your fullname"
       />
       
       </div>
       <div style={divStyle}>
        <div style={{marginRight:"130px"}}>
        <label >Email</label>
        </div>
       <input style={inputStyle} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Your email"
        />
        </div>
        <div style={divStyle}>
            <div style={{marginRight:  "100px"}}>
                <label>MobileNo.</label>
            </div>
        <input style={inputStyle} onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="Enter Your  number"/>
        </div>
         <div style={divStyle}>
        <div style={{marginRight:"100px"}}>
         <label>Password</label>
        </div>
        <input style={inputStyle} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Your password"/>
        </div>
        <div>
        <button style={{padding:"12px 70px 12px 70px",borderRadius:"7px",}} onClick={submitButton}>SignUp</button>
        </div>
        <div>
        <button style={{padding:"12px 75px 12px 75px",borderRadius:"7px",margin:"10px"}} onClick={Loginpage}>Login</button>
        </div>
         
        </div>
        </>
    )
}
export default Signup