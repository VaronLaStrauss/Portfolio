import { Component, ReactNode } from "react";
import { certifications } from "../../constants/constants";
import CertItem from "./cert-item/Cert-Item";
import "./Certificates.scss";

export default class CertificateComponent extends Component {
  render(): ReactNode {
    return (
      <div className="certificates">
        <div className="title">
          <hr />
          <h2>Certificates</h2>
          <hr />
        </div>
        <div className="cert-items">{this.certs}</div>
      </div>
    );
  }

  get certs(): ReactNode {
    return certifications.map((cert, i) => {
      return <CertItem key={i} {...cert} />;
    });
  }
}
