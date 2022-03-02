import { Component, ReactNode } from "react";
import { Awards, Education } from "../../../types";
import AwardComponent from "./awards/Awards";
import "./Educ-Item.scss";

export default class EducItem extends Component {
  render(): ReactNode {
    const { degree, logo, school, year, fieldOfStudy, awards } = this
      .props as Education;

    return (
      <div className="educ-item">
        <div className="timeline">
          <span className="material-icons">school</span>
          <div className="stick"></div>
        </div>
        <div className="details-container">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="details">
            <div className="header">
              <h3>{degree}</h3>
              <span className="spacer-sm"></span>
              <span className="txt-muted">({year})</span>
            </div>
            <span className="txt-muted">{school}</span>
            <span>{fieldOfStudy}</span>
            {!!awards && (
              <ul className="award-list">{this.getAwards(awards)}</ul>
            )}
          </div>
        </div>
      </div>
    );
  }

  getAwards(awards: Awards[]): ReactNode {
    return awards.map((award, i) => {
      return <AwardComponent key={i} {...award} />;
    });
  }
}
