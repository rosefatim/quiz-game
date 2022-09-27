import React from "react";
import NavBar from "../librairy/Header";
import { Layout, Typography, Input, Card, Space } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import ButtonNext from "../librairy/ButtonNext";

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
            <Card
              hoverable={false}
              style={{ width: 240 }}
              cover={
                <img
                  src={require("../../assets/pagne.png")}
                  alt=" le page noir "
                  width="240"
                  height="190"
                />
              }
            >
              <Meta title="Le pagne noir" />
            </Card>
            <Card
              hoverable={false}
              style={{ width: 240 }}
              cover={
                <img
                  src={require("../../assets/ebinto.png")}
                  alt="Les frasques d'Ebinto "
                  width="240"
                  height="190"
                />
              }
            >
              <Meta title="Les frasques d'Ebinto" />
            </Card>
            <Card
              hoverable={false}
              style={{ width: 240 }}
              cover={
                <img
                  src={require("../../assets/aube.png")}
                  alt=" Et l'aube se leva "
                  width="240"
                  height="190"
                />
              }
            >
              <Meta title="Et l'aube se leva " />
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
         
          <ButtonNext
          to="/page4"
          />
        </Space>
      </Content>
    </div>
  );
};

export default Page3;
