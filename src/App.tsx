import { Component, ReactNode } from "react";
import "./App.css";
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

  render(): ReactNode {
    return (
      <div>
        <div>
          <h2>Skills</h2>
          <div className="skillset">{this.skillset}</div>
        </div>
      </div>
    );
  }

  get skillset(): ReactNode {
    return this.skills
      .sort((a, b) => b.percent - a.percent)
      .map((skill: Skill, i) => {
        return <SkillComponent key={i} {...skill} />;
      });
  }
}
