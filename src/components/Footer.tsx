import facebook from './assets/icon-facebook.svg';
import twitter from './assets/icon-twitter.svg';
import pinterest from './assets/icon-pinterest.svg';
import instagram from './assets/icon-instagram.svg';

const Footer = () => {
  // Define social links data
  const socialLinks = [
    { href: "#", src: facebook, alt: "Facebook" },
    { href: "#", src: twitter, alt: "Twitter" },
    { href: "#", src: pinterest, alt: "Pinterest" },
    { href: "#", src: instagram, alt: "Instagram" },
  ];

  return (
    <footer className="bg-neutral-very-dark-violet text-white py-16 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 text-center lg:text-left">

        {/* Logo */}
        <div className="lg:col-span-1 flex justify-center lg:justify-start">
          <a href="/" aria-label="Shortly Home" className="text-3xl font-bold text-white hover:text-primary-cyan transition-colors duration-200"> {/* Added hover effect to logo text */}
            Shortly
          </a>
        </div>

        {/* Link Sections */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Features */}
          <div className='flex flex-col space-y-4'>
            <h3 className='font-bold text-white mb-2'>Features</h3>
            <nav className='flex flex-col space-y-2 text-neutral-gray'>
              <a href="#" className='hover:text-primary-cyan transition-colors duration-200'>Link Shortening</a>
              <a href="#" className='hover:text-primary-cyan transition-colors duration-200'>Branded Links</a>
              <a href="#" className='hover:text-primary-cyan transition-colors duration-200'>Analytics</a>
            </nav>
          </div>
          {/* Resources */}
          <div className='flex flex-col space-y-4'>
            <h3 className='font-bold text-white mb-2'>Resources</h3>
            <nav className='flex flex-col space-y-2 text-neutral-gray'>
              <a href="#" className='hover:text-primary-cyan transition-colors duration-200'>Blog</a>
              <a href="#" className='hover:text-primary-cyan transition-colors duration-200'>Developers</a>
              <a href="#" className='hover:text-primary-cyan transition-colors duration-200'>Support</a>
            </nav>
          </div>
          {/* Company */}
          <div className='flex flex-col space-y-4'>
            <h3 className='font-bold text-white mb-2'>Company</h3>
            <nav className='flex flex-col space-y-2 text-neutral-gray'>
              <a href="#" className='hover:text-primary-cyan transition-colors duration-200'>About</a>
              <a href="#" className='hover:text-primary-cyan transition-colors duration-200'>Our Team</a>
              <a href="#" className='hover:text-primary-cyan transition-colors duration-200'>Careers</a>
              <a href="#" className='hover:text-primary-cyan transition-colors duration-200'>Contact</a>
            </nav>
          </div>
        </div>

        {/* Social Icons - Updated with Animation */}
        <div className='lg:col-span-1 flex justify-center lg:justify-end items-start space-x-6 mt-8 lg:mt-0'>
          {socialLinks.map((link) => (
            <a
              key={link.alt}
              href={link.href}
              aria-label={link.alt}
              className="group" // Add group class to the link
            >
              <img
                src={link.src}
                alt={link.alt}
                className='h-4 w-4 lg:h-5 lg:w-5
                           transition-transform duration-200 ease-in-out
                           group-hover:scale-125 // Scale up the image when the parent link (group) is hovered
                           '
              />
              {/* If you still want the color change effect, you'd need the SVG component approach: */}
              {/* <FacebookIcon className="h-6 w-6 text-white group-hover:text-primary-cyan fill-current transition-all duration-200 group-hover:scale-110" /> */}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
