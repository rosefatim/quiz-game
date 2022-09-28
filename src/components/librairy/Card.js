import * as React from "react";
import { Card,Input} from "antd";
const { Meta } = Card;


const DisplayCard = (props) => {
  return (
    <Card
      cover={props.cover}
      style={{
        ...props.style
      }}
      onClick={() => {
      props.onPress();
      }}
    >
        <Meta
        title={props.title}
        description={props.description}
        style={props.style}
        />
          
      
    </Card>
  );
};

export { DisplayCard };
