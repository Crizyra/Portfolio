import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CV from '../assets/cv.pdf';
import hero from '../assets/hero1.png';

const Hero = ({ darkMode }) => {
  const fullText = "Crizyra Madayag, C.";
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();

    let index = 0;
    let timer;

    const type = () => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
        timer = setTimeout(type, 120);
      } else {
        timer = setTimeout(() => {
          index = 0;
          setDisplayText('');
          type();
        }, 2000);
      }
    };

    type();

    return () => clearTimeout(timer);
  }, []);

  const socialIcons = [
    { icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png", alt: 'Instagram', link: 'https://instagram.com/' },
    { icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png", alt: 'Github', link: 'https://github.com/' },
    { icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png", alt: 'Linkedin', link: 'https://linkedin.com/' },
  ];

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    buttonSecondary: 'text-white border-2 border-orange-500 hover:bg-orange-600',
    decorativeCircle: 'bg-orange-500 opacity-10',
    imageCircleBg: 'bg-gradient-to-br from-orange-500 to-amber-500',
  };

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    buttonSecondary: 'text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white',
    decorativeCircle: 'bg-orange-400 opacity-20',
    imageCircleBg: 'bg-gradient-to-br from-orange-400 to-amber-400',
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div 
      id='home' 
      className='relative overflow-hidden min-h-screen flex flex-col pt-32 pb-16 scroll-mt-28'
    >
      <section
        data-aos='fade-up'
        data-aos-delay='250'
        className='body-font z-10 w-full my-auto'
      >
        <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 flex-col lg:flex-row items-center justify-between'>

          {/* Left Side Container */}
          <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
            <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  data-aos='fade-up'
                  data-aos-delay={`${400 + index * 100}`}
                  className='transform hover:scale-110 transition-transform duration-300'
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode ? '' : 'filter brightness-75'}`}
                  />
                </a>
              ))}
            </div>

            <h1
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
              data-aos='fade-up'
              data-aos-delay='500'
            >
              Hi, it’s me{' '}
              <span className="text-orange-500 inline-block border-r-2 border-orange-500">
                {displayText}
              </span>
            </h1>

            <p
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
              data-aos='fade-up'
              data-aos-delay='600'
            >
              I’m a creative UI/UX designer who specializes in Wireframing & Prototyping, finding joy in shaping ideas into intuitive layouts and interactive experiences during the early stages of design.
            </p>

            {/* Buttons */}
            <div className='w-full pt-4 sm:pt-6'>
              <div
                className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
                data-aos='fade-up'
                data-aos-delay='700'
              >
                {/* Download CV Button*/}
                <a href={CV} download className='no-underline'>
                  <div className="custom-download-btn" data-tooltip="Size: 1.2 MB">
                    <div className="button-wrapper">
                      <span className="text">Download CV</span>
                      <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right side: Circular image */}
          <div
            className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center'
            data-aos='fade-left'
            data-aos-delay='400'
          >
            <div className='relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96'>
              <div className={`absolute inset-0 rounded-full ${theme.imageCircleBg} opacity-80 scale-105 blur-sm`}></div>
              <div className={`absolute inset-0 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}></div>
              <img
                src={hero}
                alt="Hero Image"
                className='absolute inset-0 w-full h-full object-cover rounded-full z-10'
              />
            </div>
          </div>

          {/* Decorative blur circle */}
          <div className={`absolute -top-20 -left-20 w-40 sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block`} />
        </div>
      </section>
    </div>
  );
};

export default Hero;