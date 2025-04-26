import { useState } from 'react'; // Import useState
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import logo from './assets/logo.svg'; // Ensure this path is correct

const Header = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20, // Start slightly above
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    visible: {
      opacity: 1,
      y: 0,
      height: 'auto', // Animate to auto height
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    // Added relative positioning for the absolute positioned mobile menu
    <div id="main-header" className="bg-white  shadow-sm sticky top-0 z-50 relative">
      {/* Removed one level of unnecessary div nesting */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <a href="/" aria-label="Shortly Home"> {/* Use link for logo */}
            <img src={logo} alt="Shortly Logo" className="h-8 w-auto" /> {/* Added alt text and size */}
          </a>
          {/* Desktop Navigation */}
          <nav className="space-x-8 font-bold hidden lg:flex"> {/* Use font-bold from style guide */}
            <a href="#" className="text-neutral-grayish-violet hover:text-neutral-very-dark-violet transition-colors">Features</a>
            <a href="#" className="text-neutral-grayish-violet hover:text-neutral-very-dark-violet transition-colors">Pricing</a>
            <a href="#" className="text-neutral-grayish-violet hover:text-neutral-very-dark-violet transition-colors">Resources</a>
          </nav>
        </div>

        {/* Desktop Login/Sign Up */}
        <div className="items-center font-bold space-x-8 hidden lg:flex"> {/* Use font-bold */}
          <a href="#" className="text-neutral-grayish-violet hover:text-neutral-very-dark-violet transition-colors">Login</a>
          <a href="#" className="bg-primary-cyan text-white px-6 py-2 rounded-full hover:bg-[hsl(180,66%,55%)] transition-colors">Sign Up</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu} // Add onClick handler
            className="text-neutral-grayish-violet hover:text-neutral-very-dark-violet focus:outline-none focus:ring-2 focus:ring-neutral-gray rounded-lg p-2 transition-colors"
            type="button"
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            {/* Simple X icon toggle (optional) */}
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Conditionally Rendered & Animated) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu" // Accessibility: ID for aria-controls
            className="lg:hidden absolute top-full left-0 right-0 mx-4 sm:mx-6 mt-2 bg-primary-dark-violet rounded-lg shadow-xl p-6 z-40" // Styling for the dropdown
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <nav className="flex flex-col items-center space-y-4 text-center">
              <a href="#" className="text-white font-bold text-lg hover:text-primary-cyan transition-colors">Features</a>
              <a href="#" className="text-white font-bold text-lg hover:text-primary-cyan transition-colors">Pricing</a>
              <a href="#" className="text-white font-bold text-lg hover:text-primary-cyan transition-colors">Resources</a>
              <div className="border-t border-neutral-grayish-violet w-full my-4 opacity-25"></div> {/* Divider */}
              <a href="#" className="text-white font-bold text-lg hover:text-primary-cyan transition-colors">Login</a>
              <a href="#" className="bg-primary-cyan text-white font-bold text-lg px-8 py-3 rounded-full w-full hover:bg-[hsl(180,66%,55%)] transition-colors">Sign Up</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Removed the border-b div as it seemed out of place */}
    </div>
  );

};export default Header;
