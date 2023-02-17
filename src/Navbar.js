import { Link } from "react-router-dom";
import Container from "./components/layout/Container";
import styles from './Navbar.module.css'

function Navbar() {
 return (
     <nav className={styles.navbar}>
        <Container>
            <div className={styles.logo}>
            <Link to="/">ShopApp</Link>  
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>      
                </li>
                <li className={styles.item}>
                <Link to="/Cart">Cart</Link>
                </li>
                <li className={styles.item}>
                <Link to="/Cart">Login</Link>
                </li>
                <li className={styles.item}>
                <Link to="/Cart">About</Link>
                </li>
            </ul>
        </Container>

    </nav>
 )
}

export default Navbar;