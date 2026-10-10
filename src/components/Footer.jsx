import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: darkMode ? '#0f172a' : '#f3f4f6',
        borderTop: darkMode ? '1px solid #1f2937' : '1px solid #e5e7eb',
      }}
      className="py-8 mt-auto"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">

          {/* Copyright */}
          <p
            className="text-sm text-center"
            style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
          >
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;