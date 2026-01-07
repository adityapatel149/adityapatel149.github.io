import React from 'react';
import onClickUrl from "../OnClickUrl";

const projectsData = [
  {
    title: "Theia Sense",
    subtitle: "Personalized Image Curation Based on Aesthetics",
    date: "July 2025",
    url: "https://theia-sense.wonderfulbush-e3ed6434.westus3.azurecontainerapps.io/", // Add Demo link here
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
    url: "https://github.com/adityapatel149/yolo-streamlit", // Add Demo/Github link here
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
        url: "https://github.com/adityapatel149/Image2PointCloud", // Add Github link here
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
        url: "#", // Add Github link here
        image: "/images/rag-chat.png",
        points: [
            "Designed a multimodal RAG pipeline using LangChain, Chromadb, and Unstructured. ",
            "Integrated GPT-4 with vision and GROQ to perform deep document understanding of complex PDF elements. "
        ]
    },

  {
    title: "Simulating SLAM from scratch",
    subtitle: "Python-based Robotics Simulation",
    date: "Mar 2025",
    url: "https://github.com/adityapatel149/chat-with-pdf", // Add Github link here
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
    url: "#",
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
    url: "https://github.com/adityapatel149/synthetic-model-generation", // Add Github link here
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
  }
];

export default function LatestProjects() {
    return (
        <section className="latest-projects section-container">
            <h2>Latest Projects</h2>
            <div className="content-container-horizontal">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="project"
                        onClick={onClickUrl(project.url)}
                        role="button"
                        tabIndex={0} // Improves accessibility
                    >
                        <img src={project.image} alt={`${project.title} thumbnail`} />
                        <div className="project-content">
                            <h4>{project.title}</h4>
                            <p>{project.points}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}