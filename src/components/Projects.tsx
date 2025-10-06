import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Cartify – Full Ecommerce Website',
      description: 'A comprehensive e-commerce platform with user authentication, admin dashboard, real-time analytics, and order management system.',
      tech: ['MERN Stack', 'Redux Toolkit', 'Cloudinary', 'JWT', 'OAuth', 'MongoDB Indexing'],
      features: [
        'Complete user panel with authentication',
        'Admin dashboard with analytics',
        'Image management with Cloudinary',
        'Real-time order tracking',
        'Responsive design'
      ],
      github: '#',
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      image: 'https://res.cloudinary.com/danmfi6fq/image/upload/v1759766464/Screenshot_2025-07-11_093806_haummw.png'
    },
    {
      title: 'Cryptoplace',
      description: 'Built a cryptocurrency dashboard using React.js, Tailwind CSS, and Fetch API.',
      tech: ['React.js', 'Tailwind CSS', 'Fetch API', 'CoinGecko API'],
      features: [
        'Fetched live market data via CoinGecko API',
        'Implemented currency conversion',
        'Added dynamic search for coins',
        'Formatted large currency values',
        'Real-time cryptocurrency prices',
        'Mobile-responsive interface'
      ],
      github: 'https://github.com/prathameshP120/cryptoplace',
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      image: 'https://res.cloudinary.com/danmfi6fq/image/upload/v1759766644/Screenshot_2025-08-12_225601_bwxuez.png'
    },
    {
      title: 'SpendWise',
      description: 'Built a personal finance tracker using MERN stack (MongoDB, Express.js, React.js, Node.js) with JWT authentication.',
      tech: ['MERN Stack', 'JWT', 'Express.js', 'MongoDB', 'RESTful APIs'],
      features: [
        'Add, update, and categorize income/expenses',
        'Real-time balance calculation',
        'Secure CRUD operations on user data',
        'JWT authentication for secure access',
        'RESTful API architecture',
        'Financial data categorization'
      ],
      github: '#',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30'
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing my expertise in full-stack development through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${project.color} rounded-xl p-8 border ${project.borderColor} 
                         transform transition-all duration-300 ease-in-out 
                         hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-500/20 
                         cursor-pointer group hover:border-cyan-400/40`}
            >
              <div className="bg-slate-900/80 rounded-lg p-4 sm:p-6 backdrop-blur-sm 
                             transition-all duration-300 group-hover:bg-slate-900/90">
                
                {project.image && (
                  <div className="mb-4 sm:mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-36 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white 
                              group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base
                              group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="mb-4 sm:mb-6 transition-all duration-300">
                  <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2 sm:mb-3 
                                group-hover:text-cyan-300 transition-colors duration-300">
                    Key Features:
                  </h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-xs sm:text-sm 
                                             group-hover:text-gray-200 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0
                                       group-hover:bg-cyan-300 transition-colors duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 sm:mb-6 transition-all duration-300">
                  <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2 sm:mb-3
                                group-hover:text-cyan-300 transition-colors duration-300">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 sm:px-3 py-1 bg-slate-800 text-cyan-300 rounded-full text-xs sm:text-sm border border-slate-600 
                                 group-hover:bg-slate-700 group-hover:text-cyan-200 group-hover:border-cyan-500/50
                                 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 transition-all duration-300">
                  <a 
                    href={project.github}
                    className="flex items-center px-3 sm:px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg 
                             transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-slate-800/50 rounded-xl p-4 sm:p-6 lg:p-8 border border-slate-700 max-w-2xl mx-auto 
                         transform transition-all duration-300 ease-in-out
                         hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-500/20 
                         hover:border-cyan-400/40 cursor-pointer group">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-cyan-400 
                          group-hover:text-cyan-300 transition-colors duration-300">
              More Projects Coming Soon!
            </h3>
            <p className="text-gray-300 mb-4 sm:mb-6 group-hover:text-gray-200 
                          transition-colors duration-300 text-sm sm:text-base">
              I'm constantly working on new projects and exploring emerging technologies. 
              Follow my GitHub to stay updated with my latest work.
            </p>
            <a 
              href="https://github.com/prathameshP120"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-800 to-gray-900 
                       hover:from-gray-700 hover:to-gray-800 text-white rounded-lg 
                       transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              <Github className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
