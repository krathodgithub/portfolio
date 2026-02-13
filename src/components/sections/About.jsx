import { motion } from 'framer-motion'
import Section from '../common/Section'
import { skills } from '../../data/skills'
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'

const About = () => {
  const getIcon = (iconName) => {
    const allIcons = { ...FaIcons, ...SiIcons }
    const Icon = allIcons[iconName]
    return Icon ? <Icon /> : null
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <Section id="about" title="About Me" subtitle="Passionate developer creating innovative solutions">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-br from-primary-400 via-purple-400 to-secondary-400 p-2">
              <img
                src="/images/profile.jpg"
                alt="Kaushik Rathod"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h3 className="text-3xl font-bold font-display text-gray-900">
            Hello! I'm a Senior Software Engineer (Quality)
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            I specialize in building robust test automation frameworks and ensuring quality excellence
            for AI-powered applications. With 10+ years of experience in test automation, DevOps, and
            AI/ML integration, I architect comprehensive testing solutions that accelerate delivery
            while maintaining high quality standards.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Currently at Abridge, I leverage multiple LLM models (GPT-4, Claude, Gemini) to enhance
            test automation for healthcare products. I'm passionate about shift-left testing, CI/CD
            optimization, and exploring how Agentic AI can transform software quality engineering.
          </p>
          <div className="flex gap-4 pt-4">
            <div className="text-center">
              <p className="text-4xl font-bold gradient-text">10+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold gradient-text">90%+</p>
              <p className="text-gray-600">Test Coverage</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold gradient-text">70%+</p>
              <p className="text-gray-600">Time Reduction</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-16">
        <h3 className="text-3xl font-bold font-display text-center mb-12 gradient-text">
          Skills & Technologies
        </h3>

        <div className="grid gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold capitalize mb-6 text-gray-800">
                {category}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skillList.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl mb-3 text-primary-500 group-hover:scale-110 transition-transform duration-300">
                      {getIcon(skill.icon)}
                    </div>
                    <p className="text-sm font-medium text-gray-700 text-center">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default About
