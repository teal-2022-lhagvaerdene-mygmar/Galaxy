import "./App.css";
import { Editing } from "./editing/editing";
import Header from "./header.js";
import UncontrolledExample from "./imageslider";
import CollapsibleExample from "./navbar";

function App() {
  return (
    <>
      <CollapsibleExample />

      <div>
        <UncontrolledExample />
      </div>
      <h1 className="container head">World sports news</h1>
      <Editing />
      <div>
        <Header />
      </div>
    </>
  );
}

export default App;
