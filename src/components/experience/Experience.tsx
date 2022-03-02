import { Component, ReactNode } from "react";
import { experiences } from "../../constants/constants";
import ExpItem from "./exp-item/Exp-Item";
import "./Experience.scss";

export default class ExperienceComponent extends Component {
  render(): ReactNode {
    return (
      <div className="exp">
        <div className="title">
          <hr />
          <h2>Experiences</h2>
          <hr />
        </div>
        <div className="exp-list">{this.exp}</div>
      </div>
    );
  }

  get exp(): ReactNode {
    return experiences.map((exp, i) => {
      return <ExpItem key={i} {...exp} />;
    });
  }
}
