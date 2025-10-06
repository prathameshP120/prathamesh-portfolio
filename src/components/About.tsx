
import { ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            <p>
              I am a passionate Full Stack Developer with expertise in the MERN stack. 
              Currently pursuing my B.E. in Computer Science at Sinhgad College of Engineering, 
              Pune, graduating in 2025.
            </p>
          </div>
          
          <div className="mt-6 sm:mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-cyan-400">Education</h3>
            <div className="bg-slate-900/50 rounded-lg p-4 sm:p-6 border border-slate-700
                           transform transition-all duration-300 ease-in-out
                           hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-500/10
                           hover:border-cyan-400/30 cursor-pointer group">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2 sm:gap-0">
                <h4 className="text-lg sm:text-xl font-semibold group-hover:text-cyan-400 
                              transition-colors duration-300">
                  Bachelor of Engineering
                </h4>
                <span className="text-cyan-400 font-medium px-3 py-1 bg-cyan-500/10 rounded-full
                               group-hover:bg-cyan-500/15 transition-colors duration-300 text-sm sm:text-base inline-block w-fit">
                  2021 - 2025
                </span>
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base">
                Computer Science
              </p>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base">
                Sinhgad College of Engineering, Pune
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
