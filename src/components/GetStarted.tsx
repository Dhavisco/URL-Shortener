import { motion } from 'framer-motion';
// import bgMobile from './assets/bg-boost-mobile.svg';
// import bgDesktop from './assets/bg-boost-desktop.svg';

const GetStarted = () => {
  // Function to handle the scroll
  const handleScrollToForm = () => {
    const formSection = document.getElementById('url-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="
        bg-primary-dark-violet text-white py-20 lg:py-16 px-4 sm:px-6 lg:px-8
        bg-no-repeat bg-right-top lg:bg-cover
        bg-[url('/images/bg-boost-mobile.svg')] lg:bg-[url('/images/bg-boost-desktop.svg')]
      "
      // style={
      //   {
      //     '--bg-mobile-boost-url': `url(${bgMobile})`,
      //     '--bg-desktop-boost-url': `url(${bgDesktop})`,
      //   } as React.CSSProperties
      // }
    >
      {/* Centered Heading */}
      <div className='text-center mb-6 lg:mb-8'>
        <h2 className='text-3xl lg:text-4xl font-bold'>
          Boost your links today
        </h2>
      </div>

      {/* Flex container to center the button */}
      <div className="flex justify-center">
        <motion.button
          onClick={handleScrollToForm} // Add the onClick handler here
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="
            px-8 py-3 bg-primary-cyan hover:bg-[hsl(180,66%,55%)]
            text-white font-medium text-lg rounded-full
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:ring-offset-2 focus:ring-offset-primary-dark-violet
            cursor-pointer // Explicitly set cursor to pointer
          "
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default GetStarted;
