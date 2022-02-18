import { Component, ReactNode } from "react";
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
        </div>
      </div>
    );
  }
}
