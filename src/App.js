// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [style, setMyStyle] = useState( {
         color: "black",
        backgroundColor: 'white'
    });
  

  const showAlert = (message,type)=> {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=> {
      setAlert(null);
    },2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'black';
        showAlert(' Dark Mode has been Enabled','success');
    
        // document.title = 'TextUtils - DarkMode'
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert(' Light Mode has been Enabled','success');
      
        // document.title = 'TextUtils - LightMode'
    }
};

  return (
    
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert  alert={alert}/>
    
    <div className='container my-3'>
      <Routes>
          <Route path="/about" element={<About/>} exact/>
          <Route path="/home" exact element={<TextForm heading="Enter the Text to Analyze" showAlert={showAlert} mode={mode}/>}/>
                 
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
