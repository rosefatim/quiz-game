import React from "react";
import { Layout, Typography, Input, Space } from "antd";
import NavBar from "../librairy/Header";
import {ButtonNext }from "../librairy/ButtonNext";

const { Content } = Layout;
const { Text } = Typography;

const Page6 = () => {
  return (
    <div>
      <div>
        <Layout>
          <NavBar></NavBar>

          <Content style={{ background: "white", padding: "5%" }}>
            <Space direction="vertical" style={{}}>
              <Text>
                Quel est le nombre total des auteurs africains des oeuvres
                citées <br /> dans la chanson Black Memory ?
              </Text>
              <Input style={{ width: "90%", marginTop: 20 }} />
              <ButtonNext to="page7"/>
            </Space>
          </Content>
        </Layout>
      </div>
    </div>
  );
};

export default Page6;
