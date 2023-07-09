import React from "react";
import { Link } from "react-router-dom";

import "../Intro/intro.css";

const Intro = () => {
  return (
    <div className="intro justify--content">
      <span>
        In a distant planet, the Drakenthar draws fighters from across the
        galaxy for legendary battles. No one has ever succeeded in reaching the
        end of this mysterious dungeon. Legends tell of an immense power hidden
        within. Now, it is up to you to dare face its dangers and uncover the
        secrets of the dungeon. Glory and fortune await you, but also a
        revelation that could change the destiny of the galaxy.
      </span>
      <Link to={'/map'}><span>Suite</span></Link>
    </div>
  );
};

export default Intro;
