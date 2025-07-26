
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <Link to="/contact">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            </Link>
            <ul className="space-y-2 text-sm">
              <li>Website - brightbulblabs.in</li>
              <li>Email ID - chaitrasworkid@gmail.com</li>
              <li>Address - BrightBulbLabs, Shukrawar Peth, Pune.</li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="space-y-2">
              <Link to="/" className="block text-lg font-semibold hover:text-yellow-400 transition-colors">
                Home
              </Link>
              <Link to="/timeline" className="block text-lg font-semibold hover:text-yellow-400 transition-colors">
                Time-Line
              </Link>
              <Link to="/cross-punched" className="block text-lg font-semibold hover:text-yellow-400 transition-colors">
                Crossed-Punched
              </Link>
              <Link to="/about" className="block text-lg font-semibold hover:text-yellow-400 transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
