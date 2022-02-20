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
import { Skill } from "./types";

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
        <div className="cover">
          <CoverComponent />
        </div>
        <div>
          <h2>Skills</h2>
          <div className="skillset">{this.getSkillset(frontEndTech)}</div>
        </div>
        <div>
          <h2>Skills</h2>
          <div className="skillset">{this.getSkillset(designing)}</div>
        </div>
        <div>
          <h2>Skills</h2>
          <div className="skillset">
            {this.getSkillset(deploymentStrategies)}
          </div>
        </div>
        <div>
          <h2>Skills</h2>
          <div className="skillset">{this.getSkillset(networkingTech)}</div>
        </div>
        <div>
          <h2>Skills</h2>
          <div className="skillset">{this.getSkillset(backendTech)}</div>
        </div>
        <div>
          <h2>Skills</h2>
          <div className="skillset">{this.getSkillset(languages)}</div>
        </div>
        <div>
          <h2>Skills</h2>
          <div className="skillset">{this.getSkillset(databases)}</div>
        </div>
      </main>
    );
  }

  onToggleSidenav() {
    this.setState({ ...this.state, isSidenavOpen: !this.state.isSidenavOpen });
  }

  getSkillset(skillSet: Skill[]): ReactNode {
    return skillSet
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
