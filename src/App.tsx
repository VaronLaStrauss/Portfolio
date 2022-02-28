import { Component, ReactNode } from "react";
import "./App.scss";
import CoverComponent from "./components/cover/Cover";
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
import manHandOut from "./assets/images/man-hold-out-hand.png";

export default class App extends Component {
  state = { isMobile: window.innerWidth < 768, isSidenavOpen: false };

  componentDidMount() {
    window.addEventListener("resize", () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile !== this.state.isMobile) {
        this.setState({ isMobile, isSidenavOpen: false });
      }
    });
  }

  render(): ReactNode {
    return (
      <main>
        <SidenavComponent
          {...{
            isSidenavOpen: this.state.isSidenavOpen,
            onToggleSidenav: this.onToggleSidenav.bind(this),
          }}
        />
        <HeaderComponent
          {...{
            isMobile: this.state.isMobile,
            onToggleSidenav: this.onToggleSidenav.bind(this),
          }}
        />
        <CoverComponent />
        <div className="content">
          <div className="skills">
            {!this.state.isMobile && (
              <div className="man-hand-container">
                <img src={manHandOut} />
              </div>
            )}
            <div style={{ flex: "1 1 auto" }}>
              <div className="skillset-container">{this.skillset}</div>
            </div>
          </div>
        </div>
      </main>
    );
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
