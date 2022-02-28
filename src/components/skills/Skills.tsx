import { Component, ReactNode } from "react";
import { Skill } from "../../types";
import SkillItemComponent from "./skill-item/Skill-Item";
import "./Skills.scss";

export default class SkillComponent extends Component {
  render() {
    const { skillname, skills } = this.props as {
      skillname: string;
      skills: Skill[];
    };
    return (
      <div className="card">
        <div className="skill-name">
          <hr />
          <h2>{skillname}</h2>
          <hr />
        </div>
        <div className="skillset">{this.getSkillset(skills)}</div>
      </div>
    );
  }

  getSkillset(skillSet: Skill[]): ReactNode {
    return skillSet
      .sort((a, b) => b.percent - a.percent)
      .map((skill: Skill, i) => {
        return (
          <div key={i} className="skill-container">
            <SkillItemComponent {...skill} />
          </div>
        );
      });
  }
}
