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
            <h1>{staticData.sections.projects.title}</h1>
            <p>{staticData.sections.projects.description}</p>
            <CardContainer data={staticData.sections.projects.projectList}/>
          </div>

          <div className="section" id="section-overview">
            <h1>sample text</h1>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
