import React from "react";
import { Layout, Typography } from "antd";
import { DisplayLink } from "../librairy/ButtonLink";
import NavBar from "../librairy/Header";

const {  Content } = Layout;
const { Title } = Typography;

const Page2 = () => {
  return (
    <div>
      <Layout>
        <NavBar></NavBar>
        <Content style={{ background: "white", padding: "10%" }}>
          <Title>Bienvenue sur Black Memory Quiz </Title>
          <p>Tester vos connaissances en culture et musique d'Afrique noire </p>
          <p>Et tenter de gagner plusieurs lots de et récompences.</p>
          <p>Vous pouvez jouer antant de fois que vous le souhaitez.</p>
          <DisplayLink
            to="/page3"
            style={{
              backgroundColor: "#A44B9B",
              color: "white",
              borderRadius: 5,
              marginTop: "10%",
            }}
            text={" Commencez le quiz"}
          />
        </Content>
      </Layout>
    </div>
  );
};

export default Page2;
