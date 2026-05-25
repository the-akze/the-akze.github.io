import "./App.css";
import SocialContainer from "./components/SocialContainer";
import staticData from "./staticData";

import imgClouds from "./assets/img/akze_cloud.jpeg";
import imgProfile from "./assets/img/pfp.png";
import imgWaveform from "./assets/img/waveform.png";

import { FaSpotify, FaYoutube } from "react-icons/fa";

import CardContainer from "./components/CardContainer";
import { SiApplemusic } from "react-icons/si";

function App() {
  return (
    <div style={{margin: 0, padding: 0}}>

      <div className="banner" style={{backgroundImage: `url(${imgClouds})`}}>
        <div className="banner-info">
          <div className="banner-profile-container">
            <div className="pfp" style={{backgroundImage: `url(${imgProfile})`}} />
            <div className="banner-text">
              <div className="title-container">
                <h1 className="title">{staticData.bannerTitle}</h1>
                <div className="title-waves" style={{backgroundImage: `url(${imgWaveform})`}}>
                  <p>
                    LISTEN TO MY MUSIC!
                  </p>
                  <div className="title-waves-music-link-container">
                    <a target="_blank" href={staticData.links.spotify} className="title-waves-music-link"><FaSpotify></FaSpotify></a>
                    <a target="_blank" href={staticData.links.applemusic} className="title-waves-music-link"><SiApplemusic></SiApplemusic></a>
                    <a target="_blank" href={staticData.links.youtube} className="title-waves-music-link"><FaYoutube></FaYoutube></a>
                  </div>
                </div>
              </div>
              <p className="subtitle">{staticData.bannerDescription}</p>
            </div>
          </div>
          <SocialContainer data={{
            LinkedIn: staticData.links.linkedin,
            GitHub: staticData.links.github,
            YouTube: staticData.links.youtube,
            Instagram: staticData.links.instagram
          }} />
        </div>
      </div>

      <div className="content">
        <div className="section-container">

          <div className="section" id="section-projects">
            <h1>Projects</h1>
            {/* <p>{staticData.sections.projects.description}</p> */}

            {/* <h2 className="italic">Larger Projects</h2> */}
            <CardContainer data={staticData.sections.projects.projectList1}/>

            {/* <h2 className="italic">Smaller Projects</h2> */}
            {/* <CardContainer data={staticData.sections.projects.projectList2}/> */}

            <br/><br/>
            <p>This website is still under construction!</p>
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
