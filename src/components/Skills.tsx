
const Skills = () => {
  const skills = [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'REST APIs',
    'AWS EC2',
    'AWS S3',
    'AWS IAM'
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            My Skills
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            I&apos;ve worked with a variety of technologies in the web development world. Here&apos;s a snapshot of my technical expertise and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
          {skills.map((skill) => (
            <div 
              key={skill} 
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-5 lg:p-6 hover:border-cyan-400/50 hover:bg-slate-800/70 transition-all duration-300 text-center"
            >
              <span className="text-white font-medium text-sm sm:text-base lg:text-lg">{skill}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          {/* Problem Solving Journey */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-cyan-400/50 transition-all duration-300 w-full max-w-md mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4 sm:mb-6 text-center">Problem Solving Journey</h3>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💻</div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">LeetCode</h4>
              <p className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4">600+ Problems Solved</p>
              <a 
                href="#" 
                className="inline-block bg-cyan-400 text-slate-900 px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-300 text-sm sm:text-base"
              >
                View My Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
