import { motion } from 'framer-motion';
import illustration from './assets/illustration-working.svg';

const Hero = () => {
  return (
    <div className="Hero overflow-hidden bg-white">
      <div className="py-20 lg:pb-28 pb-32 flex flex-col-reverse lg:flex-row gap-16 justify-between items-center">
        {/* Text Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col lg:items-start items-center gap-4 lg:gap-8 lg:ml-32"
        >
          <div className="space-y-2 text-center mx-4 md:mx-28 lg:mx-0 lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              More than just shorter links
            </h1>
            <p className="text-lg text-neutral-gray font-medium lg:w-[28rem]">
              Build your brand’s recognition and get detailed insights on how your links are performing.
            </p>
          </div>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="px-6 py-3 bg-primary-cyan hover:bg-[hsl(180,66%,55%)] text-white rounded-full mt-4"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Image Animation from Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="ml-5 md:ml-8 lg:ml-0"
        >
          <img
            src={illustration}
            alt="Working Illustration"
            className=" h-full w-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
