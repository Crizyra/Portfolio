import figma from '../assets/figma.png';
import java from '../assets/java.png';
import python from '../assets/python.png';
import javascript from '../assets/javascript.png';

const Skills = ({ darkMode }) => {
  const skills = [
    { name: 'Figma', icon: figma, level: 55, color: 'from-orange-500 to-amber-500' },
    { name: 'Java', icon: java, level: 30, color: 'from-blue-500 to-cyan-500' },
    { name: 'Python', icon: python, level: 30, color: 'from-yellow-500 to-orange-500' },
    { name: 'JavaScript', icon: javascript, level: 25, color: 'from-cyan-500 to-teal-500' },
  ];

  return (
    <section
      id="skills"
      style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
      className="py-14 relative overflow-hidden"
    >
      <div className="container px-5 py-14 mx-auto">
        <div className="text-center mb-20" data-aos="fade-up">
          <h1
            className="sm:text-4xl text-3xl font-bold title-font mb-4"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            My{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Skills
            </span>
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
          >
            Technologies I work with
          </p>
        </div>

        <div className="flex flex-wrap -m-4" data-aos="fade-up" data-aos-delay="200">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/4 md:w-1/2 w-full"
              data-aos="fade-up"
              data-aos-delay={`${300 + index * 100}`}
            >
              <div
                style={{
                  background: darkMode
                    ? 'linear-gradient(to bottom right, #1f2937, #111827)'
                    : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                  borderColor: darkMode ? '#374151' : '#e5e7eb',
                }}
                className="h-full p-6 rounded-2xl border hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 group hover:shadow-[0_0_30px_rgba(255,165,0,0.15)]"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain mr-4"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/48?text=${skill.name.charAt(0)}`;
                    }}
                  />
                  <h3 className="text-xl font-semibold" style={{ color: darkMode ? 'white' : '#1f2937' }}>
                    {skill.name}
                  </h3>
                </div>
                <div className="relative pt-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-medium" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
                      Proficiency
                    </span>
                    <span className="text-xs font-medium" style={{ color: darkMode ? '#9ca3af' : '#4b5563' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      style={{ width: `${skill.level}%` }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;