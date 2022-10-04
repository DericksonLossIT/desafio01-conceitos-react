import { PlusCircle } from "phosphor-react";
import React, {
  ChangeEvent,
  FormEvent,
  MouseEventHandler,
  useState,
} from "react";

import styles from "./Input.module.css";

interface Task {
  content: string;
  isComplete: boolean;
}

interface InputProps {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Input = ({ taskList, setTaskList }: InputProps) => {
  const [taskInput, setTaskInput] = useState("");

  function handleCreateTask() {
    const newTask: Task = {
      content: taskInput,
      isComplete: false,
    };

    setTaskList([...taskList, newTask]);
    setTaskInput("");

    console.log(`Task created: ${newTask}`);
  }

  function handleTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTaskInput(event.target.value);
  }

  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskInput}
        onChange={handleTaskInputChange}
      />
      <button type="button" onClick={handleCreateTask}>
        Criar
        <PlusCircle size={24} />
      </button>
    </div>
  );
};

export default Input;
