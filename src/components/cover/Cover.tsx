import { Component, ReactNode } from "react";
import "./Cover.scss";
import backMt1 from "../../assets/images/back-mt-1.png";
import backMt2 from "../../assets/images/back-mt-2.png";
import cloudsback from "../../assets/images/clouds-back.png";
import cloudsfront from "../../assets/images/clouds-front.png";
import midMt4 from "../../assets/images/mid-mt-4.png";
import midMt3 from "../../assets/images/mid-mt-3.png";
import midMt2 from "../../assets/images/mid-mt-2.png";
import midMt1 from "../../assets/images/mid-mt-1.png";
import frontMt from "../../assets/images/front-mt.png";
import moon from "../../assets/images/moon.png";
import stars from "../../assets/images/stars.png";
import sun from "../../assets/images/sun.png";
import skyDay from "../../assets/images/sky-day.png";
import skyNight from "../../assets/images/sky-night.png";
import me from "../../assets/images/Me.jpg";

export default class CoverComponent extends Component {
  state = {
    isDarkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
  };

  render(): ReactNode {
    return (
      <div className="cover">
        {!this.state.isDarkMode && <img className="background" src={skyDay} />}
        {this.state.isDarkMode && <img className="background" src={skyNight} />}
        {!this.state.isDarkMode && <img className="sun" src={sun} />}
        {this.state.isDarkMode && <img className="stars" src={stars} />}
        {this.state.isDarkMode && <img className="moon" src={moon} />}
        {!this.state.isDarkMode && (
          <img className="clouds-back" src={cloudsback} />
        )}
        <img className="back-mountain-2" src={backMt2} />
        <img className="back-mountain-1" src={backMt1} />
        {!this.state.isDarkMode && (
          <img className="clouds-front" src={cloudsfront} />
        )}
        <img className="mid-mountain-4" src={midMt4} />
        <img className="mid-mountain-3" src={midMt3} />
        <img className="mid-mountain-2" src={midMt2} />
        <img className="mid-mountain-1" src={midMt1} />
        <img className="front-mountain" src={frontMt} />
        <div className="cover-photo">
          <img src={me} />
        </div>
      </div>
    );
  }
}
