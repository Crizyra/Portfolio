import about from "../assets/hero1.png";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* IMAGE */}
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex justify-center relative order-2 lg:order-1"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#fb923c] to-[#f59e0b] rounded-full scale-110 z-0"
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>

            {/* Circular Image */}
            <img
              src={about}
              alt="About"
              className="absolute inset-0 w-full h-full object-cover rounded-full z-10"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left order-1 lg:order-2"
        >
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            About Me
          </h1>
          <p
            className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-8 leading-relaxed bg-gradient-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl backdrop-blur-sm ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Hi, I’m Crizyra! I’m a UI/UX designer specializing in Wireframing and Prototyping. I focus on turning ideas into structured, interactive designs that make the user experience clear, functional, and engaging.

            For me, design is more than just visuals—it’s about understanding users, crafting intuitive pathways, and transforming concepts into experiences that feel effortless and meaningful. I’m always exploring, learning, and designing with purpose to make every interaction both seamless and impactful.
          </p>

          <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 mb-8">
            <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400">3+</div>
              <div className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Education
              </div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="650">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400">2+</div>
              <div className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Years Experience
              </div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="700">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400">4+</div>
              <div className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Projects Completed
              </div>
            </div>
          </div>
          </article>
      </div>
    </section>
  );
};

export default About;