import React, { useCallback, useState } from "react";
import GlitchText from "./GlitchText";
import TypeWriter from "./TypeWriter";

function TypewriterGlitchText({
    text,
    as,
    className,
    id,
    typingSpeed = 80,
    hoverOnly = true,
    baseOnly = false,
    intensity = "normal"
}) {
    const [typingDone, setTypingDone] = useState(false);

    const handleComplete = useCallback(() => {
        setTypingDone(true);
    }, []);

    return (
        <GlitchText
            text={text}
            as={as}
            className={className}
            id={id}
            hoverOnly={hoverOnly}
            baseOnly={baseOnly}
            enabled={typingDone}
            intensity={intensity}
        >
            <TypeWriter text={text} typingSpeed={typingSpeed} onComplete={handleComplete} />
        </GlitchText>
    );
}

export default TypewriterGlitchText;
