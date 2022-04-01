import styles from "./Navbar.module.css";
import { IconContext } from 'react-icons'
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'

const Navbar = (props) => {
    return (
        <div className={styles.navbar}>
            <h4>Michael Flanagan</h4>
            <ul>
                <li>Home</li>
                <li>Design</li>
                <li>Development</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <section className={styles.page}>{props.page}</section>
            <footer className={styles.socialfooter}>
                <hr className={styles.hr} />
            </footer>
            <div className={styles.socials}>
                <IconContext.Provider value={{ className: styles.icons }}>
                    <AiFillLinkedin />
                    <AiFillGithub />
                    <AiOutlineMail />
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default Navbar;