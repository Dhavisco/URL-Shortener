// src/components/Features.tsx
import { motion } from 'framer-motion'; // Import motion
import brand from './assets/icon-brand-recognition.svg';
import detailed from './assets/icon-detailed-records.svg';
import customizable from './assets/icon-fully-customizable.svg';

// Define feature data in an array for easier mapping
const featuresData = [
  {
    icon: brand,
    alt: "Brand Recognition Icon",
    title: "Brand Recognition",
    description: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content.",
    marginTopLg: "lg:mt-0",
  },
  {
    icon: detailed,
    alt: "Detailed Records Icon",
    title: "Detailed Records",
    description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    marginTopLg: "lg:mt-10",
  },
  {
    icon: customizable,
    alt: "Fully Customizable Icon",
    title: "Fully Customizable",
    description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    marginTopLg: "lg:mt-20",
  },
];

// Animation variants for the text header
const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

// Animation variants for the cards container (for staggering children)
const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Stagger animation of children by 0.2s
    },
  },
};

// Animation variants for individual cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};


const Features = () => {
  return (
    // Add overflow-hidden if needed, depending on animation type
    <section className='max-w-7xl mx-auto py-16 lg:py-18 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      {/* Text Header - Animate this block */}
      <motion.div
        className='text-center mb-16 lg:mb-24'
        initial="hidden"
        whileInView="visible" // Trigger animation when in view
        viewport={{ once: true, amount: 0.3 }} // Trigger once, when 30% is visible
        variants={headerVariants}
      >
        <h2 className='text-3xl lg:text-4xl font-bold mb-4 text-neutral-very-dark-violet'>
          Advanced Statistics
        </h2>
        <p className="text-lg text-neutral-grayish-violet font-medium max-w-lg mx-auto">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </motion.div>

      {/* Features Grid Container - Relative positioning for the lines */}
      <div className="relative ">

        {/* The HORIZONTAL connecting line */}
        {/* Optional: Animate the line */}
        <motion.div
          className="hidden lg:block absolute top-1/2 left-0 w-full h-2 bg-primary-cyan transform -translate-y-1/2 origin-left" // Added origin-left
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }} // Delay slightly after cards start appearing
          aria-hidden="true"
        ></motion.div>

        {/* The VERTICAL connecting line */}
        {/* Optional: Animate the line */}
        <motion.div
          className="block lg:hidden absolute left-1/2 w-2 h-[calc(100%-8rem)] top-16 bg-primary-cyan transform -translate-x-1/2 origin-top" // Added origin-top
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }} // Trigger sooner for vertical
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          aria-hidden="true"
        ></motion.div>


        {/* Grid for Feature Cards - Apply stagger variants here */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 lg:gap-y-0 lg:items-start pb-10 lg:pb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is visible
          variants={cardContainerVariants} // Apply container variants for staggering
        >
          {featuresData.map((feature, index) => (
            // Card - Convert to motion.div and apply card variants
            <motion.div
              key={index}
              className={`relative z-10 flex flex-col bg-white rounded-lg shadow-md p-8 pt-[72px] items-center text-center lg:items-start lg:text-left ${feature.marginTopLg}`}
              variants={cardVariants} // Apply individual card variants
            >
              {/* Icon Container - Can also be animated if desired */}
              <div className='absolute -top-10 left-1/2 lg:left-8 transform -translate-x-1/2 lg:translate-x-0 bg-primary-dark-violet rounded-full p-5 flex items-center justify-center w-[80px] h-[80px]'>
                <img src={feature.icon} alt={feature.alt} className="h-10 w-10" />
              </div>

              {/* Card Content */}
              <h3 className="text-xl font-bold mb-3 text-neutral-very-dark-violet">{feature.title}</h3>
              <p className="text-neutral-grayish-violet leading-relaxed text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
