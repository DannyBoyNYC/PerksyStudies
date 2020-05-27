import React from "react";

export const HeroPage = ({ clname }) => {
  return (
    <div className={`hero-page ${clname}`}>
      <figure className="quote">
        <blockquote>
          <q>
            It just doesn’t feel like a survey. It’s this fun thing you like
            doing without really knowing why.
          </q>
          <figcaption>
            &ndash; Sara Posocco, 22, University of Delaware
          </figcaption>
        </blockquote>
      </figure>
    </div>
  );
};
