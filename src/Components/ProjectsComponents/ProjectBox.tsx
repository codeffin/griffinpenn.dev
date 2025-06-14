import "./styles/ProjectBoxStyles.css";
import temp from "./styles/Assets/LOGO.png";
import video from "./styles/Assets/movie.mp4";
import { useState } from "react";

function ProjectBox(props: any) {
  const [clicked, setClicked] = useState(false);

  const ExpandBox = () => {
    setClicked((prev) => !prev);
  };

  return (
    <>
      {!clicked ? (
        <div id="unclicked" className="project-box">
          <img src={temp} />
          <h3>{props.title}</h3>
          <button id="expand-button" onClick={ExpandBox}>
            A
          </button>
        </div>
      ) : (
        <div id="clicked" className="expanded-box">
          <video controls>
            <source src={video} type="video/mp4"></source>
          </video>
          <h2>{props.title}</h2>
          <p>{props.bio}</p>
          <button onClick={ExpandBox}>collapse</button>
        </div>
      )}
    </>
  );
}

export default ProjectBox;
