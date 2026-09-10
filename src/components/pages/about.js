import React from "react";
import profilePicture from "../../../static/assets/images/bio/profile.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        I'm a graphic designer with a background in Fine Arts, working across
        visual design, sound and — more recently — code. My design sense was
        shaped through image editing, layout and vector work, as well as sound
        design for cultural projects, which taught me to think in terms of
        rhythm, composition and detail. After completing a Fullstack development
        program, I added front-end development to that toolkit, and I'm now
        looking to work at the intersection of design and code — building
        interfaces that are as thoughtful visually as they are functionally. I
        enjoy interdisciplinary work and I'm always curious to learn new tools
        and ways of creating.
      </div>
    </div>
  );
}
