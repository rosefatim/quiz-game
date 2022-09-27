import React from "react";
import { Layout ,Typography,Button} from "antd";
import {MenuOutlined,UploadOutlined} from '@ant-design/icons'
import { componentMenu } from "../constants/componentItems"
import { addUserData } from "../../store/actions"
import { Route } from "react-router-dom";
import { connect } from "react-redux"



const { Header, Content,  } = Layout;
const { Text ,Title} = Typography;

const Page2 = () => {
  return (
    <div>
      <Layout>
        <Header style={{backgroundColor:"white", display:"flex" ,justifyContent:"space-between", alignItems:"center"}}>
            <MenuOutlined />
            <Text>Black Memory Quiz</Text>
            <div >
                <UploadOutlined style={{marginRight:10}}/>
                <Text >Partager le quiz</Text>
            </div>
        </Header>
        <Content style={{background: "white",padding:"10%"}}>
            <Title >Bienvunue sur Black Memory Quiz </Title>
            <p>Tester vos connaissances en culture et musique d'Afrique noire </p>
            <p>Et tenter de gagner plusieurs lots de  et récompences.</p>
            <p>Vous pouvez jouer antant de fois que vous le souhaitez.</p>
            <Button style={{backgroundColor:"#A44B9B", color:"white", borderRadius: 5,marginTop:"10%"}}>Commencez le quiz
            </Button>
            
        </Content>
     
      </Layout>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchStoreToProps = (dispatch) => {
  return {
    saveData: (data) => {
      dispatch(addUserData(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchStoreToProps)(Page2);
