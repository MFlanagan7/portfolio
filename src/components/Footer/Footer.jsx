import styles from "./Footer.module.css";
import { projects } from "../../projects.js";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { GoPrimitiveDot } from "react-icons/go";
import { IconContext } from 'react-icons';
import { ThemeContext } from "../../ThemeContext";
import { useState, useContext, useEffect } from "react";

const Footer = (props) => {
    const appTheme = useContext(ThemeContext);
    const [theme, setTheme] = useState();
    useEffect(() => {
        setTheme(appTheme.theme);
        console.log(theme);
    }, [appTheme.theme, theme]);

    if (props.page === "Home") {
        return (
            <>
                <footer className={styles.socialfooter}>
                    <hr className={`${styles.footer} ${theme === 'light' ? styles.lightHR : theme === 'dark' ? styles.darkHR : styles.blueHR}`} />
                </footer>
                <div className={styles.socials}>
                    <IconContext.Provider value={{ className: `${styles.icons} ${theme === 'light' ? styles.lightNavIcons : theme === 'dark' ? styles.darkNavIcons : styles.blueNavIcons}` }}>
                        <AiFillLinkedin />
                        <AiFillGithub />
                        <AiOutlineMail />
                    </IconContext.Provider>
                </div>
            </>
        );
        } else if (props.page === "Design") {
            return (
                <>
                    <footer className={styles.socialfooter}>
                        <hr className={`${styles.footer} ${theme === 'light' ? styles.lightHR : theme === 'dark' ? styles.darkHR : styles.blueHR}`} />
                    </footer>
                    <div className={styles.socials}>
                        <IconContext.Provider value={{ className: `${styles.icons} ${theme === 'light' ? styles.lightNavIcons : theme === 'dark' ? styles.darkNavIcons : styles.blueNavIcons}` }}>
                            <AiFillLinkedin />
                            <AiFillGithub />
                            <AiOutlineMail />
                        </IconContext.Provider>
                    </div>
                    <div className={styles.pagination}>
                        {projects.map((project) => {
                                return (
                                    <IconContext.Provider key={project.id} value={{ className: `${styles.icons} ${theme === 'light' ? styles.lightMainIcons : theme === 'dark' ? styles.darkMainIcons : styles.blueMainIcons}` }}>
                                        <GoPrimitiveDot />
                                    </IconContext.Provider>
                                );
                        })}
                    </div>
                </>
            );
        } else if (props.page === "Development") {
            return (
                <>
                    <footer className={styles.socialfooter}>
                        <hr className={`${styles.footer} ${theme === 'light' ? styles.lightHR : theme === 'dark' ? styles.darkHR : styles.blueHR}`} />
                    </footer>
                    <div className={styles.socials}>
                        <IconContext.Provider value={{ className: `${styles.icons} ${theme === 'light' ? styles.lightNavIcons : theme === 'dark' ? styles.darkNavIcons : styles.blueNavIcons}` }}>
                            <AiFillLinkedin />
                            <AiFillGithub />
                            <AiOutlineMail />
                        </IconContext.Provider>
                    </div>
                    <div className={styles.pagination}>
                        {projects.map((project) => {
                                return (
                                    <IconContext.Provider key={project.id} value={{ className: `${styles.icons} ${theme === 'light' ? styles.lightMainIcons : theme === 'dark' ? styles.darkMainIcons : styles.blueMainIcons}` }}>
                                        <GoPrimitiveDot />
                                    </IconContext.Provider>
                                );
                        })}
                    </div>
                </>
            );
        } else if (props.page === "About") {
            return (
                <>
                <footer className={styles.socialfooter}>
                    <hr className={`${styles.footer} ${theme === 'light' ? styles.lightHR : theme === 'dark' ? styles.darkHR : styles.blueHR}`} />
                </footer>
                <div className={styles.socials}>
                <IconContext.Provider value={{ className: `${styles.icons} ${theme === 'light' ? styles.lightNavIcons : theme === 'dark' ? styles.darkNavIcons : styles.blueNavIcons}` }}>
                        <AiFillLinkedin />
                        <AiFillGithub />
                        <AiOutlineMail />
                    </IconContext.Provider>
                </div>
            </>
            );
        } else if (props.page === "Contact") {
            return (
                <>
                <footer className={styles.socialfooter}>
                    <hr className={`${styles.footer} ${theme === 'light' ? styles.lightHR : theme === 'dark' ? styles.darkHR : styles.blueHR}`} />
                </footer>
                <div className={styles.socials}>
                <IconContext.Provider value={{ className: `${styles.icons} ${theme === 'light' ? styles.lightNavIcons : theme === 'dark' ? styles.darkNavIcons : styles.blueNavIcons}` }}>
                        <AiFillLinkedin />
                        <AiFillGithub />
                        <AiOutlineMail />
                    </IconContext.Provider>
                </div>
            </>
            );
        } 
}

export default Footer;