import { useState } from "react";
import "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home">Início</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#servicos">Serviços</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
