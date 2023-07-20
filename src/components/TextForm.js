import React, {useRef,useState} from 'react'
import PropTypes from 'prop-types'



function TextForm(props) {

    const textAreaRef = useRef(null);
    const handleUpClick = () => {
        // console.log("Upper Case" + text);
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Uppercase",'success');
    }

    const handleloClick = () => {
        // console.log("Upper Case" + text);
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lowercase",'success');
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }

    const copy = (e) => {
        // textAreaRef.current.select();
        // document.execCommand('copy');
        // // e.target.focus();
        // alert("Copied!")
        props.showAlert(" Text Copied!",'success');
       
    }

    const clearText = () => {
        setText("");
        props.showAlert(" Text Cleared!",'success');
        
    }
    const [text, setText] = useState('');
    //setText("New Text");
    return (
        <div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'Gray':'white',color: props.mode === 'dark'? 'white':'black'}} ref={textAreaRef} value={text}>{text}</textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={handleloClick}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={clearText}>Clear Text</button>
            <button className='btn btn-primary mx-2' onClick={copy}>Copy Text</button>
        </div>
        <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} words, {text.length}</p>
            <p>You can read in {0.008 * text.split(" ").length}</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </div>
    )
}

export default TextForm;

TextForm.propTypes = {
    heading: PropTypes.string,
}