import React from 'react';

const educationData = [
    {
        date: "Always",
        badge: true,
        location: "Everywhere",
        degree: "Self-learner",
        institution: "From each job, class, article, co-worker, book, or life experiences",
        logo: "/images/meta.png",
        description: "This is how I learnt most of the things I know and how I improve it. At the moment, I am learning Computer Vision, Cloud Deployment and Product Design."
    },
    {
        date: "Present",
        badge: true,
        location: "San Jose, CA",
        degree: "Master of Science in Computer Science",
        institution: "San Jose State University",
        logo: "/images/meta.png",
        description: "Currently enrolled in San Jose State University to pursue a master's degree in Computer Science."
    },
    {
        date: "2019 - 2023",
        badge: false,
        location: "Vadodara, India",
        degree: "COMPUTER SCIENCE & ENGINEERING, BACHELOR OF ENGINEERING (B.E.)",
        institution: "Babaria Institute of Technology & Science",
        logo: "/images/meta.png",
        description: "I studied my bachelor degree in this college. This is where I learnt Engineering subjects, Programming, Web Development, Database Management, Computer Architecture, and Networking. CGPA: 9.4/10"
    }
];

const LocationIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0003 27.9971C14.3162 26.5606 12.7552 24.9858 11.3337 23.2891C9.20033 20.7411 6.66699 16.9465 6.66699 13.3305C6.6651 9.55387 8.93932 6.14832 12.4284 4.703C15.9175 3.25768 19.9338 4.05746 22.603 6.72914C24.3583 8.47661 25.3415 10.8537 25.3337 13.3305C25.3337 16.9465 22.8003 20.7411 20.667 23.2891C19.2454 24.9858 17.6844 26.5606 16.0003 27.9971ZM16.0003 9.33047C14.5713 9.33047 13.2508 10.0929 12.5362 11.3305C11.8217 12.5681 11.8217 14.0929 12.5362 15.3305C13.2508 16.5681 14.5713 17.3305 16.0003 17.3305C18.2095 17.3305 20.0003 15.5396 20.0003 13.3305C20.0003 11.1213 18.2095 9.33047 16.0003 9.33047Z" />
    </svg>
);

const TimelineDot = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 21.25C11.5482 21.25 8.75 18.4518 8.75 15C8.75 11.5482 11.5482 8.75 15 8.75C18.4518 8.75 21.25 11.5482 21.25 15C21.25 18.4518 18.4518 21.25 15 21.25Z" />
    </svg>
);

export default function Education() {
    return (
        <section className="education section-container">
            <h2>Education</h2>
            <div className="content-container">
                {educationData.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-line">
                            <div className="dot">
                                <TimelineDot />
                            </div>
                            {/* Only show vertical line if not the last item */}
                            {index !== educationData.length - 1 && (
                                <div className="divider">
                                    <div className="line" />
                                </div>
                            )}
                        </div>

                        <div className="timeline-item-content">
                            <div className="date-time">
                                {item.badge ? (
                                    <div className="badge">
                                        <p>{item.date}</p>
                                    </div>
                                ) : (
                                    <p>{item.date}</p>
                                )}

                                <div className="location">
                                    <LocationIcon />
                                    <p>{item.location}</p>
                                </div>
                            </div>

                            <div className="item-description">
                                <div className="item-header">
                                    <img src={item.logo} alt="Institution Logo" />
                                    <div className="item-name">
                                        <p className="subtitle">{item.degree}</p>
                                        <p className="title">{item.institution}</p>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <p>{item.description}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}