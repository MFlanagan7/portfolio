import styles from "./Project.module.css";

const Project = (props) => {
    return (
        <img src={props.project.thumbnail} alt="Project image." />
    );
};

export default Project;