import { createElement } from "react";
import { Button } from "react-bootstrap";
import "./header.css";
function Header() {
  return (
    <div className="card-header">
      <div className="card-new">
        <div>
          <h1>Angilal</h1>
        </div>
        <div>
          <Button variant="outline-primary">New</Button>{" "}
        </div>
      </div>
      <div>
        <div className="card-div">
          <div>
            <h2>FIFA</h2>
            <p>
              FIFA president Gianni Infantino, has made the bizarre request that
              every country in the world names one stadium in tribute to the
              Brazilian great, Pelé. “Why is Infantino making everyone do his
              dirty work?” Mick Colliss said on 6PR Breakfast. “There is no
              relevance to Australia to have a Pelé stadium, it’s ridiculous.”
            </p>
          </div>
          <div>
            <Button className="card-b" variant="outline-dark">
              edit
            </Button>
          </div>
        </div>
        <div className="card-div">
          <div>
            <h2>NBA</h2>
            <p>
              Mitchell's 71 points, 13 of them in an epic overtime session, were
              the most points scored by a single player in nearly 17 years,
              since Kobe Bryant's unforgettable 81 against the Toronto Raptors
              in 2006. There was a seemingly endless line of records left in
              Mitchell's wake en route to the 143-134 overtime win, but one
              seemed more relevant than all the others.
            </p>
          </div>
          <div>
            <Button className="card-b" variant="outline-dark">
              edit
            </Button>
          </div>
        </div>
        <div className="card-div">
          <div>
            <h2>Super cars</h2>
            <p>
              A £10 million procession of luxury cars driven by wedding-goers on
              New Year’s Eve looked like a scene out of hit movie, Fast and
              Furious. Some 20 supercars and another 10 Rolls Royces gathered
              near Birmingham after friends of Kasim Ali and his bride-to-be
              Natasha met up ahead of their wedding.
            </p>
          </div>
          <div>
            <Button className="card-b" variant="outline-dark">
              edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
