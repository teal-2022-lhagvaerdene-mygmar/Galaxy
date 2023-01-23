import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EditingClose } from "./editingClose";
import Header from "./header";

export function Editing({ onSave }) {
  const [searchParams, setSearchParams] = useSearchParams({});

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((req) => req.json())
      .then((data) => setList(data.products));
  }, []);

  function closeModal() {
    setSearchParams({});
  }

  const editing = searchParams.get("editing") === "new";

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4 container">
        <h1>Angilal</h1>
        <button
          className="btn btn-primary"
          onClick={() => setSearchParams({ editing: "new" })}>
          new
        </button>
        <EditingClose show={editing} onClose={closeModal} onSave={onSave} />
        <Header list={list} />
      </div>
    </div>
  );
}
