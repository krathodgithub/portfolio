const Section = ({
  id,
  title,
  subtitle,
  children,
  background = 'transparent',
  className = ''
}) => {
  return (
    <section
      id={id}
      className={`section-container ${background} ${className}`}
    >
      {title && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}

export default Section
