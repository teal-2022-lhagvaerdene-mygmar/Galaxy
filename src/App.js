import "./App.css";
import Header from "./header.js";
import CollapsibleExample from "./navbar";

function App() {
  return (
    <>
      <CollapsibleExample />
      <h1 className="container">World sports news</h1>
      <div>
        <Header />
      </div>
    </>
  );
}

export default App;
