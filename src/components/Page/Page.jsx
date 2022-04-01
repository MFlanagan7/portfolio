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