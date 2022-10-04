import { useState, ChangeEvent, FormEvent } from "react";
import Task from "./components/Task";

import styles from "./App.module.css";
import "./global.css";
import Header from "./components/Header";
import Input from "./components/Input";

interface Task {
  content: string;
  isComplete: boolean;
}

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.mainWrapper}>
        <Input taskList={taskList} setTaskList={setTaskList} />
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
