import styles from "./Main.module.css";

const Main = (props) => {
    return (
        <div className={styles.main}>
            <p>{props.page}</p>

        </div>
    );
};

export default Main;