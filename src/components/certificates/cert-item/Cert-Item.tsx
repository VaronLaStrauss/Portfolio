import { Component, ReactNode } from "react";
import { Certifications } from "../../../types";
import "./Cert-Item.scss";

export default class CertItem extends Component {
  render(): ReactNode {
    const { issuer, logo, name } = this.props as Certifications;
    return (
      <div className="cert-item">
        <div className="logo">
          <img src={logo} />
        </div>
        <div>
          <h3>{name}</h3>
          <span className="txt-muted">{issuer}</span>
        </div>
      </div>
    );
  }
}
