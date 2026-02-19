import React, { useEffect, useRef } from "react";

function ScrollPhaseSection({ children, className = "" }) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) {
            return;
        }

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotion) {
            section.style.opacity = "1";
            section.style.transform = "translate3d(0, 0, 0)";
            return;
        }

        let rafId = null;

        const updatePhase = () => {
            rafId = null;
            const rect = section.getBoundingClientRect();
            const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));

            const opacity = 1 - progress * 0.9;
            const translateY = -progress * 80;
            const scale = 1 - progress * 0.06;

            section.style.opacity = String(opacity);
            section.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
        };

        const onScroll = () => {
            if (rafId === null) {
                rafId = window.requestAnimationFrame(updatePhase);
            }
        };

        updatePhase();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (rafId !== null) {
                window.cancelAnimationFrame(rafId);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className={`phase-section ${className}`.trim()}>
            {children}
        </section>
    );
}

export default ScrollPhaseSection;
