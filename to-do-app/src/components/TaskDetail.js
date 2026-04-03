import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    if (Number(id) <= 200) {
      // загрузка одной задачи с сервера
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => res.json())
        .then(data => {
          setTask({
            id: data.id,
            title: data.title,
            description: "Описание отсутствует",
            done: data.completed
          });
        });
    } else {
      // локальные задачи
      const saved = JSON.parse(localStorage.getItem("tasks")) || [];
      const found = saved.find(t => t.id === Number(id));
      setTask(found);
    }
  }, [id]);

  if (!task) return <h2>Загрузка...</h2>;

  return (
    <div className="container">
      <h2>{task.title}</h2>

      <p><b>Описание:</b> {task.description}</p>

      <p>
        <b>Статус:</b> {task.done ? "Выполнено ✅" : "В процессе ⏳"}
      </p>

      <Link to="/">← Назад</Link>
    </div>
  );
}

export default TaskDetail;