import React,{useState} from 'react'




export default function TextForms(props) {

    


const handleupclick=()=>{
    // console.log("uppercase clicked")
    let newone=text.toUpperCase();
    settext(newone);
    props.showalert("Converted to upper case ","success : ")

}
const handleloclick=()=>{
    // console.log("uppercase clicked")
    let newone=text.toLocaleLowerCase();
    settext(newone);
    props.showalert("Converted to lowercase ","success : ")

    // props.showalert("Converted to lower case","Sucess: ");

}
const handleclear=()=>{
    // console.log("uppercase clicked")
    settext('');
    props.showalert("Text cleared ","success : ")

}
const handleOnchange=(event)=>{
    // console.log("uppercase clicked")
    settext(event.target.value);
}
const handleOncopy=()=>{
    // console.log("uppercase clicked")
    let tt=document.getElementById("exampleFormControlTextarea1");
    tt.select()
    navigator.clipboard.writeText(tt.value);
    props.showalert("text copied ","success : ")

}
const handleOnextra=()=>{
    let tt=text.split(/[ ]+/) 
    // the above line firstly splits the words and below line joins it back with a single space
    settext(tt.join(' '))
    // settext(event.target.value);
    props.showalert("extra spaces removed ","success : ")

}

const[text,settext]=useState("enter here")
  return (
        <>
        <h1 className={`text-${props.color}`}>
            TextArea
        </h1>
    <div>
<div className="mb-3 my-3" >
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className={`form-control text-${props.color}`} value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.color==="dark"?'white':'grey',color:props.color==="dark"?'dark':'white'}}></textarea>

</div>
    </div>
    <button className="btn btn-primary mx-2 " onClick={handleloclick}> convert to lowercase</button>
   
    <button className='btn btn-primary mx-2' onClick={handleclear} > clear</button>
    <button className='btn btn-primary mx-2' onClick={handleOnextra}>remove extra spaces</button>
    <button className='btn btn-primary mx-2' onClick={handleOncopy}> copy</button>
    
    <button className='btn btn-primary mx-2' onClick={handleupclick}> convert to Uppercase</button>
    
<h1  className={`text-${props.color}`}>Summary</h1>
<p  className={`text-${props.color}`}>{text.split(" ").length} Words and {text.length} character</p>
<p  className={`text-${props.color}`}> {text.split(" ").length*0.008}min</p>
<h2  className={`text-${props.color}`}>preview </h2>
<p className={`text-${props.color}`}>{ text.length>0?text:"enter something to box" } </p>
    
    
    </>
  )
}


