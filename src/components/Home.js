import React, { useState } from 'react'

export default function Form(props) {
  const [text, setText] = useState('Enter Your Text !!!')

  const toUppercase=()=>{
    let texttoUpp = text.toUpperCase();
    setText(texttoUpp);
  }
  const cleatText=()=>{
    let newText = "";
    setText(newText);
  }

  const toLowercase=()=>{
    let texttoLow = text.toLowerCase();
    setText(texttoLow);
  }
  
  const removeExtraSpace=()=>{
    let removeSpace = text.replace(/ {2,}/g,' ');
    setText(removeSpace);
  }

  const handleChange = (event) => {
    setText((event.target.value))
  }
  return (
    <>
      <div className="container text-center">
        <h1 className={`text-${props.mode==='dark'?'light':'dark'}`}>{props.heading}</h1>
        <textarea className={`text-${props.mode==='dark'?'light':'dark'} bg-${props.mode==='dark'?'dark':'light'}`} value={text} onChange={handleChange} id="textForm" cols="100" rows="10"></textarea>
      </div>
      <div className="container text-center my-3">
        <button className="btn btn-primary ms-3 mb-2" onClick={toUppercase} id='btn-toUpper'>To UpperCase</button>
        <button className="btn btn-primary ms-3 mb-2" onClick={toLowercase} id='btn-toLower'>To LowerCase</button>
        <button className="btn btn-primary ms-3 mb-2" onClick={removeExtraSpace} id='btn-extraSpaces'>Remove Extra Spaces</button>
        <button className="btn btn-danger ms-3 mb-2" onClick={cleatText} id='btn-clear'>Clear</button>   

        <p className={`text-${props.mode==='dark'?'light':'dark'}`}>{text.split(" ").length} Words and {text.length} Characters</p>
        <h1 className={`text-${props.mode==='dark'?'light':'dark'}`}>Preview</h1>
        <p className={`text-${props.mode==='dark'?'light':'dark'}`}>{text.length>0?text:'Enter Some Text to Preview it'}</p>
        </div>
    </>
  )
}
