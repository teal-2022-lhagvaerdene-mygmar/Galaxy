import { useState } from "react";

import "./header.css";
function Header({ niitlel, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [done, setDone] = useState(false);
  function handleDoneToggle() {
    setDone(!done);
  }
  function handleSave(text) {
    onUpdate(text);
    setEditing(false);
  }
  if (editing) {
    return (
      <EditimgItem
        defaultValue={niitlel.text}
        onCancel={() => setEditing(false)}
        onSave={handleSave}
      />
    );
  }
  return (
    <NormalItem
      onToggleDone={handleDoneToggle}
      done={done}
      niitlel={niitlel}
      onEdit={() => setEditing(true)}
      onDelete={onDelete}
    />
  );
}
export default Header;
function EditimgItem({ onSave, onCancel, defaultValue }) {
  const [text, setText] = useState(defaultValue);
  return (
    <div className="container card-new">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <div>
        <button className="btn btn-outline-primary" onClick={() => onCancel()}>
          bolih
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => onSave(text)}>
          save
        </button>
      </div>
    </div>
  );
}
function NormalItem({ niitlel, onEdit, onDelete }) {
  return (
    <div className="card-new container">
      <div>{niitlel.text}</div>
      <div>
        {!niitlel.done && (
          <button className="btn btn-outline-warning" onClick={onEdit}>
            edit
          </button>
        )}
        <button className="btn btn-outline-danger" onClick={onDelete}>
          delete
        </button>
      </div>
    </div>
  );
}
