import React, { useState } from 'react';
import { Github, Linkedin, Mail, Cloud, Database, Code, Server, Brain, X, ExternalLink, Calendar, Users, Award } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  duration: string;
  teamSize: string;
  achievements: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 'ai-analytics',
    title: 'AI-Powered Analytics',
    description: 'Developed a machine learning model for predictive analytics using Python and TensorFlow',
    fullDescription: 'Built a comprehensive predictive analytics platform that leverages machine learning algorithms to forecast business metrics and identify trends. The system processes large datasets in real-time and provides actionable insights through an intuitive dashboard interface.',
    tags: ['Python', 'TensorFlow', 'Data Science'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/ai-analytics',
    duration: '6 months',
    teamSize: '4 developers',
    achievements: [
      'Improved prediction accuracy by 35%',
      'Reduced processing time by 60%',
      'Deployed to production serving 10k+ users'
    ],
    technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Flask', 'PostgreSQL', 'Docker']
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration Project',
    description: 'Led the migration of legacy systems to AWS cloud infrastructure',
    fullDescription: 'Orchestrated a complete migration of legacy on-premises infrastructure to AWS cloud, implementing best practices for security, scalability, and cost optimization. The project involved containerizing applications, setting up CI/CD pipelines, and establishing monitoring solutions.',
    tags: ['AWS', 'Docker', 'Terraform'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://cloud-demo.example.com',
    githubUrl: 'https://github.com/example/cloud-migration',
    duration: '8 months',
    teamSize: '6 engineers',
    achievements: [
      'Reduced infrastructure costs by 40%',
      'Improved system uptime to 99.9%',
      'Decreased deployment time from hours to minutes'
    ],
    technologies: ['AWS EC2', 'AWS RDS', 'Docker', 'Terraform', 'Jenkins', 'CloudWatch', 'Lambda']
  },
  {
    id: 'devops-pipeline',
    title: 'DevOps Pipeline',
    description: 'Implemented automated CI/CD pipeline using Jenkins and Kubernetes',
    fullDescription: 'Designed and implemented a robust CI/CD pipeline that automates the entire software delivery process from code commit to production deployment. The solution includes automated testing, security scanning, and blue-green deployments for zero-downtime releases.',
    tags: ['Jenkins', 'Kubernetes', 'GitOps'],
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://pipeline-demo.example.com',
    githubUrl: 'https://github.com/example/devops-pipeline',
    duration: '4 months',
    teamSize: '3 DevOps engineers',
    achievements: [
      'Reduced deployment failures by 80%',
      'Accelerated release cycles by 300%',
      'Implemented automated rollback mechanisms'
    ],
    technologies: ['Jenkins', 'Kubernetes', 'Helm', 'ArgoCD', 'Prometheus', 'Grafana', 'SonarQube']
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 sm:px-6 py-16 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-blue-400">Parv Agarwal</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Computer Science Engineer specializing in AI/ML, Cloud Computing, and DevOps
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors text-center">
              Contact Me
            </a>
            <a href="#projects" className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors text-center">
              View Projects
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="bg-gray-800 py-16 md:py-20" id="skills">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12 text-center">Core Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <SkillCard 
              icon={<Brain className="w-6 h-6 sm:w-8 sm:h-8" />}
              title="AI/ML"
              description="Deep Learning, Neural Networks, Machine Learning Algorithms"
            />
            <SkillCard 
              icon={<Cloud className="w-6 h-6 sm:w-8 sm:h-8" />}
              title="Cloud Computing"
              description="AWS, Azure, Cloud Architecture, Serverless"
            />
            <SkillCard 
              icon={<Server className="w-6 h-6 sm:w-8 sm:h-8" />}
              title="DevOps"
              description="CI/CD, Docker, Kubernetes, Infrastructure as Code"
            />
            <SkillCard 
              icon={<Code className="w-6 h-6 sm:w-8 sm:h-8" />}
              title="Programming"
              description="Python, Java, JavaScript, C++"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-20" id="projects">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id}
                project={project}
                onClick={() => openProjectModal(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-800 py-16 md:py-20" id="contact">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12 text-center">Get In Touch</h2>
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="flex space-x-6 mb-8">
              <SocialLink href="https://github.com" icon={<Github className="w-6 h-6" />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-6 h-6" />} />
              <SocialLink href="mailto:parvagarwal73@gmail.com" icon={<Mail className="w-6 h-6" />} />
            </div>
            <p className="text-gray-300 text-center text-sm sm:text-base leading-relaxed">
              I'm always open to discussing new projects, opportunities, and collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeProjectModal} 
        />
      )}
    </div>
  );
}

function SkillCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gray-700 p-4 sm:p-6 rounded-lg hover:bg-gray-600 transition-colors">
      <div className="mb-3 sm:mb-4 text-blue-400">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div 
      className="bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform cursor-pointer"
      onClick={onClick}
    >
      <img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 object-cover" />
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-blue-500 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 text-blue-400 text-sm font-medium">
          Click to learn more →
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-800 p-4 sm:p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold">{project.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4 sm:p-6">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 sm:h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Project Overview</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">{project.fullDescription}</p>
              
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Key Achievements</h3>
              <ul className="space-y-2 mb-6">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">{achievement}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Project Details
                </h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-400">Duration:</span>
                    <span className="ml-2">{project.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Team Size:</span>
                    <span className="ml-2">{project.teamSize}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors text-sm sm:text-base"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors text-sm sm:text-base"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-blue-400 transition-colors p-2 hover:bg-gray-700 rounded-lg"
    >
      {icon}
    </a>
  );
}

export default App;