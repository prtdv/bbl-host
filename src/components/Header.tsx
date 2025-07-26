
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/f53e8206-f7e6-46b1-b1f4-c0de66007464.png" 
              alt="bright bulb labs logo" 
              className="h-12 w-auto"
            />
          </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/timeline"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/timeline') ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : 'text-foreground'
              }`}
            >
              Timeline
            </Link>
            <Link
              to="/cross-punched"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/cross-punched') ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : 'text-foreground'
              }`}
            >
              Cross-Punched
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : 'text-foreground'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-yellow-500 border-b-2 border-yellow-500 pb-1' : 'text-foreground'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/brightbulblabs.in?igsh=ZHUxOGt5NWhqMjNm" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/lovable-uploads/76e13aa2-6e74-4f74-92d9-b639deef6a19.png" 
                alt="Instagram" 
                className="w-8 h-8 object-contain"
              />
            </a>
            <a 
              href="https://wa.me/919561000991" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/lovable-uploads/deabca3d-10af-448e-92ea-c600288e85e0.png" 
                alt="WhatsApp" 
                className="w-8 h-8 object-contain"
              />
            </a>
            <a 
              href="https://www.linkedin.com/company/bright-bulb-labs/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/lovable-uploads/e605f6de-a080-4cd7-919a-6656e0f7416e.png" 
                alt="LinkedIn" 
                className="w-8 h-8 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
