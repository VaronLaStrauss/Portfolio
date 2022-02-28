import { Component } from "react";
import { Skill } from "../../../types";
import "./Skill-Item.scss";

export default class SkillItemComponent extends Component {
  render() {
    const { name, percent, logo } = this.props as Skill;
    const putPercentage = (node: HTMLElement | null) => {
      if (node) {
        node.style.setProperty("--percent", `${percent}%`);
      }
    };

    return (
      <article className="skill">
        <div className="logo">
          <img src={logo} alt={name} />
        </div>
        <div className="status">
          <div className="status-info">
            <div className="status-bar">
              <div className="bar-filled" ref={putPercentage}>
                <span>{percent}%</span>
              </div>
            </div>
            <div className="name">
              <span>{name}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }
}
