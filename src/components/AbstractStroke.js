import { useEffect, useRef, useState } from "react";

export default function AbstractStroke() {
    const pathRef = useRef(null);
    const gradientRef = useRef(null);
    const svgRef = useRef(null);
    const flowOffset = useRef(0);
    const lastScrollY = useRef(window.scrollY);

    const [darkMode, setDarkMode] = useState(
        document.documentElement.getAttribute("data-theme") === "dark"
    );

    useEffect(() => {
        // Observe theme changes
        const observer = new MutationObserver(() => {
            setDarkMode(document.documentElement.getAttribute("data-theme") === "dark");
        });
        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const path = pathRef.current;
        const length = path.getTotalLength();

        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;

        const onScroll = () => {
            const scrollY = window.scrollY;
            const deltaY = scrollY - lastScrollY.current;

            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollY / maxScroll, 1);

            // Reveal stroke
            path.style.strokeDashoffset = length * (1 - progress) - flowOffset.current;

            // Left-right oscillation
            const amplitude = 30;
            const frequency = 0.0015;
            const xOffset = Math.sin(scrollY * frequency) * amplitude;
            if (svgRef.current) svgRef.current.style.transform = `translateX(${xOffset}px)`;

            // Gradient vertical flow
            if (gradientRef.current) {
                gradientRef.current.setAttribute(
                    "gradientTransform",
                    `translate(0, ${-scrollY * 0.3})`
                );
            }

            // Continuous stroke flow
            const flowSpeed = 0.75;
            flowOffset.current += deltaY * (flowSpeed / 16);
            if (flowOffset.current > length) flowOffset.current = 0;
            if (flowOffset.current < 0) flowOffset.current = length;

            lastScrollY.current = scrollY;
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const gradientColors = darkMode
        ? ["#ff6ec4", "#ff87d1", "#7873f5", "#9b8df5", "#4ade80", "#6ee7b7", "#ff6ec4"] // vivid neon for dark mode
        : ["#ff85c1", "#ff9ccf", "#9b8df5", "#b5aaff", "#6ee7b7", "#85f3c4", "#ff85c1"]; // lighter for light mode
    // Blur strength for glow
    const blurStd = darkMode ? 20 : 20;

    return (
        <svg
            ref={svgRef}
            className="abstract-stroke"
            viewBox="0 0 600 3200"
            preserveAspectRatio="none"
        >
            <defs>
                {/* Gradient for stroke */}
                <linearGradient
                    id="strokeGradient"
                    ref={gradientRef}
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="3200"
                >
                    {gradientColors.map((color, index) => (
                        <stop
                            key={index}
                            offset={`${(index / (gradientColors.length - 1)) * 100}%`}
                            stopColor={color}
                        />
                    ))}
                </linearGradient>

                {/* Glow from blurred stroke */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={blurStd} result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <path
                ref={pathRef}
                d="
          M300 0
          C 100 400, 500 800, 300 1200
          C 100 1600, 500 2000, 300 2600
          C 200 2800, 400 3000, 300 3200
        "
                fill="none"
                stroke="url(#strokeGradient)"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
            />
        </svg>
    );
}
