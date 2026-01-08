import React, { useState} from 'react';
import onClickUrl from "../OnClickUrl";

const projectsData = [
    {
        title: "Theia Sense",
        subtitle: "Personalized Image Curation Based on Aesthetics",
        date: "July 2025",
        url: "https://theia-sense.wonderfulbush-e3ed6434.westus3.azurecontainerapps.io/",
        image: "/images/theia-sense.png",
        points: [
            "Architected a full-stack, cloud microservice application with a decoupled FastAPI backend and dedicated ML inference service. ",
            "Optimized model for production by converting to ONNX Runtime, reducing final container image size by 75%. ",
            "Deployed using Docker on Azure Container Apps and Huggingface Spaces for independent service scaling. "
        ]
    },
    {
        title: "YOLO11 Real-Time CV App",
        subtitle: "Object Detection, Segmentation & Pose Estimation",
        date: "Feb 2025",
        url: "https://github.com/adityapatel149/yolo-streamlit",
        image: "/images/cv-app.png",
        points: [
            "Deployed a YOLO11-powered application for real-time detection and pose estimation for images/videos. ",
            "Reduced latency by 30% through inference optimization and video processing pipeline enhancements. ",
            "Built interactive web app on Streamlit Cloud for real-time user engagement. "
        ]
    },
    {
        title: "Image2PointCloud",
        subtitle: "3D Reconstruction from 2D Images",
        date: "Feb 2025",
        url: "https://github.com/adityapatel149/Image2PointCloud",
        image: "/images/reconstruction.png",
        points: [
            "Developed a 3D CV pipeline to generate point clouds and meshes without depth data using monocular depth estimation. ",
            "Implemented multi-view registration using Fast Global Registration, Point-to-Plane ICP, and BCPD. ",
            "Automated 3D mesh generation using Poisson surface reconstruction. "
        ]
    },
    {
        title: "VLM-Enhanced Multimodal RAG",
        subtitle: "Chat with PDF (Text, Images, Graphs)",
        date: "Jan 2025",
        url: "https://github.com/adityapatel149/chat-with-pdf",
        image: "/images/rag-chat.png",
        points: [
            "Designed a multimodal RAG pipeline using LangChain, Chromadb, and Unstructured. ",
            "Integrated GPT-4 with vision and GROQ to perform deep document understanding of complex PDF elements. "
        ]
    },

    {
        title: "RL agents for Highway-env",
        subtitle: "Multi-Agent RL Project",
        date: "2025",
        url: "https://github.com/adityapatel149/team7-agents",
        image: "/images/agents.png",
        points: [
            "Implemented multi-agent reinforcement learning algorithms for autonomous agents in simulated environments. "
        ]
    },
    {
        title: "Custom RL Environment",
        subtitle: "Custom RL Environment",
        date: "2025",
        url: "https://github.com/adityapatel149/team7-custom-env",
        image: "/images/custom-env.png",
        points: [
            "Designed and developed custom RL environments for testing multi-agent strategies. "
        ]
    },
    {
        title: "Simulating SLAM from scratch",
        subtitle: "Python-based Robotics Simulation",
        date: "Mar 2025",
        url: "https://github.com/adityapatel149/Simulating-LIDAR-from-floor-map",
        image: "/images/slam-sim.png",
        points: [
            "Designed and developed a simple 2D SLAM by simulating and generating 2D LiDAR data from floor maps. ",
            "Implemented point cloud feature extraction and data association from scratch for SLAM. "
        ]
    },
    {
        title: "Crowd and Flock Simulation",
        subtitle: "C++ & OpenFrameworks Graphics",
        date: "Feb 2025",
        url: "https://github.com/adityapatel149/flocking",
        image: "/images/flock-sim.png",
        points: [
            "Developed a 3D flock simulation utilizing physically based particle simulations in C++. ",
            "Utilized OpenFrameworks for creating graphics and programming simulations with varying parameter controls. "
        ]
    },
    {
        title: "GAN-Driven Weight Initialization",
        subtitle: "Synthetic Model Generation for Image Classification",
        date: "Nov 2024",
        url: "https://github.com/adityapatel149/synthetic-model-generation",
        image: "/images/gan-weights.png",
        points: [
            "Created a novel pipeline for synthetic model weight generation without pre-existing training data (88% accuracy). ",
            "Adapted CycleGAN architecture to generate custom CNN weights using pretrained filters as input. "
        ]
    },
    {
        title: "Wordle Clone",
        subtitle: "React.js & Redux Hooks",
        date: "Oct 2023",
        url: "https://wordle-adityapatel149.vercel.app",
        image: "/images/wordle.jpg",
        points: [
            "Deployed fully functional clone with over 300 active users.",
            "Optimized algorithms to decrease memory consumption by 30% and computation time by 65%. "
        ]
    },
    {
        title: "UI Design Collection",
        subtitle: "Fitness & Coffee Shop Apps",
        date: "Oct 2023",
        url: "https://dribbble.com/AdityaPatel149",
        image: "/images/ui-collection.png",
        points: [
            "Designed intuitive UIs focusing on user-friendly navigation, engaging visuals, and seamless functionality. "
        ]
    },
    {
        title: "Mood Snack Brand",
        subtitle: "Brand Design & Landing Page",
        date: "Oct 2023",
        url: "https://dribbble.com/shots/22873068-Brand-Design-and-Landing-Page-for-Snacks-brand-MOOD",
        image: "/images/mood-thumbnail.png",
        points: [
            "Developed unique brand identity including logo, packaging, and visual design. ",
            "Created a high-converting landing page to showcase products and drive engagement. "
        ]
    },
    {
        title: "3d-ball-bouncing-simulation",
        subtitle: "Physics Simulation in 3D",
        date: "2025",
        url: "https://github.com/adityapatel149/3d-ball-bouncing-simulation",
        image: "/images/ball-sim.png",
        points: [
            "Simulated 3D physics of bouncing balls with collision detection and response. "
        ]
    },
    {
        title: "blogs-redux",
        subtitle: "React Blog App with Redux",
        date: "2024",
        url: "https://github.com/adityapatel149/blogs-redux",
        image: "/images/blogs-redux.png",
        points: [
            "Developed a scalable React blog app with Redux for state management. "
        ]
    },
    {
        title: "Gradient-based-HMM",
        subtitle: "Hidden Markov Model Implementation",
        date: "2024",
        url: "https://github.com/adityapatel149/Gradient-based-HMM",
        image: "/images/hmm.png",
        points: [
            "Implemented gradient-based Hidden Markov Models for sequence prediction tasks. "
        ]
    },
    {
        title: "binary-classifier-CNN",
        subtitle: "CNN-based Binary Classification",
        date: "2024",
        url: "https://github.com/adityapatel149/binary-classifier-CNN",
        image: "/images/binary-cnn.png",
        points: [
            "Trained CNNs for binary image classification with data augmentation and optimization. "
        ]
    },
    {
        title: "caesar-cipher-HMM",
        subtitle: "Cipher Decryption with HMM",
        date: "2024",
        url: "https://github.com/adityapatel149/caesar-cipher-HMM",
        image: "/images/caesar-hmm.png",
        points: [
            "Decrypted Caesar ciphered text using Hidden Markov Model approaches. "
        ]
    },
    {
        title: "AstroSling",
        subtitle: "Physics-based Game",
        date: "2023",
        url: "https://github.com/adityapatel149/AstroSling",
        image: "/images/astrosling.png",
        points: [
            "Created a physics-based game using 2D projectile mechanics and interactive graphics. "
        ]
    },
    {
        title: "Enhanced-Product-Sales-Manager",
        subtitle: "Inventory & Sales Management App",
        date: "2023",
        url: "https://github.com/adityapatel149/Enhanced-Product-Sales-Manager",
        image: "/images/sales-manager.png",
        points: [
            "Developed a full-stack sales and inventory management app with analytics dashboard. "
        ]
    },
    {
        title: "imagesearcher",
        subtitle: "Image Search Engine",
        date: "2023",
        url: "https://github.com/adityapatel149/imagesearcher",
        image: "/images/image-searcher.png",
        points: [
            "Implemented a search engine for images with filtering and ranking functionalities. "
        ]
    },
    {
        title: "youtube-app",
        subtitle: "React YouTube Clone",
        date: "2023",
        url: "https://github.com/adityapatel149/youtube-app",
        image: "/images/youtube-app.png",
        points: [
            "Built a React-based YouTube clone with video playback and subscription features. "
        ]
    },
    {
        title: "connect4",
        subtitle: "Classic Connect 4 Game",
        date: "2023",
        url: "https://github.com/adityapatel149/connect4",
        image: "/images/connect4.png",
        points: [
            "Developed a fully playable Connect 4 game with AI opponent. "
        ]
    }
];

