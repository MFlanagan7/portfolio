import styles from "./Main.module.css";

const Main = (props) => {
    if (props.page === "Home") {
        return (
            <div className={styles.main}>
                <p>👋 Hello.</p>
                <p>I am a web designer</p>
                <p>developer</p>
                <p>creative</p>
                <p>problem solver</p>
            </div>
        );
        } else if (props.page === "Design") {
            return (
                <div className={styles.main}>
                    <h2>{props.page}</h2>
                </div>
            );
        } else if (props.page === "Development") {
            return (
                <div className={styles.main}>
                    <h2>{props.page}</h2>
                </div>
            );
        } else if (props.page === "About") {
            return (
                <div className={styles.main}>
                    <h2>{props.page}</h2>
                </div>
            );
        } else if (props.page === "Contact") {
            return (
                <div className={styles.main}>
                    <h2>{props.page}</h2>
                </div>
            );
        } 
};

export default Main;