import styles from "./Main.module.css";
import { projects } from "../../projects.js";
import Project from "../Project/Project";

const Main = (props) => {
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
                    {projects.map((project) => {
                        return <Project key={project.id} project={project} />
                    })}
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