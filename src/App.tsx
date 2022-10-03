import { useState, ChangeEvent, FormEvent } from "react";

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
    <div className="App">
      <header className="todo">
        <h1>todo</h1>
      </header>
      <main>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={taskInput}
          onChange={handleTaskInputChange}
        />
        <button type="button" onClick={handleCreateTask}>
          Criar
        </button>

        <div className="tasks">
          Tasks
          <div className="taskList">
            {taskList.map((task) => {
              return (
                <div>
                  <div>Checkbox status: {task.isComplete}</div>
                  <p>{task.content}</p>
                  <div>Delete</div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
