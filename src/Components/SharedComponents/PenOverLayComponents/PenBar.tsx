import "./Styles/PenBarStyles.css";
import pen from "./Styles/Assests/pen.png";
import { useState } from "react";

function PenBar() {
  const [isVisible, setVisibility] = useState(false);

  function DisplayTools() {
    const tools = document.getElementById("flyup-bar");

    if (!isVisible) {
      tools!.style.visibility = "visible";
      setVisibility(true);
    }

    if (isVisible) {
      tools!.style.visibility = "hidden";
      setVisibility(false);
    }
  }
  return (
    <>
      <div id="penbar-body">
        <div className="penbar-buttons">
          <button id="pen-button" className="penbar-button">
            <div id="flyup-bar" className="flyup-bar-styles">
              <ul className="tools">
                <li
                  onClick={() => {
                    document.body.style.cursor = "crosshair";
                  }}
                >
                  Pen
                </li>
                <li>
                  <input type="color" />
                </li>
                <li
                  onClick={() => {
                    document.body.style.cursor =
                      "url('https://i.sstatic.net/bUGV0.png'), auto";
                  }}
                >
                  E
                </li>
              </ul>
            </div>
            <img onClick={DisplayTools} src={pen} />
          </button>
        </div>
      </div>
    </>
  );
}
export default PenBar;
