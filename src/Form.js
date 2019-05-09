import React  from 'react';

const Form = (props) => {

const {inputValue: name, onChange: handleNameChange} = props.useInput()
const {inputValue: surname, onChange: handleSurnameChange} = props.useInput()
const {inputValue: age, onChange: handleAgeChange} = props.useInput()

return (
    <div>
     

 <form>

   <input 
   type="text"
   placeholder="Name"
   value={name}
   onChange={(event) => handleNameChange(event)}
   />

<input 
   type="text"
   placeholder="Surname"
   value={surname}
   onChange={(event) => handleSurnameChange(event)}
   />

<input 
   type="number"
   placeholder="Age"
   value={age}
   onChange={(event) => handleAgeChange(event)}
   />
  
 </form>


  <h3> {name} {surname}, age: {age}</h3>



    </div>
  );
}

export default Form;
