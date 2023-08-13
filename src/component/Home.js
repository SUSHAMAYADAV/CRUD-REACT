import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  // let aa = JSON.parse(localStorage.getItem("task"))
  const [aa, setaa] = useState([]);

  useEffect(() => {
    setaa(JSON.parse(localStorage.getItem("task")));
  }, []);
  const addTaskBtn = () => {
    const data = {
      title: title,
      topic: topic,
      description: description,
    };

    if (localStorage.getItem("task")) {
      var newData = JSON.parse(localStorage.getItem("task"));
      localStorage.setItem("task", JSON.stringify([...newData, data]));
    } else {
      localStorage.setItem("task", JSON.stringify([data]));
    }
    alert("Add Task Succesfully");
    //this uses for refresh purpose
    //window.location.reload()
    setaa(JSON.parse(localStorage.getItem("task")));
  };

const tdStyle= { 
  textAlign: 'center', 
  border: '2px solid black',
}


   const deleteRow = (index)=>{
    const ss= JSON.parse(localStorage.getItem('task'))
    console.log(ss)
    ss.splice(index,1)
    localStorage.setItem('task',JSON.stringify(ss))
    setaa(JSON.parse(localStorage.getItem('task')))
    console.log(index,ss)
   }
  return (
    <>
    <div style={{backgroundColor:"#e5e5d1"}}>
     <h1>Manager Details</h1>
      <input
      style={{marginRight:'86px',padding:'7px 0px 7px 70px', borderRadius:'7px',
    }}
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
      style={{marginRight:'199px',padding:'7px 0px 7px 50px', borderRadius:'7px',
    }}
        type="text"
        placeholder="topic"
        onChange={(e) => setTopic(e.target.value)}
      />
      <input
      style={{padding:'10px',borderRadius:'7px'}}
        type="text"
        placeholder="descriptions"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button style={{padding:'10px 120px 7px 127px',marginLeft:'258px',borderRadius:'7px'}} onClick={addTaskBtn}>Add Task</button>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
              <table style={{width:'100%'}}>
          <thead>
            <tr>
              <th>Id</th>
              <th >Title</th>
              <th>Topic</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {aa?.map((value, index) => {
              
              return (
                <tr key={index} style={{ padding: "7px" }}>
                  <td  >{index + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.topic}</td>
                  <td>{value.description}</td>
                  <td><button style={{marginRight:'12px',color:'red',padding:'5px 12px 5px 12px'}}  onClick={()=>{deleteRow(index)}}>Delete</button>
                  <button style={{padding:'5px 15px 5px 15px',color:'green',marginLeft:'15px'}} >Edit</button></td>
                </tr>
              )
            })}
          </tbody>
          </table>
      </div>
      </div>
     
    </>
  );
}
