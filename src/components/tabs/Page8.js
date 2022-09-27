import React from "react";
import { Layout, Typography } from "antd";
import NavBar from "../librairy/Header";
import { DisplayButton } from "../librairy/Button";

const { Content } = Layout;
const { Text, Title } = Typography;

const Page8 = () => {
  return (
    <div>
      <Layout>
        <NavBar></NavBar>
        <Content
          style={{
            padding: "5%",
            backgroundImage: `url("../../assets/celebration.png")`,
            backgroundColor: "white",
          }}
        >
          <Title level={3}>
            Vos réponses ont été envoyées avec succès Félicitations
          </Title>
          <br />
          <Text>
            Pour multiplier vos chances, vous pouvez jouer plusieurs fois{" "}
          </Text><br/>
          <DisplayButton text={"Jouer encore"} color="#A44B9B" style={{marginTop:"15%"}} />
        </Content>
      </Layout>
    </div>
  );
};

export default Page8;
