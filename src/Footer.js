import styles from './Footer.module.css'

function Footer() {
 return (
    <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>Facebook</li>
            <li>Instagram</li>
        </ul>
    </footer>
 )
}

export default Footer;