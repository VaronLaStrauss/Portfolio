import { Component, ReactNode } from "react";
import { Experience } from "../../../types";
import "./Exp-Item.scss";

export default class ExpItem extends Component {
  render(): ReactNode {
    const { company, endDate, logo, position, startDate } = this
      .props as Experience;
    return (
      <div className="exp-item card">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="info">
          <div className="info-header">
            <h3>{position}</h3>
            <span className="txt-muted">
              {company} ({startDate} - {endDate})
            </span>
          </div>
        </div>
      </div>
    );
  }
}
