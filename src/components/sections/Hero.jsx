import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-100 via-purple-100 to-secondary-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <motion.div
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold font-display mb-4"
          variants={itemVariants}
        >
          Hi, I'm <span className="gradient-text">Kaushik Rathod</span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl text-gray-700 font-display mb-6"
          variants={itemVariants}
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Crafting beautiful, functional web experiences with modern technologies
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Link to="projects" smooth={true} duration={500} offset={-80}>
            <button className="px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg cursor-pointer">
              View My Work
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <button className="px-8 py-3 border-2 border-primary-500 text-primary-500 rounded-full font-semibold hover:bg-primary-500 hover:text-white transition-colors cursor-pointer">
              Get In Touch
            </button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FaArrowDown className="text-2xl text-gray-600" />
      </motion.div>
    </section>
  )
}

export default Hero
