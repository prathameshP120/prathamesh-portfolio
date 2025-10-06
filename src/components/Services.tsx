
import { Code, Phone, Mail } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-cyan-400" />,
      title: 'Full Stack Web Development',
      description: 'Build scalable, modern web applications with complete frontend and backend integration using MERN stack technologies.',
      features: [
        'Responsive Frontend Development',
        'RESTful API Design & Development',
        'Database Design & Integration',
        'Authentication & Authorization',
        'Real-time Features with Socket.io',
        'Payment Gateway Integration'
      ]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            My <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          <div className="space-y-6 sm:space-y-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-900/50 rounded-xl p-4 sm:p-6 lg:p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-4">
                  <div className="flex-shrink-0 self-center sm:self-auto">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-center sm:text-left">{service.title}</h3>
                </div>
                <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm sm:text-base">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-4 sm:p-6 lg:p-8 border border-cyan-500/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-cyan-400">Why Choose Me?</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <span className="text-slate-900 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Problem-Solving Expertise</h4>
                    <p className="text-gray-300 text-sm sm:text-base">500+ coding problems solved across multiple platforms</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <span className="text-slate-900 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Modern Tech Stack</h4>
                    <p className="text-gray-300 text-sm sm:text-base">Up-to-date with latest MERN stack technologies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <span className="text-slate-900 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">End-to-End Solutions</h4>
                    <p className="text-gray-300 text-sm sm:text-base">From concept to deployment, complete development cycle</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-4 sm:p-6 lg:p-8 border border-slate-700">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-cyan-400">Get In Touch</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Ready to bring your ideas to life? Let's discuss your project requirements.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base break-all">patilprathameshdilip@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">+91 9529347570</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
