import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was cliked"+text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showalert("Converted to uppercase",'success')
  }
  const handleLowClick = ()=>{
    // console.log("Uppercase was cliked"+text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showalert("Converted to lowercase",'success')
  }
  const handleClear = ()=>{
    // console.log("Uppercase was cliked"+text);
    let newText = '';
    setText(newText)
    props.showalert("Textarea is clear",'success')
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const handleCopy =()=>{
    var text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
    document.getSelection().removeAllRanges()
    props.showalert("Text is Copied",'success')
  }

  const handleSpaces = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showalert("Whitespace is removed",'success')
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
      <h1 >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#343333',color:props.mode==='light'?'black':'white'}} value={text} rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>Remove White Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words,{text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
