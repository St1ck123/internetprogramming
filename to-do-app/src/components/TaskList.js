import React from "react";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

function TaskList({ tasks, setTasks }) {

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const updateTask = (id, newTitle, newDescription) => {
  setTasks(tasks.map(task =>
    task.id === id
      ? { ...task, title: newTitle, description: newDescription }
      : task
  ));
};

  return (
    <div className="container">
      <h1>ToDo List</h1>

      <AddTask addTask={addTask} />

      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            updateTask={updateTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;