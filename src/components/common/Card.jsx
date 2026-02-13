const Card = ({ children, className = '', hover = true }) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg overflow-hidden'
  const hoverClasses = hover ? 'hover:shadow-2xl transition-shadow duration-300' : ''

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}

export default Card
