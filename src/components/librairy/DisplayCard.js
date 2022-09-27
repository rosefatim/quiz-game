import * as React from "react";
import { Card } from "antd";

const { Meta } = Card;

const DisplayCard = (props) => {
  return (
    <div>
      <Card
        hoverable={props.hoverable}
        style={props.style}
        cover={props.cover}
      >
        <Meta title={props.title} description={props.description} />
      </Card>
    </div>
  );
};

export default DisplayCard;
