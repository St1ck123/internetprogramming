import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => {
        const formatted = data.slice(0, 20).map(item => ({
          id: item.id,
          title: item.title,
          description: "Описание отсутствует",
          done: item.completed
        }));

        setTasks([...formatted, ...saved]);
        setLoaded(true);
      });
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const customTasks = tasks.filter(t => t.id > 200);
    localStorage.setItem("tasks", JSON.stringify(customTasks));
  }, [tasks, loaded]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<TaskList tasks={tasks} setTasks={setTasks} />}
        />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </Router>
  );
}

export default App;