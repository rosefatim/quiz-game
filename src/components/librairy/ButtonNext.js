import React from "react";
import { Button } from "antd";

import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ButtonNext = (props) => {
  return (
    <div>
      <Link to={props.to}>
        <Button
          style={{ backgroundColor: "#A44B9B", color: "white" }}
          size="large"
          shape="circle"
          icon={<RightOutlined />}
        />
      </Link>
    </div>
  );
};

export  {ButtonNext};
