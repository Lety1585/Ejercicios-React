import styles from './Header.module.css';

function Header() {
    return (
        <header>
            <h1>Mi App</h1>
            
            <nav>
                <ul style={styles.navLinks}>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#" className={styles.loginBtn}> Login </a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;