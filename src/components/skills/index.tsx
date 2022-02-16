import { Component } from "react";
import { Skill } from "../../types";
import "./index.scss";

export default class SkillComponent extends Component {
  render() {
    const { name, percent, logo } = this.props as Skill;

    return (
      <article>
        {!!logo ? (
          <img className="logo" src={logo} alt={name} />
        ) : (
          <span className="material-icons logo">image</span>
        )}
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
