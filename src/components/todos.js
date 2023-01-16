import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";
import UncontrolledExample from "./imageslider";
import CollapsibleExample from "./navbar";
import { Editing } from "./editing/editing";

function Todos() {
  const [save, setSave] = useState([]);
  function handleSave(text) {
    const newGarchig = {
      text: text,
      done: false,
      id: uuidv4(),
    };
    const newGarchigs = [newGarchig, ...save];
    setSave(newGarchigs);
  }
  function updateEditing(index, text) {
    const newSave = [...save];
    newSave[index].text = text;
    setSave(newSave);
  }
  function deleteli(bairlal) {
    if (window.confirm("ustgah uu")) {
      const newGarchig = [...save];
      newGarchig.splice(bairlal, 1);
      setSave(newGarchig);
    }
  }
  return (
    <>
      <CollapsibleExample />å
      <div>
        <UncontrolledExample />
      </div>
      <Editing onSave={handleSave} />
      <div>
        {save.map((niitlel, index) => {
          return (
            <Header
              key={niitlel.id}
              niitlel={niitlel}
              onUpdate={(text) => updateEditing(index, text)}
              onDelete={() => deleteli(index)}
            />
          );
        })}
      </div>
    </>
  );
}

export default Todos;
