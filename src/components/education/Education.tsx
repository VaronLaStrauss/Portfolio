import { Component, ReactNode } from "react";
import { education } from "../../constants/constants";
import { Education } from "../../types";
import EducItem from "./educ-item/Educ-Item";
import "./Education.scss";

export default class EducationComponent extends Component {
  _educationList: Education[] = education;

  render(): ReactNode {
    return (
      <div className="education">
        <div className="title">
          <hr />
          <h2>Education</h2>
          <hr />
        </div>
        <div className="educ-list">{this.educationList}</div>
      </div>
    );
  }

  get educationList(): ReactNode {
    return this._educationList.map((educ, i) => {
      return <EducItem key={i} {...educ} />;
    });
  }
}
