import React from "react";

export default ({ prevDirs }) => {
  return prevDirs
    .reverse()
    .slice(1, prevDirs.length - 1)
    .map((dir, i) => (
      <div
        key={i}
        className="Arrow previous"
        style={{
          rotate: `${dir}deg`,
          opacity: 0.8 - i / 30
        }}
      />
    ));
};