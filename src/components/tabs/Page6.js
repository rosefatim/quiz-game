import React from "react";
import { Layout, Typography, Input, Space } from "antd";
import NavBar from "../librairy/Header";
import { DownOutlined } from "@ant-design/icons";
import ButtonNext from "../librairy/ButtonNext";

const { Content } = Layout;
const { Text, Title } = Typography;

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
