import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import Section from '../common/Section'
import SocialLinks from '../common/SocialLinks'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS is not configured. Please check your .env file.')
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Kaushik Rathod',
        },
        publicKey
      )

      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitError(
        error.message || 'Failed to send message. Please try emailing directly at rathod.kaushik@gmail.com'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's work together on your next project"
    >
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold font-display mb-6">Let's Connect</h3>
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Feel free to reach out!
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="text-2xl text-primary-500">
                <FaEnvelope />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:rathod.kaushik@gmail.com" className="text-gray-600 hover:text-primary-500">
                  rathod.kaushik@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-2xl text-primary-500">
                <FaPhone />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:+14088322595" className="text-gray-600 hover:text-primary-500">
                  +1 (408) 832-2595
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-2xl text-primary-500">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-600">Bay Area, CA</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-4">Follow me on social media</p>
            <SocialLinks size="lg" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-lg font-semibold transition-all shadow-lg ${
                isSubmitting
                  ? 'opacity-70 cursor-not-allowed'
                  : 'hover:scale-105'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 font-semibold text-center"
              >
                ✓ Thank you! Your message has been sent successfully.
              </motion.p>
            )}

            {submitError && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 font-semibold text-center text-sm"
              >
                ✗ {submitError}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  )
}

export default Contact
