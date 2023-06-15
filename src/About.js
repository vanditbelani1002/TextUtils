import React, { useState } from 'react'

export default function About(props) {
  //  const [mystyle,setmystyle] = useState(
  //   {
  //       color: 'black',
  //       backgroundColor: 'white'
  //   })

  let mystyle={
    color: props.mode ==='dark'?'white':'black',
    backgroundColor: props.mode ==='dark'?'#343333':'white'
  }
    
    

  return (
    <div classNameName='container' style={mystyle}>
        <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analze your text</strong>
      </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, text Copy etc...
      </div>
        </div>
        </div>
        <div className="accordion-item">
     <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Free to use </strong>
      </button>
        </h2>
     <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        TextUtils is a free character count tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word / Character limit.
      </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong> Browser Compatible</strong>
      </button>
        </h2>
     <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle} >
        This word counter Software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blog, books, excel document, pdf document etc...
      </div>
        </div>
        </div>
        </div>
        
    </div>
  )
}
