import styles from './Header.module.css';
import { Link } from 'react-router-dom';
const links = ["Inicio", "Productos", "Contacto", "Carrito"];

function Header() {
    return (
        <header className={styles.header}>
            <h1>Mi App</h1>
            
            <nav>
                <ul style={styles.navLinks}>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/producto">Productos</Link></li>
                    <li><Link to="/formulario">Contacto</Link></li>
                    <li><Link to="/peliculasdisp">Pelis</Link></li>
                    <li><a href="#" className={styles.loginBtn}> Login </a></li>
                </ul>
            </nav>

            <nav>
                {links.map((link, index) => (
                    <a key={index}>{link}</a>
                ))}
            </nav>
        </header>
    );
}

export default Header;