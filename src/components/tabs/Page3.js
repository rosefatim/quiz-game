import React from "react";
import NavBar from "../librairy/Header";
import { Layout, Typography, Input, Card, Space } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import {ButtonNext} from "../librairy/ButtonNext";
import { DisplayImage } from "../librairy/Image";
import { DisplayCard } from "../librairy/Card";

const { Content } = Layout;
const { Text } = Typography;
const { Meta } = Card;

const Page3 = () => {
  return (
    <div>
      <NavBar />
      <Content style={{ padding: "5%" }}>
        <div>
          <Text>
            Cochez oeuvres africaines citées dans la chanson Black Memory.{" "}
          </Text>
          <br />
          <Text>Complez les oeuvres manquantes s'il y en a.</Text>
        </div>
        <Space direction="vertical" style={{ marginTop: "2%" }}>
          <Space direction="horizontal">
            <DisplayCard
              style={{ width: 240 }}
              cover={
                <DisplayImage
                source={require("../../assets/pagne.png")}
                alt={" le page noir "}
                w={240}
                h={190}
                />              
              }
              title={"Le pagne noir"}
            />
            <DisplayCard
              style={{ width: 240 }}
              cover={
                <DisplayImage
                source={require("../../assets/ebinto.png")}
                alt={"Les frasques d'Ebinto"}
                w={240}
                h={190}
                />              
              }
              title={"Les frasques d'Ebinto"}
            />
            <DisplayCard
              style={{ width: 240 }}
              cover={
                <DisplayImage
                source={require("../../assets/aube.png")}
                alt={"Et l'aube se leva"}
                w={240}
                h={190}
                />              
              }
              title={"Et l'aube se leva"}
            />
              
          </Space>
          <Space direction="horizontal" style={{ marginTop: "2%" }}>
            <Card
              hoverable={false}
              style={{ width: 240 }}
              cover={
                <img
                  src={require("../../assets/rectangle7.png")}
                  alt=" vide "
                  width="240"
                  height="190"
                />
              }
            >
              <QuestionCircleOutlined
                style={{ position: "absolute", left: "50%", top: "30%" }}
              />
              <Input />
            </Card>
            <Card
              hoverable={false}
              style={{ width: 240 }}
              cover={
                <img
                  src={require("../../assets/rectangle7.png")}
                  alt=" vide "
                  width="240"
                  height="190"
                />
              }
            >
              <QuestionCircleOutlined
                style={{ position: "absolute", left: "50%", top: "30%" }}
              />

              <Input />
            </Card>
            <Card
              hoverable={false}
              style={{ width: 240 }}
              cover={
                <img
                  src={require("../../assets/rectangle7.png")}
                  alt=" vide "
                  width="200"
                  height="190"
                />
              }
            >
              <QuestionCircleOutlined
                style={{ position: "absolute", left: "50%", top: "30%" }}
              />

              <Input />
            </Card>
          </Space>
         
          <ButtonNext
          to="/page4"
          />
        </Space>
      </Content>
    </div>
  );
};

export default Page3;
