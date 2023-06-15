// import logo from './logo.svg';
import About from './About';
import { useState } from 'react';
import Alert from './Alert';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {

  const[alert,setalert] = useState(null);
  
  const showalert =(message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setalert(null)
    },1500)
  }

  const [mode,setmode] = useState('light');


  const togglemode = ()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#343333';
      showalert('Dark mode has been enabled','success')  
      
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      showalert('Light mode has been enabled','success')  
      
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} togglemode={togglemode} />
    <Alert  alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
          <TextForm heading="TextUtils - Word Counter, Character counter" showalert={showalert} mode={mode}></TextForm>
          </Route>
        </Switch>
        </div>
        </Router> 
           
            
    </>
  );
}

export default App;




