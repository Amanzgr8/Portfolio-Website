import React, { useEffect, useRef, useState } from "react";
import './TypeWriter.css';

const TypeWriter = ({ text, typingSpeed = 300, onComplete }) => {
    const [visibleText, setVisibleText] = useState(
        text.split("").map(() => "hidden") // Initialize all characters as "hidden"
    );
    
    const index = useRef(0);
    const timeout = useRef(null);
    const hasCompleted = useRef(false);

    useEffect(() => {
        setVisibleText(text.split("").map(() => "hidden"));
        index.current = 0;
        hasCompleted.current = false;

        const revealNextCharacter = () => {
            if (index.current >= text.length) {
                if (!hasCompleted.current && onComplete) {
                    hasCompleted.current = true;
                    onComplete();
                }
                return;
            }

            const currentIndex = index.current;

            setVisibleText((prev) => {
                const next = [...prev];
                next[currentIndex] = "visible";
                return next;
            });

            index.current += 1;
            timeout.current = setTimeout(revealNextCharacter, typingSpeed);
        };

        timeout.current = setTimeout(revealNextCharacter, typingSpeed);

        return () => clearTimeout(timeout.current);
    }, [text, typingSpeed, onComplete]);

    return (
        <p>
            {text.split("").map((char, i) => (
                <span key={i} className={visibleText[i]}>{char}</span>
            ))}
        </p>
    );
};

export default TypeWriter;
 