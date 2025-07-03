import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16 w-full">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center flex-shrink-0 aspect-square min-w-[2.5rem] min-h-[2.5rem]">
                <span className="text-xs text-white font-bold">ML</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg xl:text-xl font-bold text-slate-800 whitespace-nowrap">Mariana Lemes</h1>
                <p className="text-sm text-brand whitespace-nowrap">Fisioterapeuta Pediátrica</p>
              </div>
            </motion.div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8 flex-shrink-0">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-brand font-medium transition-colors duration-200 relative text-sm xl:text-base"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="hidden lg:inline-block bg-brand hover:bg-primary-700 text-white px-3 lg:px-4 xl:px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl text-xs lg:text-sm xl:text-base flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              onClick={closeMobileMenu}
            >
              <span className="block lg:hidden">Agendar</span>
              <span className="hidden lg:block xl:hidden">Consulta</span>
              <span className="hidden xl:block">Agendar Consulta</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-slate-700 flex-shrink-0"
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />

            {/* Menu Content */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs sm:max-w-sm bg-white shadow-2xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Navigation Items */}
              <nav className="p-3 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="block text-base sm:text-lg font-semibold text-slate-800 hover:text-brand transition-colors duration-200 py-2 border-b border-gray-100 last:border-b-0 truncate"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile CTA Button */}
                <motion.div
                  className="mt-6 sm:mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a
                    href="#contact"
                    className="block w-full bg-brand hover:bg-primary-700 text-white text-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    onClick={closeMobileMenu}
                  >
                    Agendar Consulta
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
