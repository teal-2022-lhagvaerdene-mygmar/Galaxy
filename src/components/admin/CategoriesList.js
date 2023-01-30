import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function CategoriesList({ list }) {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <EditingItem defaultValue={list.text} onCancel={() => editing(false)} />
    );
  }
  return (
    <>
      {list.map((item) => (
        <ListItem key={item.id} category={item} edit={() => setEditing(true)} />
      ))}
    </>
  );
}

function ListItem({ category, edit }) {
  function handleDelete() {
    if (window.confirm("Delete?")) {
      axios
        .delete(`http://localhost:50000/categories/${category.id}`)
        .then((res) => {
          const { data, status } = res;
          console.log({ data, status });
        });
    }
  }

  return (
    <Card key={category.id} className="mb-2">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div>{category.name}</div>

          <div>
            <Button variant="outline-primary" onClick={edit}>
              Засах
            </Button>{" "}
            <Button variant="outline-danger" onClick={handleDelete}>
              Устгах
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
function EditingItem(defaultValue, onCancel, onSave) {
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
