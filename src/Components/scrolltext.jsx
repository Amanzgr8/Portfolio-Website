import React, { useState, useEffect, useCallback } from "react";
import TypeWriter from "./TypeWriter";

// a function that takes in a text, scrolllength(pixel) and typing speed and types the text when a page is scorlled
// a certain length. 
const ScrollText = ({text, scrollLength, speed})=>{
    const [scrolling, setScrolling] = useState(false);

    const handleScrolling = useCallback(() => {
        const position = window.pageYOffset;
        if(position > scrollLength){
            setScrolling(true);
        }  
    }, [scrollLength]);

    useEffect(() =>{
        window.addEventListener("scroll", handleScrolling)
        handleScrolling();
        return () => {
            window.removeEventListener('scroll', handleScrolling);
        };
    } ,[handleScrolling])

    return(

        <div>
            {scrolling && <TypeWriter typingSpeed={speed} text={text}/>}
        </div>
    )

}
export default ScrollText;