import styles from "./Navbar.module.css";
import { IconContext } from 'react-icons';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import {Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className={styles.navbar}>
            <h4>Michael Flanagan</h4>
            <ul>
                <Link className={styles.link} to="/">
                    {props.page === 'Home' ? <li className={styles.active}>Home</li>  : <li>Home</li>}
                </Link>
                <Link className={styles.link} to="/design">
                    {props.page === 'Design' ? <li className={styles.active}>Design</li>  : <li>Design</li>}
                </Link>
                <Link className={styles.link} to="/development">
                    {props.page === 'Development' ? <li className={styles.active}>Development</li>  : <li>Development</li>}
                </Link>
                <Link className={styles.link} to="/About">
                    {props.page === 'About' ? <li className={styles.active}>About</li>  : <li>About</li>}
                </Link>
                <Link className={styles.link} to="/Contact">
                    {props.page === 'Contact' ? <li className={styles.active}>Contact</li>  : <li>Contact</li>}
                </Link>
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