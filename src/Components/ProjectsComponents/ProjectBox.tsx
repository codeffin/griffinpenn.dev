import "./styles/ProjectBoxStyles.css";
import temp from "./styles/Assets/LOGO.png";

function ProjectBox() {
  return (
    <>
      <div className="project-box">
        <img src={temp} />
        <h3>Title</h3>
        <button id="expand-button">A</button>
      </div>
    </>
  );
}

export default ProjectBox;
