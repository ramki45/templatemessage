import './App.css';
import React, {useState} from 'react';

function App() {
  const [id , setId] = useState('');
  const [name, setName] = useState('');
  const [message , setMessage] = useState('');
  const [selected , setSelected] = useState('');

  const handleChange =(e)=>{
    setId(e.target.value);
  }
 
  const handleNameChange =(e)=>{
    setName(e.target.value);
  }
 
  const handleMessageChange =(e)=>{
    setMessage(e.target.value);
  }
   
  const handleListChange =(e)=>{
    setSelected(e.target.value);
  }
  
  const handleSubmit=(e)=>{
 
    alert('A form was submitted with ID :"' + id +
      '" ,Template Name :"'+name +'" and Message :"' + message + '" ,MsgList :"'+selected + '"');
   
   
      e.preventDefault();

  }
return (
  <div className="App">
  <header className="App-header">
  <form onSubmit={(e) => {handleSubmit(e)}}>
  
  <h2> Message Template Configuration </h2>
      <label >
        Template Id:
      </label><br/>
      <input type="alphanumeric" min={5} max={10} value={id} required onChange={(e)=> {handleChange(e)}} /><br/>
        { /*when user write in name input box , handleChange()
            function will be called. */}
      <label >
        Template Name:
      </label><br/>
      <input type="alphanumeric" min={10} max={20} value={name} required onChange={(e)=> {handleNameChange(e)}} /><br/>
        
      <label>
        Message:
      </label><br/>
      <input type="alphanumeric" min={10} max={20} value={message} required onChange={(e)=> {handleMessageChange(e)}} /><br/>
        {/* when user write in email input box , handleEmailChange()
            function will be called.*/}
      <select name="messageList" value={selected} id="msglist" required onChange={(e)=>{handleListChange(e)}}>
   <option value="0 100">0 100</option>
   <option value="0 200">0 200</option>
 <option value="0 300">0 400</option>
 <option value="0 400">0 500</option>
 <option value="0 500">0 800</option>
</select>
<br/>
      
     
     
     
       <input type="submit" value="Submit"/>
    </form>
  </header>
  </div>
);
}

export default App;
