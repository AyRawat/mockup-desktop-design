import Logo from "../assets/images/Logo.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={Logo} className="nav-logo" />
      </div>
      <nav className="nav-links">
        <a href="#about">About us</a>
        <a href="#service">Services</a>
        <a href="#use-cases">Use Cases</a>
        <a href="#pricing">Pricing</a>
        <a href="#blog">Blog</a>
        <button className="quote-btn">Request a quote</button>
      </nav>
    </div>
  );
};

export default NavBar;
