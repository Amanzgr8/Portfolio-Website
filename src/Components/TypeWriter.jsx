import React, { useEffect, useRef, useState } from "react";
import './TypeWriter.css';

const TypeWriter = ({ text, typingSpeed = 300 }) => {
    const [visibleText, setVisibleText] = useState(
        text.split("").map(() => "hidden") // Initialize all characters as "hidden"
    );
    // const [isCursorVisible, setIsCursorVisible] = useState(false);
    
    let index = useRef(-2); // Use a ref to keep track of the current index
    let timeout = useRef(null);

    useEffect(() => {
        console.log(index.current);
        if (index.current < text.length) {
            console.log("hello");
            console.log(timeout.current);
            timeout.current = setTimeout(() => {
                console.log("hello1");
                setVisibleText((prev) => {
                    let newText = [...prev];
                    newText[index.current] = "visible"; // Make current character visible
                    console.log("hello2");
                    return newText;
                });
                //index.current += 1;
                console.log("adding");
            }, typingSpeed);
        } 
       index.current += 1;
       console.log("adding");
        // else {
        //     setIsCursorVisible(false);
        // }

        return () => clearTimeout(timeout.current);
    }, [visibleText]); 

    return (
        <p>
            {text.split("").map((char, i) => (
                <span key={i} className={visibleText[i]}>{char}</span>
            ))}
            {/* <span className={isCursorVisible ? 'cursor' : 'inv-cursor'}>|</span> */}
        </p>
    );
};

export default TypeWriter;
 