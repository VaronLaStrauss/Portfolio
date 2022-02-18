import { Component, ReactNode } from "react";
import "./App.scss";
import CoverComponent from "./components/cover/Cover";
import HeaderComponent from "./components/header/Header";
import SidenavComponent from "./components/sidenav/Sidenav";
import SkillComponent from "./components/skills/Skills";
import { Skill } from "./types";

export default class App extends Component {
  skills: Skill[] = [
    { name: "Angular", percent: 90, logo: "angular.png" },
    { name: "React", percent: 60, logo: "react.svg" },
    { name: "TypeScript", percent: 80, logo: "typescript.png" },
    { name: "JavaScript", percent: 80, logo: "javascript.png" },
    { name: "CSS", percent: 60, logo: "css.png" },
    { name: "Docker", percent: 25, logo: "docker.png" },
  ];

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
        <div className="cover">
          <CoverComponent />
        </div>
        <div>
          <h2>Skills</h2>
          <div className="skillset">{this.skillset}</div>
        </div>
      </main>
    );
  }

  onToggleSidenav() {
    this.setState({ ...this.state, isSidenavOpen: !this.state.isSidenavOpen });
  }

  get skillset(): ReactNode {
    return this.skills
      .sort((a, b) => b.percent - a.percent)
      .map((skill: Skill, i) => {
        return (
          <div key={i} className="skill-container">
            <SkillComponent {...skill} />
          </div>
        );
      });
  }
}
