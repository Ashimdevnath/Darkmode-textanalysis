import React, { useState } from 'react'

export default function Textarea(props) {

let UperChange = () =>{
let ChangedValue = text.toUpperCase();
setText(ChangedValue);
}
let LowerChange = () =>{
let ChangedValue = text.toLocaleLowerCase();
setText(ChangedValue);
}
let Clear = () =>{
let ChangedValue = "";
setText(ChangedValue);
}
let Onchange = (event) =>{
setText(event.target.value)
}
const [text, setText] = useState("");
return (
<div style={{ color : props.dark === 'dark'?'white':'#000133'}}>
  <h1 className="text-center my-3 ">{props.headname}</h1>
  <div className='my-2'>
    <textarea className="form-control" value={text} style={{backgroundColor: props.dark === 'dark' ?'white':'dark'}} onChange={Onchange} placeholder="Enter Text here" id="Textarea" rows="8"></textarea>
  </div>
  <button className="btn btn-success mt-2 mx-1" onClick={UperChange}>Convert To UpperCase</button>
  <button className="btn btn-success mt-2 mx-1" onClick={LowerChange}>Convert To LowerCase</button>
  <button className="btn btn-success mt-2 mx-1" onClick={Clear}>Clear Data</button>

  <h1 className='mt-5 text-center'>All Data Analyes</h1>
  <h5 className='text-center'>Number of Words are {text.split(" ").length-1} & Number of charchters are {text.length}
  </h5>
  <h5 className='text-center'>Number of Charchater Without Space: {text.split(" ").join("").length}</h5>
  <h5 className='text-center'>Time to read a words is {text.split(" ").length * 0.008} min</h5>

  <h1 className='mt-5 text-center'>Preview</h1>
  <h5 className='text-center'>{text === ""?"Enter Text in textbox":text}</h5>
</div >
)
}