import React, { useState } from "react";

function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!title.trim()) {
      alert("Название обязательно");
      return;
    }

    addTask({
      title,
      description,
      done: false
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="form">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Название задачи"
      />
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Описание"
      />
      <button onClick={handleAdd}>Добавить</button>
    </div>
  );
}

export default AddTask;