import { Component, ReactNode } from "react";
import "./App.scss";
import manHandOut from "./assets/images/man-hold-out-hand.png";
import AboutMe from "./components/about-me/About-Me";
import CertificateComponent from "./components/certificates/Certificates";
import Contact from "./components/contact/Contact";
import CoverComponent from "./components/cover/Cover";
import EducationComponent from "./components/education/Education";
import ExperienceComponent from "./components/experience/Experience";
import HeaderComponent from "./components/header/Header";
import SidenavComponent from "./components/sidenav/Sidenav";
import SkillComponent from "./components/skills/Skills";
import {
  backendTech,
  databases,
  deploymentStrategies,
  designing,
  frontEndTech,
  languages,
  networkingTech,
} from "./constants/constants";

export default class App extends Component {
  state = {
    isMobile: window.innerWidth < 768,
    isSidenavOpen: false,
    isDarkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile !== this.state.isMobile) {
        this.setState({ isMobile, isSidenavOpen: false });
      }
    });

    if (this.state.isDarkMode) {
      document.querySelector("#root")?.classList.add("dark");
    }
  }

  render(): ReactNode {
    return (
      <>
        <SidenavComponent
          {...{
            isSidenavOpen: this.state.isSidenavOpen,
            onToggleSidenav: this.onToggleSidenav.bind(this),
          }}
        />
        <main>
          <HeaderComponent
            {...{
              isMobile: this.state.isMobile,
              onToggleSidenav: this.onToggleSidenav.bind(this),
              onToggleTheme: this.onToggleTheme.bind(this),
              isDarkMode: this.state.isDarkMode,
            }}
          />
          <CoverComponent {...{ isDarkMode: this.state.isDarkMode }} />
          <div className="content">
            <AboutMe />
            <div className="knowledge" id="knowledge">
              <div className="anchor"></div>
              <EducationComponent />
              <CertificateComponent />
            </div>
            <div id="experience">
              <div className="anchor"></div>
              <ExperienceComponent />
            </div>
            <div className="skills" id="skills">
              <div className="anchor"></div>
              {!this.state.isMobile && (
                <div className="man-hand-container">
                  <img src={manHandOut} />
                </div>
              )}
              <div style={{ flex: "1 1 auto" }}>
                <div className="skillset-container">{this.skillset}</div>
              </div>
            </div>
            <Contact />
          </div>
        </main>
      </>
    );
  }

  onToggleTheme() {
    if (this.state.isDarkMode) {
      document.querySelector("#root")?.classList.remove("dark");
    } else {
      document.querySelector("#root")?.classList.add("dark");
    }
    this.setState({ ...this.state, isDarkMode: !this.state.isDarkMode });
  }

  get skillset(): ReactNode {
    const skills = [
      { skillname: "Front-End", skills: frontEndTech },
      { skillname: "Back-End", skills: backendTech },
      { skillname: "Networking", skills: networkingTech },
      { skillname: "Databases", skills: databases },
      { skillname: "Languages", skills: languages },
      { skillname: "Deployment", skills: deploymentStrategies },
      { skillname: "Designing", skills: designing },
    ];
    return skills.map(({ skillname, skills }, i) => {
      return <SkillComponent key={i} {...{ skillname, skills }} />;
    });
  }

  onToggleSidenav() {
    this.setState({ ...this.state, isSidenavOpen: !this.state.isSidenavOpen });
  }
}
