import React, {Component} from "react";
import { Layout, Typography, Input, Space } from "antd";
import { addUserAnswers,removeUserAnswers } from "../../store/actions";
import { openNotification } from "../functions/notification";
import {ButtonNext} from "../librairy/ButtonNext";
import { Redirect } from "react-router-dom";
import NavBar from "../librairy/Header";
import { connect } from "react-redux";


const { Content } = Layout;
const { Text } = Typography;

 class Page4 extends Component {
  state = { 
    answer :"",
    finished:false
   } 


   answerValidator = async ()=>{
    const {answer}= this.state
    if(answer.length === 0 ){
        return openNotification("error","Veuillez repondre à la question.")
   }
   const obj ={
    q: "Quel est le nombre total des oeuvres africaines dans la chanson Black Memory ?",
    a: [
      answer
    ]
   }
   await this.props.saveData(obj);
   this.setState({ 
    finished:true})
   //window.location.reload()
  }

  render() { 

    if (
      this.state.finished === true
    ) {
      return <Redirect to="/page5"/>;
    }
  return (
    <div>
      <div>
        <Layout>
          <NavBar></NavBar>

          <Content style={{height:" 100%", background: "white", padding: "15%" }}>
            <Space direction="vertical">
              <Text>
                Quel est le nombre total des oeuvres africaines <br /> dans la
                chanson Black Memory ?
              </Text>
              <Input  onChange={(e) => this.setState({ answer: e.target.value })} style={{ marginTop: 20 }} />
              <ButtonNext  onPress={() => this.answerValidator()} style={{ marginTop: 20 }} />
            </Space>
          </Content>
        </Layout>
      </div>
    </div>
  );
  }
};
const mapStateToProps = (state) => {
  return {};
 
};

const mapDispatchStoreToProps = (dispatch) => {
  return {
    saveData: (data) => {
      dispatch(addUserAnswers(data));
    },removeData: () => {
      dispatch(removeUserAnswers());
    }
  };
};

export default connect(mapStateToProps, mapDispatchStoreToProps)(Page4);
