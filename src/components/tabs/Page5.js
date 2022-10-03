import React, { Component } from "react";
import NavBar from "../librairy/Header";
import { Layout, Typography, Input, Card, Space } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { ButtonNext } from "../librairy/ButtonNext";
import { openNotification } from "../functions/notification";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addUserAnswers,removeUserAnswers } from "../../store/actions";


const { Content } = Layout;
const { Text } = Typography;
const { Meta } = Card;

class Page5 extends Component {
  state = {
    answer1: "",
    answer2: "",
    answer3: "",
    finished: false,
  };

  answerValidator = async ()=>{
    const {answer1, answer2,answer3}= this.state
    if(answer1.length === 0  || answer2.length === 0 || answer3.length === 0 ){
        return openNotification("error","Veuillez repondre à toutes les questions")
   }
   const obj ={
    q3: "Cocher les noms des auteurs des oeuvres citées dans la chanson Black Memory Complétez les auteurs s'il y en manquent.",
    a: [
      answer1,
      answer2,
      answer3
    ]
   }
   await this.props.saveData(obj);
   this.setState({finished:true})
   //window.location.reload()
  }
  render() {
    if (
      this.state.finished === true
    ) {
      return <Redirect to="/page6"/>;
    }
    return (
      <div>
        <NavBar />
        <Content style={{ padding: "5%" }}>
          <div>
            <Text>
              Cocher les noms des auteurs des oeuvres citées dans la chanson <b>Black Memory</b><br/>Complétez les auteurs s'il y en manquent.
            </Text>
          </div>
          <Space direction="vertical" style={{ marginTop: "2%" }}>
            <Space direction="horizontal">
              <Card
                hoverable={false}
                style={{ width: 240 }}
                cover={
                  <img
                    src={require("../../assets/bernard.png")}
                    alt=" bernard "
                    width="240"
                    height="190"
                  />
                }
              >
                <Meta title="Bernard Dadie" />
              </Card>

              <Card
                hoverable={false}
                style={{ width: 240 }}
                cover={
                  <img
                    src={require("../../assets/aime.png")}
                    alt="Aimé Césaire "
                    width="240"
                    height="190"
                  />
                }
              >
                <Meta title="Aimé Césaire" />
              </Card>
              <Card
                hoverable={false}
                style={{ width: 240 }}
                cover={
                  <img
                    src={require("../../assets/ousmane.png")}
                    alt=" Sembène Ousmane"
                    width="240"
                    height="190"
                  />
                }
              >
                <Meta title="Sembène Ousmane" />
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
                <Input onChange={(e) => this.setState({ answer1: e.target.value })}/>
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

                <Input onChange={(e) => this.setState({ answer2: e.target.value })}/>
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
                <Input onChange={(e) => this.setState({ answer3: e.target.value })}/>
              </Card>
            </Space>
            <ButtonNext onPress={() => this.answerValidator()} />
          </Space>
        </Content>
      </div>
    );
  }
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

export default connect(mapStateToProps, mapDispatchStoreToProps)(Page5);