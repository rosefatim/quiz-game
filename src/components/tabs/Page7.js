import React from "react";
import NavBar from "../librairy/Header";
import { Layout, Typography, Space } from "antd";
import { DisplayLink } from "../librairy/ButtonLink";

const { Content } = Layout;
const { Text, Title } = Typography;

const Page7 = () => {
  return (
    <div>
      <NavBar />
      <Layout>
        <Content style={{ background: "white", padding: "5%" }}>
          <Title level={3}>Lots à gagner</Title>
          <Space
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "5%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text>
                200 000 FCFA <br /> cash par mobile money
              </Text>
              <img
                src={require("../../assets/money.png")}
                alt="money"
                width="100"
                height="100"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text>Album Tigritude</Text>
              <img
                src={require("../../assets/tigritude.png")}
                alt="money"
                width="180"
                height="180"
              />
            </div>
          </Space>
          <Space direction="vertical">
            <Space direction="horizontal" style={{ marginTop: "15%" }}>
              <img src={require("../../assets/mtn.png")} alt="mtn" />
              <img src={require("../../assets/orange.png")} alt="orange" />
              <img src={require("../../assets/wave.png")} alt="wave" />
              <img src={require("../../assets/moov.png")} alt="moov" />
            </Space>
            <DisplayLink
            to="/page8"
              color="#A44B9B"
              text={"Payer 200 FCFA pour valider votre jeu "}
            />
          </Space>
        </Content>
      </Layout>
    </div>
  );
};

export default Page7;
