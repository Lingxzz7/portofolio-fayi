import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Instagram, Linkedin, Mail, User, MessageCircle, Send, ExternalLink, Code, Cpu, Network, Monitor, X, ChevronLeft, ChevronRight, Star, Calendar, Quote, Zap, Coffee, Heart, Eye, GitBranch, Users, Award } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [glitchActive, setGlitchActive] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [projectFilter, setProjectFilter] = useState('All');
  const [konami, setKonami] = useState([]);
  const [easterEgg, setEasterEgg] = useState(false);
  const [githubStats, setGithubStats] = useState(null);

  const fullText = "Hi, I'm Fayi";
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  // Mock GitHub stats
  const mockGithubStats = {
    totalRepos: 12,
    totalStars: 45,
    totalCommits: 234,
    totalPRs: 18,
    topLanguages: [
      { name: 'JavaScript', percentage: 45 },
      { name: 'HTML', percentage: 25 },
      { name: 'CSS', percentage: 20 },
      { name: 'Python', percentage: 10 }
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      let index = 0;
      const typingTimer = setInterval(() => {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(typingTimer);
          // Trigger glitch effect occasionally
          setTimeout(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 500);
          }, 2000);
        }
      }, 100);
      return () => clearInterval(typingTimer);
    }
  }, [isLoading]);

  // Konami code easter egg
  useEffect(() => {
    const handleKeyDown = (e) => {
      const newKonami = [...konami, e.code].slice(-konamiCode.length);
      setKonami(newKonami);
      
      if (JSON.stringify(newKonami) === JSON.stringify(konamiCode)) {
        setEasterEgg(true);
        setTimeout(() => setEasterEgg(false), 3000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konami]);

  // Load GitHub stats
  useEffect(() => {
    setTimeout(() => {
      setGithubStats(mockGithubStats);
    }, 1000);
  }, []);

  const skills = [
    { name: 'Merakit PC', level: 85, icon: <Monitor className="w-5 h-5" /> },
    { name: 'HTML, CSS, JavaScript', level: 75, icon: <Code className="w-5 h-5" /> },
    { name: 'Tailwind CSS', level: 70, icon: <Cpu className="w-5 h-5" /> },
    { name: 'Jaringan Komputer', level: 80, icon: <Network className="w-5 h-5" /> }
  ];

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

  const timeline = [
    {
      year: "2024",
      title: "Started Web Development Journey",
      description: "Mulai belajar HTML, CSS, dan JavaScript secara intensif"
    },
    {
      year: "2024",
      title: "Network System Experience",
      description: "3 bulan hands-on experience sebagai Network System"
    },
    {
      year: "2024",
      title: "First Portfolio Project",
      description: "Membuat portfolio pertama dengan teknologi modern"
    },
    {
      year: "2024",
      title: "SMK Cyber Media",
      description: "Bergabung dengan SMK Cyber Media Jakarta Selatan"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      text: "Fayi menunjukkan dedikasi luar biasa dalam setiap project. Kemampuan teknisnya sangat impressive untuk seorang siswa!",
      rating: 5
    },
    {
      name: "Ahmad Rahman",
      role: "Senior Developer",
      text: "Fresh perspective dan eagerness to learn yang dimiliki Fayi membuatnya stand out. Excited to see his growth!",
      rating: 5
    },
    {
      name: "Linda Chen",
      role: "Tech Lead",
      text: "Great communication skills dan problem-solving ability. Fayi is definitely someone to watch in the tech space.",
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: "Getting Started with Tailwind CSS",
      excerpt: "Learn how to set up and use Tailwind CSS in your next project...",
      date: "2024-01-15",
      readTime: "5 min read"
    },
    {
      title: "Building Responsive Layouts",
      excerpt: "Tips and tricks for creating responsive web layouts that work on all devices...",
      date: "2024-01-10",
      readTime: "7 min read"
    },
    {
      title: "JavaScript ES6 Features",
      excerpt: "Essential ES6 features every developer should know...",
      date: "2024-01-05",
      readTime: "6 min read"
    }
  ];

  const filteredProjects = projectFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === projectFilter);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate EmailJS
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % projects.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Easter Egg Notification */}
      {easterEgg && (
        <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-lg shadow-lg animate-bounce">
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-bold">Konami Code Activated! 🎮</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              FAYI.DEV
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Timeline', 'Testimonials', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-4 py-2 transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80"></div>
        {/* Interactive Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse cursor-pointer hover:scale-150 transition-transform"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
              onClick={() => {
                // Easter egg: clicking particles
                const colors = ['bg-cyan-400', 'bg-purple-400', 'bg-pink-400', 'bg-green-400'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                const particle = document.createElement('div');
                particle.className = `absolute w-2 h-2 ${randomColor} rounded-full animate-ping`;
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                document.body.appendChild(particle);
                setTimeout(() => particle.remove(), 1000);
              }}
            ></div>
          ))}
        </div>
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${glitchActive ? 'animate-pulse' : ''}`}>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Passionate Tech Enthusiast & Aspiring Developer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50"
            >
              <span className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>View My Work</span>
              </span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Passionate Tech Enthusiast & Aspiring Developer from SMK Cyber Media Jakarta Selatan. 
                  Dengan 3 bulan pengalaman hands-on sebagai Network System, saya menggabungkan pemahaman 
                  mendalam tentang infrastruktur IT dengan skills pemrograman modern.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  Saya percaya teknologi adalah tools untuk menciptakan solusi inovatif - dari merakit PC 
                  hingga membangun web applications yang user-friendly. Always eager to learn, adapt, 
                  and contribute to meaningful projects!
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-cyan-400">{skill.icon}</div>
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* GitHub Stats */}
          {githubStats && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-cyan-400 mb-8">GitHub Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-xl border border-cyan-500/20 text-center">
                  <div className="text-cyan-400 mb-2"><GitBranch className="w-8 h-8 mx-auto" /></div>
                  <div className="text-2xl font-bold text-white">{githubStats.totalRepos}</div>
                  <div className="text-gray-400 text-sm">Repositories</div>
                </div>
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-xl border border-cyan-500/20 text-center">
                  <div className="text-cyan-400 mb-2"><Star className="w-8 h-8 mx-auto" /></div>
                  <div className="text-2xl font-bold text-white">{githubStats.totalStars}</div>
                  <div className="text-gray-400 text-sm">Stars</div>
                </div>
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-xl border border-cyan-500/20 text-center">
                  <div className="text-cyan-400 mb-2"><Code className="w-8 h-8 mx-auto" /></div>
                  <div className="text-2xl font-bold text-white">{githubStats.totalCommits}</div>
                  <div className="text-gray-400 text-sm">Commits</div>
                </div>
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-xl border border-cyan-500/20 text-center">
                  <div className="text-cyan-400 mb-2"><Users className="w-8 h-8 mx-auto" /></div>
                  <div className="text-2xl font-bold text-white">{githubStats.totalPRs}</div>
                  <div className="text-gray-400 text-sm">Pull Requests</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-xl border border-cyan-500/20">
                <h4 className="text-lg font-semibold text-white mb-4">Top Languages</h4>
                <div className="space-y-3">
                  {githubStats.topLanguages.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300">{lang.name}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-800 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full"
                            style={{ width: `${lang.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-cyan-400 text-sm">{lang.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-gray-900/50 p-2 rounded-full border border-cyan-500/20">
              {['All', 'Web Development', 'Portfolio'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setProjectFilter(filter)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    projectFilter === filter
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-cyan-500/20 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    {project.type === 'live' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-cyan-500/20 rounded-full hover:bg-cyan-500/30 transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5 text-cyan-400" />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
                    />
                  )}
                  {project.type === 'gallery' ? (
                    <button
                      onClick={() => openLightbox(0)}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Gallery</span>
                    </button>
                  ) : project.type === 'live' ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    >
                      <span>View Live</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-600/50 text-gray-300 font-semibold rounded-full">
                      <span>Concept Project</span>
                    </div>
                  )}
                </div>
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Timeline Section */}
      <section id="timeline" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            My Journey
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-cyan-400 font-bold text-lg">{item.year}</span>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"></div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-xl border border-cyan-500/20">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            What People Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-cyan-400 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-200 italic mb-4">"{testimonial.text}"</p>
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{testimonial.name}</span>
                  <span className="text-gray-400 text-sm">- {testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section id="blog" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Blog & Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-cyan-500/20 shadow-lg space-y-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-cyan-400 font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-black/60 border border-cyan-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-all duration-300"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-cyan-400 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-black/60 border border-cyan-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-all duration-300"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-cyan-400 font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="bg-black/60 border border-cyan-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-all duration-300"
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Send className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
            {submitStatus === 'success' && (
              <div className="text-green-400 text-center font-semibold mt-4">Message sent successfully!</div>
            )}
            {submitStatus === 'error' && (
              <div className="text-red-400 text-center font-semibold mt-4">Failed to send message. Please try again.</div>
            )}
          </form>
        </div>
      </section>
      {/* Lightbox for Gallery */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <button
            className="absolute top-8 right-8 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <img
            src={projects[currentImage].image}
            alt={projects[currentImage].title}
            className="max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl border-4 border-cyan-500/30"
          />
          <button
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition"
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
      {/* Footer */}
      <footer className="py-8 bg-black/90 border-t border-cyan-500/20 text-center text-gray-400 text-sm">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://mail.google.com/mail/?view=cm&to=fayiadli@gmail.com" target="_blank" title="Open Gmail to send email">
            <i data-lucide="mail"></i>
          </a>
          <a href="mailto:fayiadli@gmail.com" title="Open your default email app">
            <i data-lucide="mail"></i>
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition"><Github className="w-5 h-5 inline" /></a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition"><Linkedin className="w-5 h-5 inline" /></a>
          <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition"><Instagram className="w-5 h-5 inline" /></a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Fayi. Made with <Heart className="w-4 h-4 inline text-pink-500" /> in Jakarta.
        </div>
      </footer>
    </div>
  );
};

export default Portfolio; 