<img src="/project-kopi.png" alt="Kopi Project">
<video autoplay muted loop id="bg-video">
  <source src="/background.mp4" type="video/mp4" />
</video>

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

{project.image && (
  <img
    src={project.image}
    alt={project.title}
    className="w-full rounded-xl mb-4 object-cover max-h-56"
    style={{ maxHeight: 220 }}
  />
)}
{project.video && (
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

if (project.type === 'image' && project.image) {
  mediaHtml = `<img src="${project.image}" alt="${project.title}" loading="lazy">`;
} else if (project.type === 'video' && project.video) {
  mediaHtml = `<video src="${project.video}" autoplay loop muted playsinline controls style="width:100%;border-radius:1em;margin-bottom:1em;object-fit:cover;max-height:180px;"></video>`;
} 