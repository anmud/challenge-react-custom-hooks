import React, {useState} from 'react';
import Form from './Form'

const useInput = () => {
  const [inputValue, setInput] = useState('')

  const onChange = (event) => {
    return setInput(event.target.value)
  }

  return {
    inputValue,
    onChange,
  }
}

const App = () => {


  return (
    <div>
     
     <Form useInput={useInput}/>


    </div>
  );
}

export default App;
