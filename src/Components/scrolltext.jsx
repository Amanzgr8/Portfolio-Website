import React, { useState, useEffect } from "react";
import TypeWriter from "./TypeWriter";

// a function that takes in a text, scrolllength(pixel) and typing speed and types the text when a page is scorlled
// a certain length. 
const ScrollText = ({text, scrollLength, speed})=>{
    const [scrolling, setScrolling] = useState(false);

    const handleScrolling = () => {
        const position = window.pageYOffset;
        if(position > scrollLength){
            setScrolling(true);
        }  
    }

    useEffect(() =>{
        window.addEventListener("scroll", handleScrolling)
        return () => {
            window.removeEventListener('scroll', handleScrolling);
        };
    } ,[])

    return(
        <div>
            {scrolling && <TypeWriter typingSpeed={speed} text={text}/>}
        </div>
    )

}
export default ScrollText;