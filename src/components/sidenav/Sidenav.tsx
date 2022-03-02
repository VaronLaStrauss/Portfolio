import { Component, ReactNode, Fragment } from "react";
import { _links } from "../../constants/constants";
import "./Sidenav.scss";

export default class SidenavComponent extends Component {
  state = {
    isSidenavOpen: false,
  };

  render(): ReactNode {
    const { isSidenavOpen, onToggleSidenav } = this.props as {
      isSidenavOpen: boolean;
      onToggleSidenav: () => void;
    };

    return (
      <div className={"sidenav" + `${isSidenavOpen ? " open" : ""}`}>
        <div className="sidenav-content">
          <button className="btn-icon close" onClick={onToggleSidenav}>
            <span className="material-icons">close</span>
          </button>
          <div className="sidenav-links">{this.links}</div>
        </div>
      </div>
    );
  }

  scrollToTop() {
    document
      .querySelector("main")
      ?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  scrollToView(link: string) {
    const { onToggleSidenav } = this.props as { onToggleSidenav: () => void };
    document
      .querySelector(`#${link}`)!
      .querySelector(".anchor")!
      .scrollIntoView({ behavior: "smooth" });

    onToggleSidenav();
  }

  get links(): ReactNode {
    return _links.map((link, i) => {
      return (
        <Fragment key={i}>
          <a onClick={this.scrollToView.bind(this, link.target)}>{link.text}</a>
          {i !== _links.length - 1 && <hr />}
        </Fragment>
      );
    });
  }
}
