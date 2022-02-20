import { Component } from "react";
import { Skill } from "../../types";
import "./Skills.scss";

export default class SkillComponent extends Component {
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
          {/* <span className="small-spacer"></span> */}
          <div className="status-info">
            <div className="status-bar">
              {/* <div className="triangle-right"></div> */}
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
