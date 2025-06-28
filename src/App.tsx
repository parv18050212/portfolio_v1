import React from 'react';
import { Github, Linkedin, Mail, Cloud, Database, Code, Server, Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-400">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Computer Science Engineer specializing in AI/ML, Cloud Computing, and DevOps
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors">
              Contact Me
            </a>
            <a href="#projects" className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors">
              View Projects
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="bg-gray-800 py-20" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard 
              icon={<Brain className="w-8 h-8" />}
              title="AI/ML"
              description="Deep Learning, Neural Networks, Machine Learning Algorithms"
            />
            <SkillCard 
              icon={<Cloud className="w-8 h-8" />}
              title="Cloud Computing"
              description="AWS, Azure, Cloud Architecture, Serverless"
            />
            <SkillCard 
              icon={<Server className="w-8 h-8" />}
              title="DevOps"
              description="CI/CD, Docker, Kubernetes, Infrastructure as Code"
            />
            <SkillCard 
              icon={<Code className="w-8 h-8" />}
              title="Programming"
              description="Python, Java, JavaScript, C++"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="AI-Powered Analytics"
              description="Developed a machine learning model for predictive analytics using Python and TensorFlow"
              tags={['Python', 'TensorFlow', 'Data Science']}
              image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
            />
            <ProjectCard 
              title="Cloud Migration Project"
              description="Led the migration of legacy systems to AWS cloud infrastructure"
              tags={['AWS', 'Docker', 'Terraform']}
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
            />
            <ProjectCard 
              title="DevOps Pipeline"
              description="Implemented automated CI/CD pipeline using Jenkins and Kubernetes"
              tags={['Jenkins', 'Kubernetes', 'GitOps']}
              image="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-800 py-20" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="flex space-x-6 mb-8">
              <SocialLink href="https://github.com" icon={<Github />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
              <SocialLink href="mailto:your.email@example.com" icon={<Mail />} />
            </div>
            <p className="text-gray-300 text-center">
              I'm always open to discussing new projects, opportunities, and collaborations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillCard({ icon, title, description }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
      <div className="mb-4 text-blue-400">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, tags, image }) {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-blue-500 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-blue-400 transition-colors"
    >
      {icon}
    </a>
  );
}

export default App;