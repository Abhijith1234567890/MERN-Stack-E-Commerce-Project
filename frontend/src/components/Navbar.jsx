import { useState } from "react";
import "../componentStyles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  PersonAdd,
  Close,
  Menu,
} from "@mui/icons-material";
import "../pageStyles/Search.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggelMenu = () => setIsMenuOpen(!isMenuOpen);
  const isAuthenticated = false;
  const navigate = useNavigate()
  const handleSearchSubmit = (e) =>{ e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?keyword=${encodeURIComponent(searchQuery.trim())}`)
    } else {
      navigate('/products')
    }
    setSearchQuery("")
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            ShopEasy
          </Link>
        </div>

        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/constact-us">Constact Us</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-icons">
          <div className="search-container">
            <form className={`search-form ${isSearchOpen ? "active" : ""}`}
              onSubmit={handleSearchSubmit}
            >
              <input
                type="text"
                className="search-input"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="button"
                className="search-icon"
                onClick={toggleSearch}
              >
                <Search focusable="false" />
              </button>
            </form>
          </div>

          <div className="cart-container">
            <Link to="/cart">
              <ShoppingCart className="icon" />
              <span className="cart-badge">6</span>
            </Link>
          </div>

          {!isAuthenticated && (
            <Link to="/register" className="register-link">
              <PersonAdd className="icon" />
            </Link>
          )}
          <div className="navbar-hamburger" onClick={toggelMenu}>
            {isMenuOpen ? (
              <Close className="icon" />
            ) : (
              <Menu className="icon" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
