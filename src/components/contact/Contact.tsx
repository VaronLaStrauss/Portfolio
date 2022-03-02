import { Component, ReactNode } from "react";
import { _contacts } from "../../constants/constants";
import "./Contact.scss";

export default class Contact extends Component {
  render(): ReactNode {
    return <div className="contact">{this.contacts}</div>;
  }

  get contacts(): ReactNode {
    return _contacts.map((contact, i) => {
      const { details, icon, logo, title } = contact;
      return (
        <span key={i} className="contact-info txt-muted">
          {!!logo && (
            <span className="img-holder">
              <img src={logo} />
            </span>
          )}
          {!!icon && <span className="material-icons">{icon}</span>}
          {!!title && (
            <a target="_blank" href={details}>
              {title}
            </a>
          )}
          {!!icon && <span>{details}</span>}
        </span>
      );
    });
  }
}
