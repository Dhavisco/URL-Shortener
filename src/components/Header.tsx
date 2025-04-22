
const Header = () => {
  return (
    <div className="bg-white shadow-sm sticky top-0 z-10">
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-12">
                <div className="text-xl lg:text-3xl font-bold text-gray-900">Shortly</div>
                <nav className="space-x-8 font-medium hidden lg:flex">
                    <a href="#" className="text-neutral-grayish-violet hover:text-neutral-very-dark-violet">Features</a>
                    <a href="#" className="text-neutral-grayish-violet hover:text-neutral-very-dark-violet">Pricing</a>
                    <a href="#" className="text-neutral-grayish-violet hover:text-neutral-very-dark-violet">Resources</a>
                </nav>  
            </div>

         
            <div className="flex items-center font-medium space-x-8">
                <a href="#" className="text-neutral-grayish-violet hover:text-neutral-very-dark-violet">Login</a>
                <a href="#" className="bg-primary-cyan text-white px-6 py-2 rounded-full hover:bg-[hsl(180,66%,55%)]">Sign Up</a>
            </div>
        </div>
        <div className="border-b border-gray-200"></div>
      </div>
    </div>
  )
}

export default Header
