import React from "react";
import AddToDoItem from "./AddToDoItem";

// Todo
// -addToDo
// -additem

function AddToDo({ handleToDo }) {
  const [text, setText] = React.useState("");

  const onClick = () => {
    handleToDo(text);
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(el) => setText(el.target.value)}
        placeholder="ADD TODO"
      />
      <button onClick={onClick}>Add</button>
    </div>
  );
}



function ToDo() {
  const [toDos, setToDos] = React.useState([]);

  const handleToDo = (text) => {
    const newItem = {
      id: Math.random() + Date.now() + text,
      title: text,
      status: false,
    };

    setToDos([...toDos, newItem]);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      {/* AddToDo */}
      <AddToDo handleToDo={handleToDo} />

      {/* AddToDoItem */}
      <div>
        {toDos.map((e) => (
          <AddToDoItem key={e.id} status={e.status} title={e.title} id={e.id} />
        ))}
      </div>
    </div>
  );
}

export default ToDo;

// 2591038425
