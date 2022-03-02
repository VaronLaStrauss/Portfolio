import { Component, ReactNode } from "react";
import "./About-Me.scss";

export default class AboutMe extends Component {
  render(): ReactNode {
    return (
      <div className="about-me" id="about">
        <div className="anchor"></div>
        <h1>About Me</h1>
        <hr />
        <div className="right">
          I am a firm believer of the saying, “if I’m going to do it, I might as
          well do it to the best of my abilities,” and because I know what must
          be done and how to do them, I firmly believe in my capabilities and
          methodologies. I am an adaptable and responsible student who tries to
          approach problems step by step and recursively to avoid errors and
          increase efficiency. I am also adept in data structures and their
          manipulation thereof in multiple languages, and I can analyze excerpts
          efficiently. I also have great people and leadership skills. As I do
          not believe in perfection if I do not know the answers immediately, I
          turn my head to research, immerse myself in it, and look for answers
          to solve the problems – after all, unsolved problems are persistent as
          well as curiosity. I am currently an BSIT student at College of
          Information and Computing Sciences located in University of Santo
          Tomas. I have been honing my web development skills for more than two
          years, including backend and frontend services. I amass varying
          languages for the purpose of learning them. I am Viany Manuel, and I
          look forward to optimizingyour systems.
        </div>
      </div>
    );
  }
}
