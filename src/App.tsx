import { useState, ChangeEvent, FormEvent } from "react";
import Task from "./components/Task";

import styles from "./App.module.css";
import "./global.css";

interface Task {
  content: string;
  isComplete: boolean;
}

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState("");

  function handleCreateTask(event: FormEvent) {
    event?.preventDefault();

    const newTask: Task = {
      content: taskInput,
      isComplete: false,
    };

    setTaskList([...taskList, newTask]);
    setTaskInput("");
  }

  function handleTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTaskInput(event.target.value);
  }

  return (
    <div className={styles.App}>
      <header className={styles.todoHeader}>
        <h1>todo</h1>
      </header>
      <main className={styles.mainWrapper}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={taskInput}
          onChange={handleTaskInputChange}
        />
        <button type="button" onClick={handleCreateTask}>
          Criar
        </button>

        <p>Tasks</p>
        <div className={styles.tasks}>
          <div className={styles.taskList}>
            {taskList.map(({ content, isComplete }) => {
              return (
                <Task key={content} content={content} isComplete={isComplete} />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
