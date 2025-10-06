
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZTI5M2IiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi0xIDEtNnYtMmgtNGwtMS02aC0ydjRsLTYgMS0xIDZ2MmgybDEgNmgydi00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-40">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="text-red-400">Hello,</span> I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Prathamesh
          </span>
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 sm:mb-4">
          Full Stack Developer
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
          Turning ideas into full-stack solutions with MERN stack expertise
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            View Projects
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-sm sm:text-base"
          >
            Contact Me
          </button>
        </div>

        {/* Problem Solving Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4 sm:px-0">
          <div className="bg-slate-800/50 rounded-lg p-4 sm:p-6 backdrop-blur-sm border border-slate-700 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">500+</div>
            <div className="text-gray-300 text-sm sm:text-base">Problems Solved</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 sm:p-6 backdrop-blur-sm border border-slate-700 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">2025</div>
            <div className="text-gray-300 text-sm sm:text-base">Graduate Class</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 sm:p-6 backdrop-blur-sm border border-slate-700 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">MERN</div>
            <div className="text-gray-300 text-sm sm:text-base">Stack Expert</div>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
