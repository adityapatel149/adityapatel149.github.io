import React from "react"
export default function Skills() {
    const skillsData = [
        {
            category: "Languages",
            icon: "/svg/code.svg",
            iconClass: "development-icon",
            rows: [
                [
                    ["Python"], ["CUDA"], ["C", "C++"],
                ],
                [
                    ["Java"],
                    ["HTML", "CSS", "JavaScript"],[ "SQL"],
                ],
            ],
        },
        {
            category: "Frameworks & Libraries",
            icon: "/svg/code.svg",
            iconClass: "development-icon",
            rows: [
                [
                    ["React", "Redux", "Vue"],
                    ["Django", "FastAPI"],
                ],
                [
                    ["PyTorch", "TensorFlow", "Scikit-learn"],
                ],
                [
                    ["ONNX", "OpenCV", "Open3D"],
                ],
                [
                    ["LangChain", "Unstructured"],
                ],
            ],
        },
        {
            category: "Cloud & DevOps",
            icon: "/svg/code.svg",
            iconClass: "development-icon",
            rows: [
                [
                    ["AWS", "Microsoft Azure"],
                    ["Docker", "Kubernetes"],
                ],
                [
                    ["Git", "CI/CD"],
                    ["Huggingface Spaces"],
                ],
                [
                    ["MySQL", "PostgreSQL"],
                ],
            ],
        },
        {
            category: "Tools & Methodologies",
            icon: "/svg/code.svg",
            iconClass: "design-icon",
            rows: [
                [
                    ["Computer Vision", "Data Annotation"],
                    ["RAG", "Agile"],
                ],
                [
                    ["3D Reconstruction", "Point Cloud Processing"],
                ],
                [
                    ["Version Control", "JIRA", "Trello"],
                ],
                [
                    ["Visual Studio"],
                ],
            ],
        },
        {
            category: "Creative & Technical Tools",
            icon: "/svg/pallette.svg",
            iconClass: "design-icon",
            rows: [
                [
                    ["Figma", "Miro"],
                    ["Blender", "Unity"],
                ],
                [
                    ["Houdini", "Maya"],
                    ["OpenFrameworks"],
                ],
                [
                    ["Physically Based Rendering"],
                ],
                [
                    ["Adobe Illustrator", "Photoshop", "After Effects"],
                ],
            ],
        },
        {
            category: "UI / UX",
            icon: "/svg/pallette.svg",
            iconClass: "design-icon",
            rows: [
                [
                    ["Wireframing", "Prototyping"],
                    ["Usability Testing"],
                ],
                [
                    ["Interaction Design", "Journey Mapping"],
                ],
                [
                    ["Surveys", "A/B Testing"],
                ],
                [
                    ["UI/UX for AR/VR Applications"],
                ],
            ],
        },
    ];



    return (
        <section className="skills section-container">
            <h2>Skills</h2>

            {skillsData.map((category, index) => (
                <div className="skill-category" key={index}>
                    <div className="skill-header">
                        <div className={`icon-container ${category.iconClass}`}>
                            <img src={category.icon} alt="" />
                        </div>
                        <h4>{category.category}</h4>
                    </div>

                    <div className="skill-stack">
                        {category.rows.map((row, rowIndex) => (
                            <div
                                className={`stack-row ${row.length > 1 ? "collapse-row" : ""
                                    }`}
                                key={rowIndex}
                            >
                                {row.map((stack, stackIndex) => (
                                    <div className="skill" key={stackIndex}>
                                        {stack.map((item, itemIndex) => (
                                            <React.Fragment key={itemIndex}>
                                                <p>{item}</p>
                                                {itemIndex !== stack.length - 1 && (
                                                    <div className="skill-seperator"></div>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
