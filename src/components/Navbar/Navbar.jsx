import styles from "./Navbar.module.css";
import { IconContext } from 'react-icons';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import {Link } from 'react-router-dom';
import { ThemeContext } from "../../ThemeContext";
import { useState, useContext, useEffect } from "react";

const Navbar = (props) => {
    const appTheme = useContext(ThemeContext);
    const [theme, setTheme] = useState();
    useEffect(() => {
        setTheme(appTheme.theme);
        console.log(theme);
    }, [appTheme.theme, theme]);

    function setLight() {
        appTheme.setThemeToLight();
        setTheme(appTheme.theme);
        // console.log(theme);
    }
    
    function setDark() {
        appTheme.setThemeToDark();
        setTheme(appTheme.theme);
    }

    function setBlue() {
        appTheme.setThemeToBlue();
        setTheme(appTheme.theme);
    }

    return (
        <div className={`${styles.navbar} ${theme === 'light' ? styles.lightNav : theme === 'dark' ? styles.darkNav : styles.blueNav}`}>
            <button onClick={setLight}>Light</button>
            <button onClick={setDark}>Dark</button>
            <button onClick={setBlue}>Blue</button>

            <h4>Michael Flanagan</h4>
            <ul>
                <Link className={`${theme === 'light' ? styles.lightLink : theme === 'dark' ? styles.darkLink : styles.blueLink}`} to="/">
                    {props.page === 'Home' ? <li className={styles.active}>Home</li>  : <li>Home</li>}
                </Link>
                <Link className={`${theme === 'light' ? styles.lightLink : theme === 'dark' ? styles.darkLink : styles.blueLink}`} to="/design">
                    {props.page === 'Design' ? <li className={styles.active}>Design</li>  : <li>Design</li>}
                </Link>
                <Link className={`${theme === 'light' ? styles.lightLink : theme === 'dark' ? styles.darkLink : styles.blueLink}`} to="/development">
                    {props.page === 'Development' ? <li className={styles.active}>Development</li>  : <li>Development</li>}
                </Link>
                <Link className={`${theme === 'light' ? styles.lightLink : theme === 'dark' ? styles.darkLink : styles.blueLink}`} to="/about">
                    {props.page === 'About' ? <li className={styles.active}>About</li>  : <li>About</li>}
                </Link>
                <Link className={`${theme === 'light' ? styles.lightLink : theme === 'dark' ? styles.darkLink : styles.blueLink}`} to="/contact">
                    {props.page === 'Contact' ? <li className={styles.active}>Contact</li>  : <li>Contact</li>}
                </Link>
            </ul>
            <section className={styles.page}>{props.page}</section>
            {/* <footer className={styles.socialfooter}>
                <hr className={`${styles.hr} ${theme === 'light' ? styles.lightHR : theme === 'dark' ? styles.darkHR : styles.blueHR}`} />
            </footer>
            <div className={styles.socials}>
                <IconContext.Provider value={{ className: `${styles.icons} ${theme === 'light' ? styles.lightIcons : theme === 'dark' ? styles.darkIcons : styles.blueIcons}` }}>
                    <AiFillLinkedin />
                    <AiFillGithub />
                    <AiOutlineMail />
                </IconContext.Provider>
            </div> */}
        </div>
    );
};

export default Navbar;