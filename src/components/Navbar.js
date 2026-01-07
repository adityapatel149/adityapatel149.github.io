import React from 'react';

const navLinks = [
    { name: "Home", target: "#home" },
    { name: "About", target: "#about" },
    { name: "Projects", target: "#projects" },
    { name: "Experience", target: "#experience" },
    { name: "Education", target: "#education" },
    { name: "Skills", target: "#skills" },
];

export default function Navbar() {
    const handleScroll = (e, target) => {
        e.preventDefault();

        // Calculate your navbar height (e.g., 80px) + some extra gap (20px)
        const offsetValue = -140;

        if (window.lenis) {
            window.lenis.scrollTo(target, {
                offset: offsetValue, // This pushes the scroll position up
                lerp: 0.06,
                duration: 1.2,
            });
        } else {
            // Fallback: This CSS property handles standard browser behavior
            const element = document.querySelector(target);
            if (element) {
                const top = element.getBoundingClientRect().top + window.scrollY + offsetValue;
                window.scrollTo({ top, behavior: "smooth" });
            }
        }
    };

    return (
        <nav className="navbar-pill">
            <ul className="nav-list">
                {navLinks.map((link) => (
                    <li key={link.name} className="nav-item">
                        <a
                            href={link.target}
                            className="nav-link"
                            onClick={(e) => handleScroll(e, link.target)}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}