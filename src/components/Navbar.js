import style from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={style.nav}>
      <h1>LOGO</h1>

      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Careers</li>
        <li>Contact Us</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;
