import React, { useEffect, useRef, useState } from "react";
import './TypeWriter.css';

// a function for the type writing and cursor effect
const TypeWriter = ({text, typingSpeed = 300}) => {
    const [currentText, setCurrentText]= useState("");
    const [isCursorVisible, setIsCursorVisible] = useState(true);

    let index = useRef(-1);

    // a hook, that calles a funcyion that types words based on a time interval(typingSpeed)
    useEffect(()=> {
        setTimeout(() =>{
            let nxt = text.charAt(index.current);
            setCurrentText((value)=> value + nxt);
            console.log(currentText)
            index.current += 1;
            
        }, typingSpeed)


        // used to make the cursor invisible once typing is done
        if(text.length <= index.current){setIsCursorVisible(false)}
   
        
    },[currentText, text])
    

    return<p>{currentText}<span className={isCursorVisible ? 'cursor' : 'inv-cursor'}>|</span></p> 

};export default TypeWriter;