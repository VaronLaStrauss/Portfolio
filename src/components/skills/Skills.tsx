import { Component } from "react";
import { Skill } from "../../types";
import "./Skills.scss";

export default class SkillComponent extends Component {
  render() {
    const { name, percent, logo } = this.props as Skill;

    return (
      <article className="skill card">
        <div className="logo">
          {!!logo ? (
            <img src={"logo/" + logo} alt={name} />
          ) : (
            <span className="material-icons">image</span>
          )}
        </div>
        <div className="status tooltip">
          <span>{name}</span>
          <div className="status-bar">
            <span className="tooltip-text">{percent}%</span>
            <div className="bar-filled" style={{ width: `${percent}%` }}></div>
          </div>
          <div className="percentages">
            <span>0%</span>
            <span className="spacer"></span>
            <span>100%</span>
          </div>
        </div>
      </article>
    );
  }
}
