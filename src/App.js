import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
// import About from './About';
import React, {useState} from 'react'
import AAlert from './components/AAlert';
// import{Routes,Route} from "react-router-dom";

 
function App() {
  const[mode,setmode]=useState("light")
  const[Alert,setalert]=useState(null)

  const showalert=(mess,type)=>{
    setalert({
      mess:mess,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1200);
  }

  const[moder,setmoder]=useState("dark")
  const[textdark,settextdark]=useState("Enable Dark mode")
  
  
   
  
  const toggle=()=>{
    if(mode==="light"){
      setmode("dark")
      setmoder("light")
      settextdark("Off Dark mode");
      document.body.style.backgroundColor='grey'
      showalert("dark mode ","success : ")
 
    }
    else{
      setmode("light")
      setmoder("dark");
      settextdark(" Enable Dark mode");
      document.body.style.backgroundColor='white'
      showalert("light mode ","success : ")
    }
  }
  return ( 

    <>
     <Navbar title="Utils" toggle={toggle} textdark={textdark}about="about us"  moder={moder} mode={mode}/>
    <AAlert Alert={Alert}/>
    {/* <About /> */}
    <TextForms showalert={showalert} color={moder}/>
    {/* <Navbar title="Utils" toggle={toggle} textdark={textdark}about="about us"  moder={moder} mode={mode}/>
<div className='container my-3'>
    <AAlert Alert={Alert}/>


 <Routes>
 <Route path="/about" element={<About />} />

     
  <Route path='/' element={<TextForms showalert={showalert} color={moder}/>}></Route>

 </Routes> */}
 {/* </div> */}
  </>
  
  );
}

export default App;
