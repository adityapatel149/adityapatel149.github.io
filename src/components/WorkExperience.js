import React from 'react';
import onClickUrl from '../OnClickUrl'
const experiences = [
    {
        date: "Sep 2025 - Nov 2025",
        location: "San Jose, CA",
        role: "Instructional Student Assistant",
        company: "San Jose State University",
        logo: "/images/meta.png", // Replace with actual logo paths
        points: [
            "Evaluated programming assignments / projects in C++ for 3D Computer Game design, ensuring code correctness, efficiency, and adherence to guidelines.",
            "Provided constructive feedback to help students improve coding practices and problem-solving skills.",
            "Collaborated with the instructor to refine grading rubrics and identify common learning challenges."
        ]
    },
    {
        date: "Dec 2023 - June 2024",
        location: "Vadodara, India",
        role: "UI/UX Intern",
        company: "Groflex Technologies Pvt. Ltd.",
        logo: "/images/meta.png",
        points: [
            "Conducted usability tests with 20+ participants, and improved task completion rates by 25%.",
            "Conceptualized and developed responsive web pages for the company website using HTML, CSS, JavaScript, and used Trello for team and product management.",
            "Managed web content with WordPress and produced engaging product media in Adobe After Effects, Photoshop, and Figma."
        ]
    },
    {
        date: "June 2023 - Oct 2023",
        role: "Product Engineer (UI/UX)",
        company: "Electrum IT Solutions",
        location: "Vadodara, India",
        logo: "/images/meta.png",
        points: [
            "Conducted user research through surveys and interviews, informing the design process.",
            "Produced wireframes, interactive prototypes, and high fidelity UI designs with tools like Figma and Adobe Creative Suite.",
            "Collaborated with cross-functional teams to translate user requirements into effective design solutions."
        ]
    },
    {
        date: "Feb 2023 - May 2023",
        role: "UI/UX ENGINEER INTERN",
        company: "Electrum IT Solutions",
        location: "Vadodara, India",
        logo: "/images/meta.png",
        points: [
            "During the internship, contributed to wireframe, prototype, and UI design creation.",
            "Worked closely with senior designers to enhance design concepts and implement responsive design principles."
        ]
    },
    {
        date: "Jun 2022 - Jul 2022",
        role: "Web Development INTERN",
        company: "BrainyBeam Technologies Pvt. Ltd.",
        location: "Ahmedabad, India",
        logo: "/images/meta.png",
        points: [
            "Conceptualized and built Product Sales Manager for vendors to integrate the inventory and product sales.",
            "Built using Django, Python, HTML, CSS and Javascript."
        ]
    }
];

// Helper Component for the Location Pin SVG
const LocationIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0003 27.9971C14.3162 26.5606 12.7552 24.9858 11.3337 23.2891C9.20033 20.7411 6.66699 16.9465 6.66699 13.3305C6.6651 9.55387 8.93932 6.14832 12.4284 4.703C15.9175 3.25768 19.9338 4.05746 22.603 6.72914C24.3583 8.47661 25.3415 10.8537 25.3337 13.3305C25.3337 16.9465 22.8003 20.7411 20.667 23.2891C19.2454 24.9858 17.6844 26.5606 16.0003 27.9971ZM16.0003 9.33047C14.5713 9.33047 13.2508 10.0929 12.5362 11.3305C11.8217 12.5681 11.8217 14.0929 12.5362 15.3305C13.2508 16.5681 14.5713 17.3305 16.0003 17.3305C18.2095 17.3305 20.0003 15.5396 20.0003 13.3305C20.0003 11.1213 18.2095 9.33047 16.0003 9.33047Z" />
    </svg>
);

// Helper Component for the Timeline Dot SVG
const TimelineDot = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 21.25C11.5482 21.25 8.75 18.4518 8.75 15C8.75 11.5482 11.5482 8.75 15 8.75C18.4518 8.75 21.25 11.5482 21.25 15C21.25 18.4518 18.4518 21.25 15 21.25Z" />
    </svg>
);

export default function WorkExperience() {
    return (
        <section className="work-experience section-container">
            <div className="title-and-icon">
                <h2>Work Experience</h2>
                <div className="social">
                    <i
                        class="fa-brands fa-linkedin fa-3x"
                        onClick={onClickUrl("https://linkedin.com/in/adityapatel149")}
                    >↗</i>
                </div>
            </div>
            <div className="content-container">
                {experiences.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-line">
                            <div className="dot">
                                <TimelineDot />
                            </div>
                            {/* Only show the line if it's not the last item */}
                            {index !== experiences.length - 1 && (
                                <div className="divider">
                                    <div className="line" />
                                </div>
                            )}
                        </div>

                        <div className="timeline-item-content">
                            <div className="date-time">
                                <div>
                                    <p>{item.date}</p>
                                </div>
                                <div className="location">
                                    <LocationIcon />
                                    <p>{item.location}</p>
                                </div>
                            </div>

                            <div className="item-description">
                                <div className="item-header">
                                    <img src={item.logo} alt={`${item.company} logo`} />
                                    <div className="item-name">
                                        <p className="subtitle">{item.role}</p>
                                        <p className="title">{item.company}</p>
                                    </div>
                                </div>
                                <ul>
                                    {item.points.map((point, i) => (
                                        <li key={i}>
                                            <p>{point}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}