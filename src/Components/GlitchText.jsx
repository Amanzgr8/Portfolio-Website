import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./GlitchText.css";

function GlitchText({ text, as: Tag = "span", className = "", id, hoverOnly = false, baseOnly = false, enabled = true, intensity = "normal", children }) {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) {
            return;
        }

        const baseLayer = wrapper.querySelector(".glitch-base");
        const redLayer = wrapper.querySelector(".glitch-layer-red");
        const blueLayer = wrapper.querySelector(".glitch-layer-blue");
        const allLayers = [baseLayer, redLayer, blueLayer].filter(Boolean);
        const intensityScale = intensity === "high" ? 1.8 : 1;
        const split = Math.round(1 * intensityScale);

        const timeline = gsap.timeline({
            repeat: -1,
            repeatDelay: 1.6,
            paused: hoverOnly || !enabled
        });

        timeline
            .set(allLayers, {
                x: 0,
                y: 0,
                opacity: 0,
                skewX: 0,
                textShadow: "0 0 0 rgba(0,0,0,0)",
                clipPath: "inset(0 0 0 0)"
            })
            .set(baseLayer, { opacity: 1 })
            .to(baseLayer, {
                duration: 0.06,
                x: 1.5 * intensityScale,
                skewX: 2 * intensityScale,
                textShadow: `-${split}px 0 #ff4d6d, ${split}px 0 #4da6ff`,
                ease: "power1.inOut"
            })
            .to(baseLayer, {
                duration: 0.04,
                x: 0,
                y: 0,
                skewX: 0,
                textShadow: "0 0 0 rgba(0,0,0,0)",
                ease: "power1.out"
            });

        if (!baseOnly) {
            timeline
            .to(redLayer, {
                duration: 0.06,
                opacity: 0.65,
                x: -3 * intensityScale,
                y: -1 * intensityScale,
                skewX: -7 * intensityScale,
                clipPath: "inset(8% 0 58% 0)",
                ease: "power1.inOut"
            })
            .to(blueLayer, {
                duration: 0.06,
                opacity: 0.6,
                x: 3 * intensityScale,
                y: 1 * intensityScale,
                skewX: 7 * intensityScale,
                clipPath: "inset(52% 0 12% 0)",
                ease: "power1.inOut"
            }, "<")
            .to(baseLayer, {
                duration: 0.06,
                x: 1.5 * intensityScale,
                skewX: 2 * intensityScale,
                textShadow: `-${split}px 0 #ff4d6d, ${split}px 0 #4da6ff`,
                ease: "power1.inOut"
            }, "<")
            .to([baseLayer, redLayer, blueLayer], {
                duration: 0.04,
                x: 0,
                y: 0,
                skewX: 0,
                textShadow: "0 0 0 rgba(0,0,0,0)",
                clipPath: "inset(0 0 0 0)",
                ease: "power1.out"
            })
            .set(baseLayer, { opacity: 1 })
            .to(redLayer, {
                duration: 0.05,
                opacity: 0.55,
                x: 2 * intensityScale,
                y: 0,
                clipPath: "inset(20% 0 35% 0)",
                ease: "power1.inOut"
            })
            .to(blueLayer, {
                duration: 0.05,
                opacity: 0.5,
                x: -2 * intensityScale,
                y: 0,
                clipPath: "inset(42% 0 18% 0)",
                ease: "power1.inOut"
            }, "<")
            .to(baseLayer, {
                duration: 0.05,
                x: -1.5 * intensityScale,
                skewX: -2 * intensityScale,
                textShadow: `${split}px 0 #ff4d6d, -${split}px 0 #4da6ff`,
                ease: "power1.inOut"
            }, "<")
            .to([redLayer, blueLayer], {
                duration: 0.05,
                opacity: 0,
                x: 0,
                clipPath: "inset(0 0 0 0)",
                ease: "power1.out"
            })
            .to(baseLayer, {
                duration: 0.05,
                x: 0,
                skewX: 0,
                textShadow: "0 0 0 rgba(0,0,0,0)",
                ease: "power1.out"
            });
            }

        const handleMouseEnter = () => {
            if (!hoverOnly || !enabled) {
                return;
            }
            timeline.play(0);
        };

        const handleMouseLeave = () => {
            if (!hoverOnly) {
                return;
            }
            timeline.pause(0);
            gsap.set(allLayers, {
                x: 0,
                y: 0,
                skewX: 0,
                textShadow: "0 0 0 rgba(0,0,0,0)",
                clipPath: "inset(0 0 0 0)"
            });
            gsap.set(baseLayer, { opacity: 1 });
            if (!baseOnly) {
                gsap.set([redLayer, blueLayer], { opacity: 0 });
            }
        };

        wrapper.addEventListener("mouseenter", handleMouseEnter);
        wrapper.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            wrapper.removeEventListener("mouseenter", handleMouseEnter);
            wrapper.removeEventListener("mouseleave", handleMouseLeave);
            timeline.kill();
        };
    }, [text, hoverOnly, baseOnly, enabled, intensity]);

    return (
        <Tag ref={wrapperRef} id={id} className={`glitch ${className}`.trim()} aria-label={text}>
            <span className="glitch-base">{children || text}</span>
            {!baseOnly && <span className="glitch-layer glitch-layer-red" aria-hidden="true">{text}</span>}
            {!baseOnly && <span className="glitch-layer glitch-layer-blue" aria-hidden="true">{text}</span>}
        </Tag>
    );
}

export default GlitchText;
