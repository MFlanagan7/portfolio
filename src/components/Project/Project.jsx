import styles from "./Project.module.css";

const Project = (props) => {
    if (props.project == null) {
        return (
            <div className={styles.project}>
                <img src={props.project.thumbnail} alt="" />
            </div>
        );
    }
    else {
        return (
            <div className={styles.project}>
                <img src={props.project.thumbnail} alt="" />
            </div>
        );
    }
};

export default Project;