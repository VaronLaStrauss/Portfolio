import { Component, ReactNode } from "react";
import "./Header.scss";

export default class HeaderComponent extends Component {
  _links: { target: string; text: string }[] = [
    { target: "", text: "Home" },
    { target: "", text: "Skills" },
    { target: "", text: "Experience" },
    { target: "", text: "Education" },
    { target: "", text: "Contact" },
  ];

  render(): ReactNode {
    const { isMobile, onToggleSidenav } = this.props as {
      isMobile: boolean;
      onToggleSidenav: () => void;
    };
    const btnTrigger = (
      <button className="btn-icon accent" onClick={onToggleSidenav}>
        <span className="material-icons">menu</span>
      </button>
    );

    return (
      <nav>
        {isMobile && btnTrigger}
        <a href="#">Viany</a>
        <span className="spacer"></span>
        {!isMobile && this.links}
      </nav>
    );
  }

  get links(): ReactNode {
    return this._links.map((link, i) => {
      return (
        <a key={i} href={"#" + link.target}>
          {link.text}
        </a>
      );
    });
  }
}
