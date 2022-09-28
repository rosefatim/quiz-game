import React from "react";
import NavBar from "../librairy/Header";
import { Layout, Typography, Input, Card, Space } from "antd";
import { QuestionCircleOutlined} from "@ant-design/icons";
import {ButtonNext} from "../librairy/ButtonNext";
import { DisplayCard } from "../librairy/Card";
import { DisplayImage } from "../librairy/Image";

const { Content } = Layout;
const { Text } = Typography;
const { Meta } = Card;

const Page5 = () => {
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
            <Card
              hoverable={false}
              style={{ width: 240 }}
              cover={
                <img
                  src={require("../../assets/bernard.png")}
                  alt=" bernard "
                  width="240"
                  height="190"
                />
              }
            >
              <Meta title="Bernard Dadie" />
            </Card>
          
            <Card
              hoverable={false}
              style={{ width: 240 }}
              cover={
                <img
                  src={require("../../assets/aime.png")}
                  alt="Aimé Césaire "
                  width="240"
                  height="190"
                />
              }
            >
              <Meta title="Aimé Césaire" />
            </Card>
            <Card
              hoverable={false}
              style={{ width: 240 }}
              cover={
                <img
                  src={require("../../assets/ousmane.png")}
                  alt=" Sembène Ousmane"
                  width="240"
                  height="190"
                />
              }
            >
              <Meta title="Sembène Ousmane" />
            </Card>
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
          <ButtonNext to="/page6"/>

        </Space>
      </Content>
    </div>
  );
};

export default Page5;
