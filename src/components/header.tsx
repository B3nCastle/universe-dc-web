import { useState } from "react";
import PlanetLogo from "../../assets/planet.svg"; // Logo de la izquierda
import UniverseLogo from "../../assets/logoSquare.svg"; // Logotipo central "Universe"

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-transparent">
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <img src={PlanetLogo} alt="Planet Logo" className="w-8 h-8 mr-2" />
          <span className="text-white text-lg font-bold">Universe</span>
        </div>

        {/* Menú Hamburguesa para mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Icono de menú hamburguesa simétrico */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-16 6h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Contenido central */}
      <div className="text-white text-center relative">
        <div className="relative inline-block">
          {/* Logotipo "Universe" */}
          <img src={UniverseLogo} alt="Logo" className="z-10 w-[150px]" />
          <div className="absolute left-[-60%] right-[-60%] top-1/2 transform -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent -z-10"></div>
        </div>
      </div>

      {/* Menú desplegable de pantalla completa */}
      {isOpen && (
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-neutral-950 text-white z-20 flex flex-col items-center p-4">
          {/* Botón de cerrar */}
          <div className="flex justify-between items-center w-full">
            <h2 className="text-2xl">MENÚ</h2>
            <button onClick={toggleMenu} className="text-white">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Logo en el centro con las líneas */}
          <div className="my-8">
            <img
              src={UniverseLogo}
              alt="Planet Logo"
              className="w-32 h-32 mx-auto"
            />
            <div className="my-4 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>

          {/* Opciones del menú */}
          <nav className="text-center space-y-6">
            <a href="#presentacion" className="text-xl hover:text-gray-400">
              Presentación
            </a>
            <div className="h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <a href="#integrantes" className="text-xl hover:text-gray-400">
              Integrantes
            </a>
            <div className="h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <a href="#eventos" className="text-xl hover:text-gray-400">
              Eventos
            </a>
            <div className="h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <a href="#audiciones" className="text-xl hover:text-gray-400">
              Audiciones
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
