import { Component, ReactNode } from "react";
import { Awards } from "../../../../types";
import "./Awards.scss";

export default class AwardComponent extends Component {
  render(): ReactNode {
    const { description, year, month } = this.props as Awards;

    return (
      <li className="award-item">
        <div>{description}</div>
        <span className="txt-muted">
          ({!!month && month + " "}
          {year})
        </span>
      </li>
    );
  }
}
