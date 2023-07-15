import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import styles from "./Page.module.css";
import { ThemeContext } from "../../ThemeContext";
import { useState, useContext, useEffect } from "react";
import Footer from "../Footer/Footer";

const Page = (props) => {
    const appTheme = useContext(ThemeContext);
    const [theme, setTheme] = useState();
    useEffect(() => {
        setTheme(appTheme.theme);
        console.log(theme);
    }, [appTheme.theme, theme]);

    const [projectID, setProjectID] = useState(0);
    function updateProjectID() {
        setProjectID(projectID + 1);
        console.log('from Page: ' + projectID);
    }

    if (props.page === "Home") {
    return (
        <div className={`${styles.page} ${theme === 'light' ? styles.lightPage : theme === 'dark' ? styles.darkPage : styles.bluePage}`}>
            <Navbar page='Home' />
            <Main page='Home' />
            <Footer page='Home' />
        </div>
    );
    } else if (props.page === "Design") {
        return (
            <div className={`${styles.page} ${theme === 'light' ? styles.lightPage : theme === 'dark' ? styles.darkPage : styles.bluePage}`}>
                <Navbar page='Design' />
                <Main page='Design' projectID={projectID} updateProjectID={updateProjectID} />
                <Footer page='Design' projectID={projectID} updateProjectID={updateProjectID} />
            </div>
        );
    } else if (props.page === "Development") {
        return (
            <div className={`${styles.page} ${theme === 'light' ? styles.lightPage : theme === 'dark' ? styles.darkPage : styles.bluePage}`}>
                <Navbar page='Development' />
                <Main page='Development' />
                <Footer page='Development' />
            </div>
        );
    } else if (props.page === "About") {
        return (
            <div className={`${styles.page} ${theme === 'light' ? styles.lightPage : theme === 'dark' ? styles.darkPage : styles.bluePage}`}>
                <Navbar page='About' />
                <Main page='About' />
                <Footer page='About' />
            </div>
        );
    } else if (props.page === "Contact") {
        return (
            <div className={`${styles.page} ${theme === 'light' ? styles.lightPage : theme === 'dark' ? styles.darkPage : styles.bluePage}`}>
                <Navbar page='Contact' />
                <Main page='Contact' />
                <Footer page='Contact' />
            </div>
        );
    } 
    // else if (props.page === "locations") {
    //     return (
    //         <div id="page" className={styles.page}>
    //             <Navbar />
    //             <Panel panel='locations' />
    //         </div>
    //     );
    // }
    
};

export default Page;