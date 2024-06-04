import { Link } from 'react-router-dom';
import './Navbar.css';

export const New = () => <h2>Новинки</h2>;

export const Sales = () => <h2>Акції</h2>;

export const Products = () => <h2>Товари в наявності</h2>;

export const Delivery = () => <h2>Доставка і оплата</h2>;

export const Forum = () => <h2>Форум</h2>;

export const About = () => <h2>Про нас</h2>;

export const Text = () => <h2>Teeext</h2>;

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/new">Новинки</Link>
      <Link to="/sales">Акції</Link>
      <Link to="/products">Товари в наявності</Link>
      <Link to="/delivery">Доставка і оплата</Link>
      <Link to="/forum">Форум</Link>
      <Link to="/about">Про нас</Link>
      <Link to="/text">Text</Link>
      <select>
        <option>Українська</option>
        <option>Русский</option>
        <option>English</option>
      </select>
    </nav>
  );
};