export default function LatestProjects() {
    const [showAll, setShowAll] = useState(false);

    // Show top 12 if showAll is false, else show all
    const displayedProjects = showAll ? projectsData : projectsData.slice(0, 12);

    return (
        <section className="latest-projects section-container">
            <div className="title-and-icon"> 
                <h2>Latest Projects</h2>
                <div className="social">
                    <i
                        class="fa-brands fa-github fa-3x"
                        onClick={onClickUrl("https://github.com/adityapatel149")}
                    >↗</i>
                    </div>
            </div>
            <div className="content-container-horizontal">
                {displayedProjects.map((project, index) => (
                    <div
                        key={index}
                        className="project"
                        onClick={onClickUrl(project.url)}
                        role="button"
                        tabIndex={0} // Accessibility
                    >
                        <img src={project.image} alt={`${project.title} thumbnail`} />
                        <div className="project-content">
                            <h4>{project.title}</h4>
                            <ul>
                                {project.points.map((point, idx) => (
                                    <p key={idx}>{point}</p>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {projectsData.length > 12 && (
                <div className="see-all-container">
                    <button className="primary-button" onClick={() => setShowAll(!showAll)}>
                        <div className="btn-inside">
                            <div className="btn-inside2">{showAll ? "Show Less" : "See All"}</div>
                        </div>
                    </button>
                </div>
                
            )}
        </section>
    );
}