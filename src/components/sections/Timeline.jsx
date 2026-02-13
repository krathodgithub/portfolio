import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const Timeline = ({ items }) => {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-purple-500 to-secondary-500"></div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`flex flex-col md:flex-row gap-8 items-center ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl text-primary-500">
                  {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                </div>
                <span className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                  {item.period}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1 font-display">
                {item.title}
              </h3>
              <p className="text-gray-600 font-medium mb-2">
                {item.company} • {item.location}
              </p>
              <p className="text-gray-700 mb-4">
                {item.description}
              </p>

              {item.highlights && (
                <ul className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="hidden md:block relative z-10">
              <div className="w-4 h-4 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full shadow-lg ring-4 ring-white"></div>
            </div>

            <div className="hidden md:block flex-1"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
