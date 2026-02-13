import SocialLinks from '../common/SocialLinks'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-display mb-2">Let's Connect</h3>
            <p className="text-gray-300">Building amazing things, one project at a time</p>
          </div>

          <SocialLinks size="lg" className="justify-center" />
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2026 Kaushik Rathod</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
