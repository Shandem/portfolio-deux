import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import './navbar.scss'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { id: "home", text: "Home" },
    { id: "about", text: "About" },
    { id: "Skills", text: "Skills" },
    { id: "Projects", text: "Projects" },
    { id: "contact", text: "Contact" },
  ];

function NavLink({ id, text, onClick }) {
    return (
      <Link
        to={id}
        smooth={true}
        duration={500}
        className="cursor-pointer px-4 py-2 hover:text-gray-400"
        onClick={onClick}
      >
        {text}
      </Link>
    );
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">Logo</div>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.id} {...link} />
            ))}
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900 flex flex-col items-center py-2">
          {navLinks.map((link) => (
            <NavLink key={link.id} {...link} onClick={() => setIsOpen(false)} />
          ))}
        </div>
      )}
    </nav>
  );
}



