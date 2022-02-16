import { Component, ReactNode } from "react";
import "./App.css";
import SkillComponent from "./components/skills";
import Cover from "./components/top/Cover";
import { Skill } from "./types";

export default class App extends Component {
  skills: Skill[] = [{ name: "Angular", percent: 90, logo: "angular.png" }];

  render(): ReactNode {
    return (
      <div>
        <Cover />
        <div>
          <h2>Skills</h2>
          {this.skillset}
        </div>
      </div>
    );
  }

  get skillset(): ReactNode {
    return this.skills.map((skill: Skill, i) => {
      return <SkillComponent key={i} {...skill} />;
    });
  }
}
