export const personalInfo = {
  name: 'Alex Morgan',
  profession: 'Frontend Developer',
  tagline: 'Building beautiful, responsive web experiences',
  intro: 'Passionate frontend developer with 5+ years of experience creating modern, user-centric web applications. Specializing in Vue.js, React, and TypeScript.',
  email: 'alex.morgan@example.com',
  linkedin: 'alexmorgan',
  github: 'alexmorgan-dev',
  location: 'San Francisco, CA',
  phone: '+1 (555) 123-4567',
}

export const about = {
  bio: `I'm a passionate frontend developer with over 5 years of experience building modern, responsive web applications. My journey in web development started with a curiosity about how websites work, and it has evolved into a career focused on creating exceptional user experiences.

I believe in writing clean, maintainable code and staying up-to-date with the latest web technologies. When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, or exploring new JavaScript frameworks.

My approach to development is user-first, always considering accessibility, performance, and responsive design principles. I thrive in collaborative environments and enjoy mentoring junior developers.`,

  hardSkills: [
    'JavaScript (ES6+)',
    'TypeScript',
    'Vue.js 3',
    'React.js',
    'HTML5 & CSS3',
    'Tailwind CSS',
    'Node.js',
    'RESTful APIs',
    'GraphQL',
    'Git & GitHub',
    'Webpack & Vite',
    'Responsive Design',
  ],

  softSkills: [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Time Management',
    'Adaptability',
    'Critical Thinking',
    'Mentoring',
    'Agile Methodologies',
  ],

  tools: [
    { name: 'Vue.js', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Git', icon: '🔧' },
    { name: 'Figma', icon: '🎭' },
    { name: 'VS Code', icon: '💻' },
  ],
}

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Vue.js and Node.js, featuring real-time inventory management, secure payment integration, and an intuitive admin dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
    liveDemo: 'https://example.com/demo',
    github: 'https://github.com/example/ecommerce',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with drag-and-drop functionality, real-time updates, team chat, and project analytics dashboard.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'Redux'],
    liveDemo: 'https://example.com/demo',
    github: 'https://github.com/example/taskapp',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with beautiful visualizations, 7-day forecasts, location-based weather alerts, and historical weather data analysis.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS', 'Pinia'],
    liveDemo: 'https://example.com/demo',
    github: 'https://github.com/example/weather',
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Comprehensive analytics platform for social media metrics, featuring custom reporting, data visualization, competitor analysis, and automated insights.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'GraphQL'],
    liveDemo: 'https://example.com/demo',
    github: 'https://github.com/example/analytics',
  },
  {
    id: 5,
    title: 'Recipe Sharing Platform',
    description: 'Community-driven recipe sharing platform with search functionality, user ratings, meal planning features, and cooking video tutorials.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Vue.js', 'Express.js', 'MongoDB', 'AWS S3', 'Socket.io'],
    liveDemo: 'https://example.com/demo',
    github: 'https://github.com/example/recipes',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Personal fitness tracking application with workout logging, progress visualization, goal setting, nutrition tracking, and workout plan generation.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['React Native', 'TypeScript', 'Firebase', 'Chart.js', 'Redux Toolkit'],
    liveDemo: 'https://example.com/demo',
    github: 'https://github.com/example/fitness',
  },
]

export const experience = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    position: 'Senior Frontend Developer',
    timeline: 'Jan 2022 - Present',
    achievements: [
      'Led the development of a new customer portal using Vue.js 3, resulting in 40% increase in user engagement',
      'Mentored a team of 5 junior developers, establishing code review processes and best practices',
      'Reduced application load time by 60% through code splitting and lazy loading implementation',
      'Implemented comprehensive testing strategy using Vitest and Cypress, achieving 90% code coverage',
    ],
  },
  {
    id: 2,
    company: 'Digital Innovations Inc',
    position: 'Frontend Developer',
    timeline: 'Mar 2020 - Dec 2021',
    achievements: [
      'Developed and maintained 15+ responsive web applications using React and Vue.js',
      'Collaborated with UX designers to implement pixel-perfect, accessible user interfaces',
      'Optimized application performance, reducing bundle size by 45% and improving Core Web Vitals',
      'Integrated third-party APIs including Stripe, Twilio, and SendGrid for various client projects',
    ],
  },
  {
    id: 3,
    company: 'StartupHub',
    position: 'Junior Frontend Developer',
    timeline: 'Jun 2019 - Feb 2020',
    achievements: [
      'Built reusable component library used across 10+ internal projects',
      'Implemented responsive designs and ensured cross-browser compatibility',
      'Participated in agile development processes and daily standups',
      'Contributed to open-source projects and internal documentation',
    ],
  },
  {
    id: 4,
    company: 'Freelance',
    position: 'Web Developer',
    timeline: 'Jan 2018 - May 2019',
    achievements: [
      'Delivered 20+ custom websites for small businesses and startups',
      'Provided ongoing maintenance and support for client projects',
      'Managed client relationships and project timelines independently',
      'Gained expertise in various CMS platforms and modern frameworks',
    ],
  },
]
