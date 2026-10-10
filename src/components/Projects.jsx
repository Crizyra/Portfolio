import { FaExternalLinkAlt } from 'react-icons/fa';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: 'Air Force 1 Low',
      desc: 'A range of athletic shoes made by Nike',
      image: project1,
      tags: ['Figma'],
      link: 'https://www.figma.com/design/XmJEqdoySRmxcBghB0RJiF/Madayag_UIChallenge1?node-id=4-15&t=j6OroWIs0qOCGbcL-1',
    },
    {
      id: 2,
      title: 'Music Player',
      desc: 'Immersive and intuitive controls for streaming or local files.',
      image: project2,
      tags: ['Figma'],
      link: 'https://www.figma.com/design/6K6XNJ6pJeGIBEuMnmIeHw/Madayag_UIChallenge2?node-id=0-1&t=j6OroWIs0qOCGbcL-1',
    },
    {
      id: 3,
      title: 'Awesome Todos',
      desc: 'A task-management app',
      image: project3,
      tags: ['Figma', 'React', 'MongoDb'],
      link: 'https://awesometodoapp-b9h3.onrender.com/',
    },
    {
      id: 4,
      title: 'DoClock',
      desc: 'Deliver thoughtful medical information and alerts in your facility',
      image: project4,
      tags: ['Figma', 'React', 'MongoDb'],
      link: 'https://www.figma.com/design/p6BqYgpIh6h1DcndMSrKav/Prototype?node-id=0-1&t=JgEZne0wYNZ5pS5U-1',
    },
    {
      id: 5,
      title: 'UServe',
      desc: 'Deliver thoughtful medical information and alerts in your facility',
      image: project5,
      tags: ['Figma', 'React', 'MongoDb'],
      link: 'https://www.figma.com/proto/0OwNtlA77zluRhCFkdzUoS/Website?node-id=2459-377&t=1Zat2IoiBXzYWVss-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2459%3A124',
    },
  ];

  return (
    <section
      id="projects"
      style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="sm:text-3xl font-bold mb-3"
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
              Projects
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
          >
            My recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? 'linear-gradient(to bottom right, #1f2937, #111827)'
                  : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                borderColor: darkMode ? '#374151' : '#e5e7eb',
              }}
              className="group rounded-xl border duration-300 hover:border-orange-500/50 transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? 'white' : '#1f2937' }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
                >
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                        color: darkMode ? '#d1d5db' : '#4b5563',
                      }}
                      className="px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(to right, #f97316, #f59e0b)',
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all w-full"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  <span>View Project</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;