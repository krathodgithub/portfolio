import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const SocialLinks = ({ links = [], size = 'md', className = '' }) => {
  const defaultLinks = [
    { name: 'GitHub', url: 'https://github.com/krathodgithub', icon: FaGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kaushikrathod/', icon: FaLinkedin },
    { name: 'Email', url: 'mailto:rathod.kaushik@gmail.com', icon: FaEnvelope },
  ]

  const socialLinks = links.length > 0 ? links : defaultLinks

  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  }

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${sizes[size]} text-gray-600 hover:text-primary-500 transition-colors duration-300 hover:scale-110 transform`}
            aria-label={link.name}
          >
            <Icon />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
