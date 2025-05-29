import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Info(){
  const navigate = useNavigate();
const [name,setName]= useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState(""); 
  const [skills, setSkills] = useState([]);
  const handleSkills=(event)=>{
    console.log(event.target.value, event.target.checked)
    if(event.target.checked){
setSkills([...skills,event.target.value])
    }else{
        setSkills([...skills.filter((item)=>item!=event.target.value)])
    }
  }
return(

    <div style={{ display: "flex", gap: "150px"}}>
    <div>
<div style={{ 
  padding: "20px", 
  border: "1px solid black", 
  borderRadius: "10px", 
  width: "300px", 
  backgroundColor: "#f0f8ff"
}}>
<form style={{gap: "5px" }}>
    <h1>USER INFORMATION</h1>
    <label> Name:
<input type="text" value= {name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Your Name" ></input>
</label>
<br/>
<br/>
  <label> Age:
<input type="text" value= {age} onChange={(event)=>setAge(event.target.value)} placeholder="Enter Your Age" ></input>
</label>
<br/>
<br/>
  <label> Email:
<input type="text" value= {email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Your Email" ></input>
</label>
<br/>
<br/>
  <label> Contact:
<input type="text" value= {contact} onChange={(event)=>setContact(event.target.value)} placeholder="Enter Your Contact " ></input>
</label>
<br/>
<br/>
<h4>Select Gender</h4>
<input type="radio" name= "gender" onChange={(event)=>setGender(event.target.value)} value={"female"} checked={gender==="female"}  id="female"/><label htmlFor="female">Female</label>
<br/>
<input type="radio" name= "gender" onChange={(event)=>setGender(event.target.value)}  value={"male"} checked={gender==="male"}  id="male"/><label htmlFor="male">Male</label>
<h4>Select Your City</h4>
<select defaultValue={"Islamabad"}onChange={(event)=>setCity(event.target.value)} >
    <option value="Karachi">Karachi</option>
     <option value="Lahore">Lahore</option>
      <option value="Islamabad">Islamabad</option>
       <option value="Quetta">Quetta</option>
</select>
<br/>
<br/>
<h4>Your Skills</h4>
<input type="checkbox"  onChange={handleSkills} value= "php" id="php"/>
<label htmlFor="php">php</label>
<input type="checkbox" onChange={handleSkills} value= "java" id="java"/>
<label htmlFor="java">Java</label>
<input type="checkbox" onChange={handleSkills} value= "python" id="python"/>
<label htmlFor="python">python</label>
<input type="checkbox"onChange={handleSkills}  value= "node js" id="node js"/>
<label htmlFor="node js">node js</label>
</form>
<button
  type="button"
  onClick={() => {
    navigate("/success");
  }}
  style={{
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }}
>
  Submit
</button>
</div>
</div>
 
 <div style={{
      flex: 0.3,
      border: "1px solid black",
      padding: "10px",
      borderRadius: "10px",
      background: "#f9f9f9",
      marginLeft: "60px",
    }}>
<h1>Preview</h1>

    <p><strong>Name:</strong> {name}</p>
    <p><strong>Age:</strong> {age}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Contact:</strong> {contact}</p>
    <p><strong>Gender:</strong> {gender}</p>
    <p><strong>City:</strong> {city}</p>
    <p><strong>Skills:</strong> {skills.join(", ")}</p>
  </div>
</div>
 
);
}
export default Info;