import * as React from "react";
import {Button} from "antd";
import { Link } from "react-router-dom";

const DisplayLink = (props) => {
  return (
    <Link to={props.to}>
      <Button
        variant={props.type}
        style={{
          ...props.style
        }}
        onClick={() => {
          props.onPress();
        }}
        disabled={props.disabled}
        startIcon={props.startIcon}
        icon={props.icon}
      >
        <p
          style={{
            ...props.textStyle
          }}
        >
          {props.text}
        </p>
      </Button>
    </Link>
  );
};

export { DisplayLink };
