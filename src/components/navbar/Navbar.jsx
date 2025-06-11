import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/licitaseguro-logo.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold">
            <Link to="/">
              <img
                src={logo}
                alt="Logo Licita Seguro"
                className="h-5 w-auto"
              />
            </Link>
          </div>

          {/* Menú hamburguesa*/}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-200 focus:outline-none cursor-pointer"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menú */}
          <div
            className={`${isOpen ? 'block' : 'hidden'
              } md:block absolute top-16 left-0 w-full md:static md:w-auto md:bg-transparent`}
          >
            <div
              className={`flex flex-col md:flex-row md:space-x-6
                ${isOpen ? 'backdrop-blur-xs bg-black/75 h-screen px-4' : 'bg-transparent'}
                items-top pt-20 md:pt-0 justify-start md:justify-end gap-4 md:gap-0`}
            >
              <Link
                to="/"
                className="text-3xl md:text-sm text-gray-100 hover:text-fuchsia-500 py-4 md:py-0 px-1 transition-colors duration-200 ease-in-out text-center w-full md:w-auto"
                onClick={() => setIsOpen(false)}
              >
                Licitaciones
              </Link>
              <Link
                to="/contacto"
                className="text-3xl md:text-sm text-gray-100 hover:text-fuchsia-500 py-4 md:py-0 px-1 transition-colors duration-200 ease-in-out text-center w-full md:w-auto"
                onClick={() => setIsOpen(false)}
              >
                Contáctanos
              </Link>
              <Link
                to="/ayuda"
                className="text-3xl md:text-sm text-gray-100 hover:text-fuchsia-500 py-4 md:py-0 px-1 transition-colors duration-200 ease-in-out text-center w-full md:w-auto"
                onClick={() => setIsOpen(false)}
              >
                Necesitas ayuda?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;