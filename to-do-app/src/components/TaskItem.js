import React, { useState } from "react";
import { Link } from "react-router-dom";

function TaskItem({ task, deleteTask, toggleTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSave = () => {
    updateTask(task.id, title, description);
    setIsEditing(false);
  };

  return (
    <li className={task.done ? "done" : ""}>
      <div className="task-top">

        <div className="task-actions">
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task.id)}
          />

          {isEditing ? (
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          ) : (
            <Link to={`/task/${task.id}`} className="task-title">
              {task.title}
            </Link>
          )}
        </div>

        <div>
          <button onClick={() => deleteTask(task.id)}>Удалить</button>
          <button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Отмена" : "✏️"}
          </button>
        </div>
      </div>

      {isEditing ? (
        <>
          <input
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button onClick={handleSave}>Сохранить</button>
        </>
      ) : (
        <div className="task-desc">{task.description}</div>
      )}

      <div className="task-status">
        Статус: <b>{task.done ? "Выполнено ✅" : "В процессе ⏳"}</b>
      </div>
    </li>
  );
}

export default TaskItem;