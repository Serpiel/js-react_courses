import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Accueil</Link>
        <Link to="/contact">Contact</Link>
    </nav>
);

export default Navbar;