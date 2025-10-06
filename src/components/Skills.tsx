const Skills = () => {
  const skills = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "REST APIs",
    "AWS EC2",
    "AWS S3",
    "AWS IAM",
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            My Skills
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            I&apos;ve worked with a variety of technologies in the web development world.
            Here&apos;s a snapshot of my technical expertise and proficiency levels.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-5 lg:p-6 hover:border-cyan-400/50 hover:bg-slate-800/70 transition-all duration-300 text-center"
            >
              <span className="text-white font-medium text-sm sm:text-base lg:text-lg">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Competitive Programming Section */}
        <div className="flex justify-center">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-cyan-400/50 transition-all duration-300 w-full max-w-md mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4 sm:mb-6 text-center">
              Competitive Programming
            </h3>

            <div className="text-center">
              {/* Logo Row */}
             
              <p className="text-base sm:text-lg lg:text-xl font-bold text-cyan-400 mb-4 px-2">
                600+ Problems Solved on LeetCode, GFG, and Codeforces
              </p>

               <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">
                View Profiles
              </h4>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href="https://leetcode.com/u/Prathamesh_Patil_120/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-slate-900 px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-300 text-sm sm:text-base"
                >
                   <img
                  src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
                  alt="LeetCode Logo"
                  className="h-8 w-auto sm:h-10"
                />
                </a>

                <a
                  href="https://codeforces.com/profile/YourCodeforcesUsername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block  text-slate-900 px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-300 text-sm sm:text-base"
                >
                   <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Codeforces_logo.svg/768px-Codeforces_logo.svg.png?20200622150123"
                  alt="Codeforces Logo"
                  className="h-8 w-auto sm:h-10"
                />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
