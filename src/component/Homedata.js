import { useState } from "react"
import { useEffect } from "react"

export default function Homedata(){


    const[fullname,setFullName]=useState('')
    const[gender, setGender]=useState('')
    const[age,setAge]=useState('')
    const[phonenumber,setPhoneNumber]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[city,setCity]=useState('')

    const[bb,setbb]=useState([])

    useEffect(()=>{
    setbb(JSON.parse(localStorage.getItem("task")))
    },[] );

  const addField = ()=>{
const userData={
    fullname:fullname,
    gender:gender,
    age:age,
    phonenumber:phonenumber,
    email:email,
    password:password,
    city:city,
}
if(localStorage.getItem("task")){
    let newuserData=JSON.parse(localStorage.getItem("task"))
    localStorage.setItem("task",JSON.stringify([...newuserData,userData]))
}
else{
    localStorage.setItem("task",JSON.stringify([userData]))
}
alert("add task successfully")
 setbb(JSON.parse(localStorage.getItem("task")))
  }


  const deleteRow=(index)=>{
  const ss=JSON.parse(localStorage.getItem("task"))
  console.log(ss)

  ss.splice(index,1)
  localStorage.setItem('task',JSON.stringify(ss))
  setbb(JSON.parse(localStorage.getItem('task')))
  console.log(index,ss)
  }

    return(
        <>
        <h1>Family Details</h1>
        <input type="text"
        placeholder="Enter Your FullName"
        onChange={(e)=>setFullName(e.target.value)}
        style={{margin:'2px 93px 7px 0px',padding:'7px 0px 7px 70px', borderRadius:'5px',
    }}/>

        <input type="text"
        placeholder="Enter  Your Gender"
        onChange={(e)=>setGender(e.target.value)}
        style={{margin:'2px 93px 7px 0px',padding:'7px 0px 7px 70px', borderRadius:'5px',}}/>

        <input type="text"
        placeholder="Enter Your Age"
        onChange={(e)=>setAge(e.target.value)}/>

        <input type="number"
        placeholder="Enter Your Phone Number"
        onChange={(e)=>setPhoneNumber(e.target.value)}/>

        <input type="email"
        placeholder="Enter Your Email"
        onChange={(e)=>setEmail(e.target.value)}/>

        <input type="password"
        placeholder="Enter Your Password"
        onChange={(e)=>setPassword(e.target.value)}/>

        <input type="text"
        placeholder="Enter Your City"
        onChange={(e)=>setCity(e.target.value)}/>

        <button onClick={addField}>added</button>


        <table style={{width:'100%'}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Full-Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Phone-Number</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>City</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {bb.map((value,index)=>{
                   return(
                 <tr>
                    <td>{index+1}</td>
                    <td>{value.fullname}</td>
                    <td>{value.gender}</td>
                    <td>{value.age}</td>
                    <td>{value.phonenumber}</td>
                    <td>{value.email}</td>
                    <td>{value.password}</td>
                    <td>{value.city}</td>
                    <td>
                        <button style={{marginRight:'12px',color:'red',padding:'5px 12px 5px 12px'}}onClick={()=>{deleteRow(index)}}>Delete</button>
                        <button style={{padding:'5px 15px 5px 15px',color:'green',marginLeft:'15px'}}>Edit</button>
                    </td>
                 </tr>
                   )
                })}
            </tbody>
        </table>
        </>
    )
}