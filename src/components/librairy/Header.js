import React from 'react'
import { Layout, Typography, Button} from "antd";
import { ReloadOutlined, UploadOutlined } from "@ant-design/icons";
import { DisplayLink } from './ButtonLink';
import { sessionHandler } from '../functions/sessionStore';

const { Header, } = Layout;
const { Text, } = Typography;

const NavBar = () => {
  return (
    <div>
        <Layout>
          <Header
            style={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <DisplayLink
              to="/"
              icon={<ReloadOutlined />}  
              onPress={() => sessionHandler("auth_token", null, "clear")}
            />
            <Text>Black Memory Quiz</Text>
            <Button icon={<UploadOutlined />}>Partager le quiz</Button>
          </Header>

        </Layout>

    </div>
  )
}

export default NavBar