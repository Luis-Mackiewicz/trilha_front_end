import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        padding: "10px",
        background: "#eee",
      }}
    >
      <Link to="/">🏠 Home</Link>
      <Link to="/about">ℹ️ Sobre</Link>
    </nav>
  );
};

export default Navbar;
