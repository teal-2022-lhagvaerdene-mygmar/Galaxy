import { useState } from "react";
import { EditingClose } from "./editingClose";

export function Editing() {
  const [editing, setEditing] = useState(false);

  function close() {
    setEditing(false);
  }
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4 container">
        <h1>Angilal</h1>
        <button className="btn btn-primary" onClick={() => setEditing(true)}>
          new
        </button>
        <EditingClose show={editing} onClose={close} />
      </div>
    </div>
  );
}
