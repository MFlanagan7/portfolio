import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import styles from "./Page.module.css";

const Page = (props) => {
    if (props.page === "Home") {
    return (
        <div className={styles.page}>
            <Navbar page='Home' />
            <Main page='Home' />
        </div>
    );
    } else if (props.page === "Design") {
        return (
            <div className={styles.page}>
                <Navbar page='Design' />
                <Main page='Design' />
            </div>
        );
    } else if (props.page === "Development") {
        return (
            <div className={styles.page}>
                <Navbar page='Development' />
                <Main page='Development' />
            </div>
        );
    } else if (props.page === "About") {
        return (
            <div className={styles.page}>
                <Navbar page='About' />
                <Main page='About' />
            </div>
        );
    } else if (props.page === "Contact") {
        return (
            <div className={styles.page}>
                <Navbar page='Contact' />
                <Main page='Contact' />
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