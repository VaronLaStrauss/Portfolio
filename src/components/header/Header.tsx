import { Component, ReactNode } from "react";
import { _links } from "../../constants/constants";
import "./Header.scss";

export default class HeaderComponent extends Component {
  render(): ReactNode {
    const { isMobile, onToggleSidenav, isDarkMode } = this.props as {
      isMobile: boolean;
      onToggleSidenav: () => void;
      isDarkMode: boolean;
    };
    const btnTrigger = (
      <button className="btn-icon" onClick={onToggleSidenav}>
        <span className="material-icons">menu</span>
      </button>
    );

    return (
      <nav>
        {isMobile && btnTrigger}
        <a onClick={this.scrollToTop}>Viany</a>
        <span className="spacer"></span>
        {!isMobile && this.links}
        <a className="trigger" onClick={this.setMode.bind(this)}>
          <span className="material-icons">
            {isDarkMode ? "light_mode" : "dark_mode"}
          </span>
        </a>
      </nav>
    );
  }

  setMode() {
    const { onToggleTheme } = this.props as {
      onToggleTheme: () => void;
    };

    onToggleTheme();
  }

  scrollToTop() {
    document
      .querySelector("main")
      ?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  scrollToView(link: string) {
    document
      .querySelector(`#${link}`)!
      .querySelector(".anchor")!
      .scrollIntoView({ behavior: "smooth" });
  }

  get links(): ReactNode {
    return _links.map((link, i) => {
      return (
        <a key={i} onClick={this.scrollToView.bind(this, link.target)}>
          {link.text}
        </a>
      );
    });
  }
}
