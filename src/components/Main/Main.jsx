import styles from "./Main.module.css";
import { projects } from "../../projects.js";
import Project from "../Project/Project";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { ThemeContext } from "../../ThemeContext";
import { useState, useContext, useEffect } from "react";

const Main = (props) => {
    const appTheme = useContext(ThemeContext);
    const [theme, setTheme] = useState();
    useEffect(() => {
        setTheme(appTheme.theme);
        console.log(theme);
    }, [appTheme.theme, theme]);

    if (props.page === "Home") {
        return (
            <div className={styles.home}>
                
                <p>👋 Hello.</p>
                <p>I am a web designer</p>
                <p>developer</p>
                <p>creative</p>
                <p>problem solver</p>
            </div>
        );
        } else if (props.page === "Design") {
            return (
                <div className={styles.design}>
                    <IconContext.Provider value={{ className: `${styles.icons} ${styles.leftArrow} ${theme === 'light' ? styles.lightIcons : theme === 'dark' ? styles.darkIcons : styles.blueIcons}` }}>
                        <AiOutlineLeft />
                    </IconContext.Provider>
                    {projects.map((project) => {
                            return (
                                <Project key={project.id} project={project} />
                            );
                    })}
                    <IconContext.Provider value={{ className: `${styles.icons} ${styles.rightArrow} ${theme === 'light' ? styles.lightIcons : theme === 'dark' ? styles.darkIcons : styles.blueIcons}` }}>
                        <AiOutlineRight />
                    </IconContext.Provider>
                    
                </div>
            );
        } else if (props.page === "Development") {
            return (
                <div className={styles.development}>
                    <h2>{props.page}</h2>
                </div>
            );
        } else if (props.page === "About") {
            return (
                <div className={styles.about}>
                    <h2>{props.page}</h2>
                </div>
            );
        } else if (props.page === "Contact") {
            return (
                <div className={styles.contact}>
                    <h2>{props.page}</h2>
                </div>
            );
        } 
};

export default Main;