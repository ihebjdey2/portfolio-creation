'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Code2, Zap, Globe } from 'lucide-react'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const experiences = [
  {
    title: 'Internship - Final Year Project',
    company: 'INVEEP',
    period: '01/2025 – 06/2025',
    description: 'TUNGO — National inter-urban transport platform',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Flutter', 'Docker', 'Jenkins'],
    highlights: [
      'Full-stack development: Backend API, Web supervision platform, Mobile apps',
      'Real-time features: Live tracking, notifications, multi-station supervision',
      'CI/CD pipeline with Docker, Jenkins, SonarQube, Prometheus/Grafana',
    ],
  },
  {
    title: 'Engineer Internship',
    company: 'SOTUDEV',
    period: '09/2024 – 11/2024',
    description: 'Mobile application for farmers with AI integration',
    technologies: ['Flutter', 'Node.js', 'TensorFlow', 'OpenCV', 'MongoDB'],
    highlights: [
      'Full-stack mobile and backend development',
      'AI integration: Plant anomaly detection with TensorFlow & OpenCV',
      'Appointment booking system with specialist matching',
    ],
  },
  {
    title: 'Intern',
    company: 'ESPRIT',
    period: '06/2023 – 08/2023',
    description: 'Machine Learning project for product success prediction',
    technologies: ['Python', 'PyTorch', 'OpenCV'],
    highlights: [
      'Data preprocessing and feature extraction with OpenCV',
      'Built predictive models with PyTorch',
      'Customer feedback analysis and product recommendations',
    ],
  },
  {
    title: 'Intern',
    company: 'Tunisie Telecom',
    period: '06/2022 – 08/2022',
    description: 'Full-stack blog development',
    technologies: ['React', 'Node.js'],
    highlights: [
      'Full-stack development: Frontend with React, Backend with Node.js',
      'User article publishing and comment management',
      'Admin feedback tracking system',
    ],
  },
]

const projects = [
  {
    title: 'GamiX - Multiplayer Mobile Game',
    period: '12/2023 – 05/2024',
    description: 'Full-featured multiplayer game with real-time synchronization',
    technologies: ['Unity', '.NET', 'Node.js', 'MongoDB', 'Netcode'],
    highlights: [
      'Backend: User management, game history, inventory with MongoDB',
      'Gameplay mechanics, animations, graphics options with Unity',
      'Real-time multiplayer synchronization using Netcode',
      'Complete UI/UX design for immersive experience',
    ],
  },
  {
    title: 'Accommodation Management System',
    period: '10/2023 – 02/2024',
    description: 'Microservices-based full-stack application',
    technologies: ['Angular', 'Spring Boot', 'Docker', 'Jenkins'],
    highlights: [
      'Microservices architecture with Spring Boot',
      'Frontend development with Angular',
      'CI/CD pipeline implementation with Jenkins',
    ],
  },
  {
    title: 'Multi-Platform Clinic Management',
    period: '01/2023 – 05/2023',
    description: 'Cross-platform application for clinic operations',
    technologies: ['JavaFX', 'Symfony', 'FlutterFlow', 'Firebase'],
    highlights: [
      'Web, desktop, and mobile platforms',
      'Patient and appointment management',
      'Real-time data synchronization with Firebase',
    ],
  },
]

const skills = {
  languages: ['JavaScript/TypeScript', 'Dart', 'Java', 'Python', 'C/C++/C#', 'Solidity'],
  backend: ['Node.js', 'Express', 'Spring Boot', 'Flask', 'ASP.NET', 'WebSockets', 'REST'],
  frontend: ['React', 'Flutter', 'Vue.js', 'Bootstrap', 'Tailwind CSS'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'PL/SQL'],
  devops: ['Docker', 'Jenkins', 'SonarQube', 'Prometheus', 'Grafana'],
  ml: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
  tools: ['Git', 'GitHub', 'GitLab', 'Jira', 'Agile/Scrum'],
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Jdey Iheb</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-border bg-secondary/50 p-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold">Jdey Iheb</h1>
              <p className="text-2xl text-primary">Full-Stack Software Engineer</p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Specialized in backend development, CI/CD, and real-time applications. Passionate about building scalable systems and delivering impactful products. Available immediately.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="mailto:ihebjdey2@gmail.com"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                View Projects
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/ihebjdey" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/ihebjdey" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ihebjdey2@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/30">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Code2 className="text-primary" size={32} />
                  <span className="text-lg font-semibold">Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="text-primary" size={32} />
                  <span className="text-lg font-semibold">Real-Time Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-primary" size={32} />
                  <span className="text-lg font-semibold">DevOps & CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-primary pl-8 py-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              
              <ul className="space-y-2 mb-4">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-4xl font-bold mb-12 text-center">Notable Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors bg-card/50">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.period}</p>
                </div>
                <ExternalLink size={20} className="text-primary" />
              </div>
              
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">›</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-card/50 border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-4 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Let&apos;s Talk</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new opportunities and projects. Feel free to reach out!
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:ihebjdey2@gmail.com"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium flex items-center gap-2"
            >
              <Mail size={24} />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/ihebjdey"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-lg font-medium flex items-center gap-2"
            >
              <Linkedin size={24} />
              LinkedIn
            </a>
            <a
              href="https://github.com/ihebjdey"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-lg font-medium flex items-center gap-2"
            >
              <Github size={24} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Jdey Iheb. Built with passion and precision.</p>
        </div>
      </footer>
    </div>
  )
}
