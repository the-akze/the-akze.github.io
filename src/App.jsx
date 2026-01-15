import "./App.css";
import SocialContainer from "./components/SocialContainer";
import staticData from "./staticData";

import imgClouds from "./assets/img/akze_cloud.jpeg";
import imgProfile from "./assets/img/pfp.png";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div style={{margin: 0, padding: 0}}>

      <div className="banner" style={{backgroundImage: `url(${imgClouds})`}}>
        <div className="banner-info">
          <div className="banner-profile-container">
            <div className="pfp" style={{backgroundImage: `url(${imgProfile})`}} />
            <div className="banner-text">
              <h1 className="title">{staticData.bannerTitle}</h1>
              <p className="subtitle">{staticData.bannerDescription}</p>
            </div>
          </div>
          <SocialContainer data={{
            LinkedIn: "https://www.linkedin.com/in/the-akshat-s",
            GitHub: "https://github.com/the-akze",
            YouTube: "https://www.youtube.com/@the_akze",
            Instagram: "http://instagram.com/the_akze"
          }} />
        </div>
      </div>

      <div className="content">
        <div className="section-container">

          <div className="section" id="section-projects">
            <h1>Projects</h1>
            <p>{staticData.sections.projects.description}</p>

            <h2 className="italic">Larger Projects</h2>
            <CardContainer data={staticData.sections.projects.projectList1}/>

            <h2 className="italic">Smaller Projects</h2>
            <CardContainer data={staticData.sections.projects.projectList2}/>
          </div>

          {/* <div className="section" id="section-overview">
            <h1>Skills</h1>
            <p></p>

            <h4>Languages</h4>
            <p>C++, Shell Scripting (bash/zsh), Python, JavaScript, Java, HTML, CSS, C#, LaTeX</p>

            <h4>Frameworks</h4>
            <p>React Native, Expo, Node.js, Flask, p5.js, p5.play.js</p>

            <h4>Platforms</h4>
            <p>Linux, Fusion360 (CAD), KiCAD, git, vim, tmux, Unity, VSCode, Firebase</p>

            <h4>Hardware</h4>
            <p>3D Printing (OrcaSlicer), Arduino, Raspberry Pi, Breadboarding, Multimeter, Soldering, PCB Design</p>
          </div> */}
        </div>
      </div>

    </div>
  );
}

export default App;
