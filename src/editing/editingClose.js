import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function EditingClose({ onSave, show, onClose }) {
  const [save, setSave] = useState("");
  const [error, setError] = useState("");
  function saveChanges(e) {
    setSave(e.target.value);
  }
  function addGarchig() {
    if (save === "") {
      setError("utgaa oruulna uu");
    } else {
      onSave(save);
      setSave("");
      setError("");
    }
  }
  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>New news</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            placeholder="garchig oruulna uu"
            value={save}
            style={{ borderColor: error ? "red" : "black" }}
            onChange={saveChanges}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addGarchig}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
