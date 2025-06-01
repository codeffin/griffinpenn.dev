import "./styles/ProjectStyles.css";
import ProjectBox from "./ProjectBox.tsx";
// import reactlogo from "./styles/Assets/Animated react logo.gif";
// import cpplogo from "./styles/Assets/C++_Logo.gif";
//import csharplogo from "./styles/Assets/Csharp_Logo.gif";
// import arduinologo from "./styles/Assets/Arduino_Logo.gif";
// import mysqllogo from "./styles/Assets/MySQL_Logo.gif";
// import unitylogo from "./styles/Assets/Unity_Logo.gif";
// import nodejslogo from "./styles/Assets/NodeJS_Logo.gif";

function Projects() {
  function ChangePage() {
    localStorage["currentPage"] = "Work";
  }
  return (
    <>
      <div onMouseEnter={ChangePage} id="projects-body">
        <div className="projects-elements container">
          <div className="projects-header">
            <p>
              My <b className="colored-emp">Projects</b>
            </p>
          </div>
          <div className="projects-bio">
            <p>
              Here are a few of my most <b>stand out</b> projects to date. Each
              have a public repository for you to explore on <b>GitHub</b>!
            </p>
          </div>
          <div className="projects-container-desktop">
            <ProjectBox
              title="Project Vulcn"
              bio="Really cool project! Experimenting with temperature immersion in virtual reality"
            />
            <ProjectBox
              title="G-Paint"
              bio="Experimenting with the canvas that allowed me to have a drawing mode on this website"
            />
            <ProjectBox
              title="Tec-Job Time Keeper"
              bio="Simulates clocking in and out for a job"
            />
            <ProjectBox
              title="ColabBoard"
              bio="Trello like scrum/agile project planner"
            />
          </div>
          <div className="projects-container-mobile">
            <ProjectBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
