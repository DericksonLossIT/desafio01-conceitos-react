import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  content: string;
  isComplete: boolean;
}

const Task = ({ content, isComplete }: TaskProps) => {
  return (
    <div className={styles.taskContainer}>
      <div className={styles.checkbox}>Checkbox: {isComplete}</div>
      <p>{content}</p>
      <Trash size={24} className={styles.trashIcon} />
    </div>
  );
};

export default Task;
