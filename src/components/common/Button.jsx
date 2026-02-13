const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-full transition-all duration-300 hover:scale-105'

  const variants = {
    primary: 'px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg hover:shadow-xl',
    secondary: 'px-8 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
    outline: 'px-6 py-2 border-2 border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-500',
  }

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
