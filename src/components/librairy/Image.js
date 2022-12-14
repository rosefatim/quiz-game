import * as React from "react";

const DisplayImage = (props) => {
  return (
    <img
      src={props.source}
      alt={props.alt}
      style={{
        ...props.style
      }}
      width={props.w}
      height={props.h}
    />
  );
};

export { DisplayImage };
