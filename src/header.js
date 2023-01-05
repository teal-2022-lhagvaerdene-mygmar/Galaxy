import { medee } from "./data";
import "./header.css";
function Header() {
  return (
    <div id="hi" className="mt-3">
      {medee.map((niitlel) => (
        <div
          key={niitlel.id}
          className=" container border mb-5"
          id={niitlel.id}
        >
          <div className="d-flex justify-content-between ">
            <h1>{niitlel.name}</h1>
            <div>
              <button className="btn btn-primary ">edit</button>
              <button className="btn btn-danger ">delete</button>
            </div>
          </div>
          <div>
            <img src={niitlel.src} alt="hi" width={1300} />
            <p>{niitlel.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Header;
