import React ,{Component} from  "react";
import NavBar from "../librairy/Header";
import { Layout, Typography, Input, Card, Space } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import {ButtonNext} from "../librairy/ButtonNext";
import { DisplayImage } from "../librairy/Image";
import { DisplayCard } from "../librairy/Card";
import { openNotification } from "../functions/notification";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addUserAnswers,removeUserAnswers } from "../../store/actions";

const { Content } = Layout;
const { Text } = Typography;
const { Meta } = Card;

class Page3 extends Component {

  state = { 
    answer1: "",
    answer2: "",
    answer3: "",
    finished:false
 
  } 

  answerValidator = async ()=>{
    const {answer1, answer2, answer3}= this.state

    if(answer1.length === 0  || answer2.length === 0 || answer3.length === 0 ){
        return openNotification("error","Veuillez repondre à toutes les questions")
    }
      const obj ={
        q1: "Cochez les oeuvres africaines citées dans la chanson Black Memory.Complez les oeuvres manquantes s'il y en a.",
        a: [
          answer1,
          answer2,
          answer3
        ]
      }
    await this.props.saveData(obj);
    this.setState({finished:true})
  }

  render() { 
    if (
      this.state.finished === true
    ) {
      return <Redirect to="/page4"/>;
    }
    return ( 
          <div>
            <NavBar />
            <Content style={{ padding: "5%" }}>
              <div>
                <Text>
                  Cochez les oeuvres africaines citées dans la chanson <b>Black Memory.</b> <br />Complez les oeuvres manquantes s'il y en a.
                </Text>
              </div>
              <Space direction="vertical" style={{ marginTop: "2%" }}>
                <Space direction="horizontal">
                  <DisplayCard
                    style={{ width: 240 }}
                    cover={
                      <DisplayImage
                      source={require("../../assets/pagne.png")}
                      alt={" le page noir "}
                      w={240}
                      h={190}
                      />              
                    }
                    title={"Le pagne noir"}
                  />
                  <DisplayCard
                    style={{ width: 240 }}
                    cover={
                      <DisplayImage
                      source={require("../../assets/ebinto.png")}
                      alt={"Les frasques d'Ebinto"}
                      w={240}
                      h={190}
                      />              
                    }
                    title={"Les frasques d'Ebinto"}
                  />
                  <DisplayCard
                    style={{ width: 240 }}
                    cover={
                      <DisplayImage
                      source={require("../../assets/aube.png")}
                      alt={"Et l'aube se leva"}
                      w={240}
                      h={190}
                      />              
                    }
                    title={"Et l'aube se leva"}
                  />
                    
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
                    <Input   onChange={(e) => this.setState({ answer1: e.target.value })}/>
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
      
                    <Input 
                      onChange={(e) => this.setState({ answer2: e.target.value })}
                    />
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
      
                    <Input 
                      onChange={(e) => this.setState({ answer3: e.target.value })}
                    />
                  </Card>
                </Space>
               
                <ButtonNext
       
                onPress={() => this.answerValidator()}
                />
              </Space>
            </Content>
          </div>
        );
      };
   
}
 
const mapStateToProps = (state) => {
  return {};
 
};

const mapDispatchStoreToProps = (dispatch) => {
  return {
    saveData: (data) => {
      dispatch(addUserAnswers(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchStoreToProps)(Page3);

