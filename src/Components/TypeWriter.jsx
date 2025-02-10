import React, { useEffect, useRef, useState } from "react";
import './TypeWriter.css';

const TypeWriter = ({ text, typingSpeed = 300 }) => {
    const [visibleText, setVisibleText] = useState(
        text.split("").map(() => "hidden") // Initialize all characters as "hidden"
    );
    const [isCursorVisible, setIsCursorVisible] = useState(true);
    
    let index = useRef(0);
    let timeout = useRef(null);

    useEffect(() => {
        if (index.current < text.length) {
            timeout.current = setTimeout(() => {
                setVisibleText((prev) => {
                    let newText = [...prev];
                    newText[index.current] = "visible"; // Make current character visible
                    return newText;
                });
                index.current += 1;
            }, typingSpeed);
        } else {
            setIsCursorVisible(false);
        }

        return () => clearTimeout(timeout.current);
    }, [visibleText]); 

    return (
        <p>
            {text.split("").map((char, i) => (
                <span key={i} className={visibleText[i]}>{char}</span>
            ))}
            <span className={isCursorVisible ? 'cursor' : 'inv-cursor'}>|</span>
        </p>
    );
};

export default TypeWriter;
