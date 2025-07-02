import React from "react";

const projects = [
  {
    id: 1,
    title: "Kopi Project",
    description: "Website project tentang kopi dengan desain modern dan clean.",
    image: "/project-kopi.png",
    type: "image",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    category: "Web Development"
  },
  {
    id: 2,
    title: "Portfolio Almeira",
    description: "Modern portfolio website dengan design yang clean dan responsive",
    link: "https://lingxzz7.github.io/portofolio-almeira/",
    type: "live",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Portfolio"
  },
  {
    id: 3,
    title: "KOPIKUY Video Project",
    description: "KOPIKUY website background video",
    video: "/kopikuy.mp4",
    type: "video",
    technologies: [],
    category: "Web Development"
  }
];

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        id="bg-video"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        playsInline
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 p-4 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">My Projects</h1>
        <div className="grid gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white bg-opacity-10 rounded-xl p-4 shadow-lg backdrop-blur-md">
              {/* Render image */}
              {project.type === "image" && project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-xl mb-4 object-cover max-h-56"
                  style={{ maxHeight: 220 }}
                  loading="lazy"
                />
              )}
              {/* Render video */}
              {project.type === "video" && project.video && (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full rounded-xl mb-4 object-cover max-h-56"
                  style={{ maxHeight: 220 }}
                  poster="/project-kopi.png"
                  onError={(e) => { e.target.poster = '/project-kopi.png'; e.target.controls = false; }}
                >
                  Sorry, your browser does not support embedded videos.
                </video>
              )}
              {/* Render live project link */}
              {project.type === "live" && project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-xl mb-4 bg-blue-500 text-white text-center py-2 font-semibold hover:bg-blue-600 transition"
                >
                  {project.title}
                </a>
              )}
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="mb-2 text-sm">{project.description}</p>
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-gray-800 bg-opacity-60 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <span className="text-xs text-gray-300">{project.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio; 