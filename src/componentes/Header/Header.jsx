import styles from './Header.module.css';
const links = ["Inicio", "Productos", "Contacto", "Carrito"];

function Header() {
    return (
        <header className={styles.header}>
            <h1>Mi App</h1>
            
            <nav>
                <ul style={styles.navLinks}>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
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