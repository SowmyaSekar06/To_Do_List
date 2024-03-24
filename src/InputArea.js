import React, { useState } from "react";

const InputArea = (props) => {
    const [inputText, setInputText] = useState("HelloWorld");
    const handleChange = (event) =>{
        const newVal = event.target.value;
        setInputText(newVal);
        // console.log(newVal);
    }
 
    return (
        <div className="form">
            <input type="text" onChange={handleChange} value={inputText}></input>
            <button onClick = {() => {props.addItem(inputText); setInputText("");}}>
                <span>Add</span>
            </button>
            <p>{inputText}</p>
        </div>
    );
}

export default InputArea;