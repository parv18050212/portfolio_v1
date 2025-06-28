// Project data
const projectData = {
  'ai-analytics': {
    title: 'AI-Powered Analytics',
    description: 'Built a comprehensive predictive analytics platform that leverages machine learning algorithms to forecast business metrics and identify trends. The system processes large datasets in real-time and provides actionable insights through an intuitive dashboard interface.',
    achievements: [
      'Improved prediction accuracy by 35%',
      'Reduced processing time by 60%',
      'Deployed to production serving 10k+ users'
    ],
    technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Flask', 'PostgreSQL', 'Docker'],
    duration: '6 months',
    teamSize: '4 developers',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/ai-analytics',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80'
  },
  'cloud-migration': {
    title: 'Cloud Migration Project',
    description: 'Orchestrated a complete migration of legacy on-premises infrastructure to AWS cloud, implementing best practices for security, scalability, and cost optimization. The project involved containerizing applications, setting up CI/CD pipelines, and establishing monitoring solutions.',
    achievements: [
      'Reduced infrastructure costs by 40%',
      'Improved system uptime to 99.9%',
      'Decreased deployment time from hours to minutes'
    ],
    technologies: ['AWS EC2', 'AWS RDS', 'Docker', 'Terraform', 'Jenkins', 'CloudWatch', 'Lambda'],
    duration: '8 months',
    teamSize: '6 engineers',
    demoUrl: 'https://cloud-demo.example.com',
    githubUrl: 'https://github.com/example/cloud-migration',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },
  'devops-pipeline': {
    title: 'DevOps Pipeline',
    description: 'Designed and implemented a robust CI/CD pipeline that automates the entire software delivery process from code commit to production deployment. The solution includes automated testing, security scanning, and blue-green deployments for zero-downtime releases.',
    achievements: [
      'Reduced deployment failures by 80%',
      'Accelerated release cycles by 300%',
      'Implemented automated rollback mechanisms'
    ],
    technologies: ['Jenkins', 'Kubernetes', 'Helm', 'ArgoCD', 'Prometheus', 'Grafana', 'SonarQube'],
    duration: '4 months',
    teamSize: '3 DevOps engineers',
    demoUrl: 'https://pipeline-demo.example.com',
    githubUrl: 'https://github.com/example/devops-pipeline',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=800&q=80'
  },
  'security-analysis': {
    title: 'Security Analysis Tool',
    description: 'Created a comprehensive security analysis platform that automatically scans codebases and infrastructure for vulnerabilities. The tool integrates with CI/CD pipelines and provides detailed reports with remediation suggestions.',
    achievements: [
      'Detected 95% of known vulnerabilities',
      'Reduced security review time by 70%',
      'Integrated with 50+ development teams'
    ],
    technologies: ['Python', 'OWASP', 'Docker', 'PostgreSQL', 'React', 'Node.js', 'AWS'],
    duration: '5 months',
    teamSize: '3 security engineers',
    demoUrl: 'https://security-demo.example.com',
    githubUrl: 'https://github.com/example/security-analysis',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
  },
  'big-data': {
    title: 'Big Data Analytics Platform',
    description: 'Developed a high-performance big data analytics platform capable of processing petabytes of data in real-time. The system uses Apache Spark for distributed computing and provides interactive dashboards for data visualization.',
    achievements: [
      'Processes 10TB+ data daily',
      'Reduced query time by 85%',
      'Supports 1000+ concurrent users'
    ],
    technologies: ['Apache Spark', 'Hadoop', 'Kafka', 'Python', 'Scala', 'Elasticsearch', 'Kibana'],
    duration: '10 months',
    teamSize: '8 data engineers',
    demoUrl: 'https://bigdata-demo.example.com',
    githubUrl: 'https://github.com/example/big-data',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  'iot-monitoring': {
    title: 'IoT Monitoring System',
    description: 'Built an end-to-end IoT monitoring solution that collects data from thousands of sensors, processes it in real-time, and provides actionable insights through a web dashboard. The system includes predictive maintenance capabilities.',
    achievements: [
      'Monitors 5000+ IoT devices',
      'Achieved 99.8% uptime',
      'Reduced maintenance costs by 30%'
    ],
    technologies: ['AWS IoT Core', 'Node.js', 'MongoDB', 'React', 'MQTT', 'Lambda', 'DynamoDB'],
    duration: '7 months',
    teamSize: '5 IoT engineers',
    demoUrl: 'https://iot-demo.example.com',
    githubUrl: 'https://github.com/example/iot-monitoring',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  'blockchain-supply': {
    title: 'Blockchain Supply Chain',
    description: 'Developed a transparent and immutable supply chain tracking system using blockchain technology. The platform enables end-to-end traceability of products from manufacturing to delivery, ensuring authenticity and reducing fraud.',
    achievements: [
      'Tracked 100,000+ products',
      'Reduced fraud by 90%',
      'Improved transparency by 100%'
    ],
    technologies: ['Ethereum', 'Solidity', 'Web3.js', 'React', 'Node.js', 'IPFS', 'MetaMask'],
    duration: '6 months',
    teamSize: '4 blockchain developers',
    demoUrl: 'https://blockchain-demo.example.com',
    githubUrl: 'https://github.com/example/blockchain-supply',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=800&q=80'
  }
};

// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('active');
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply fade-in animation to sections
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(section);
});

// Glitch effect for hero title
const glitchText = document.querySelector('.glitch');
if (glitchText) {
  const text = glitchText.textContent;
  glitchText.setAttribute('data-text', text);
}

// Dynamic skill cards hover effect
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.background = 'rgba(255,255,255,0.05)';
  });
});

// Project modal functionality
const modal = document.getElementById('project-modal');
const modalClose = document.querySelector('.modal-close');
const projectCards = document.querySelectorAll('.project-card');

// Open modal
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const projectId = card.getAttribute('data-project');
    const project = projectData[projectId];
    
    if (project) {
      openProjectModal(project);
    }
  });
});

// Close modal
modalClose.addEventListener('click', closeProjectModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeProjectModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeProjectModal();
  }
});

function openProjectModal(project) {
  // Populate modal content
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-image').src = project.image;
  document.getElementById('modal-image').alt = project.title;
  document.getElementById('modal-description').textContent = project.description;
  document.getElementById('modal-duration').textContent = project.duration;
  document.getElementById('modal-team').textContent = project.teamSize;
  
  // Populate achievements
  const achievementsList = document.getElementById('modal-achievements');
  achievementsList.innerHTML = '';
  project.achievements.forEach(achievement => {
    const li = document.createElement('li');
    li.textContent = achievement;
    achievementsList.appendChild(li);
  });
  
  // Populate technologies
  const techContainer = document.getElementById('modal-technologies');
  techContainer.innerHTML = '';
  project.technologies.forEach(tech => {
    const span = document.createElement('span');
    span.textContent = tech;
    techContainer.appendChild(span);
  });
  
  // Set up links
  const demoLink = document.getElementById('modal-demo');
  const githubLink = document.getElementById('modal-github');
  
  if (project.demoUrl) {
    demoLink.href = project.demoUrl;
    demoLink.style.display = 'flex';
  } else {
    demoLink.style.display = 'none';
  }
  
  if (project.githubUrl) {
    githubLink.href = project.githubUrl;
    githubLink.style.display = 'flex';
  } else {
    githubLink.style.display = 'none';
  }
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Re-initialize Lucide icons for modal content
  lucide.createIcons();
}

function closeProjectModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'unset';
}

// Re-initialize icons after DOM changes
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});