import React from "react";
import { Layout, Typography, Input, Space } from "antd";
import NavBar from "../librairy/Header";
import {ButtonNext} from "../librairy/ButtonNext";

const { Content } = Layout;
const { Text } = Typography;

const Page4 = () => {
  return (
    <div>
      <div>
        <Layout>
          <NavBar></NavBar>

          <Content style={{height:" 100%", background: "white", padding: "15%" }}>
            <Space direction="vertical">
              <Text>
                Quelle est le total des oeuvres africaines <br /> dans la
                chanson Black Memory ?
              </Text>
              <Input style={{ marginTop: 20 }} />
              <ButtonNext to="/page5" style={{ marginTop: 20 }} />
            </Space>
          </Content>
        </Layout>
      </div>
    </div>
  );
};

export default Page4;
