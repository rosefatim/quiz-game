import React ,{Component} from "react";
import { Layout, Typography, Input, Space } from "antd";
import NavBar from "../librairy/Header";
import {ButtonNext }from "../librairy/ButtonNext";
import { openNotification } from "../functions/notification";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addUserAnswers,removeUserAnswers } from "../../store/actions";

const { Content } = Layout;
const { Text } = Typography;

class Page6 extends Component {
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
    q: " Quel est le nombre total des auteurs des oeuvres citées  dans la chanson Black Memory ?",
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
      return <Redirect to="/page7"/>;
    }

  return (
    <div>
      <div>
        <Layout>
          <NavBar/>

          <Content style={{ background: "white", padding: "5%" }}>
            <Space direction="vertical" style={{}}>
              <Text>
                Quel est le nombre total des auteurs des oeuvres
                citées <br /> dans la chanson <b>Black Memory</b> ?
              </Text>
              <Input onChange={(e) => this.setState({ answer: e.target.value })} style={{ width: "90%", marginTop: 20 }} />
              <ButtonNext onPress={() => this.answerValidator()}/>
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

export default connect(mapStateToProps, mapDispatchStoreToProps)(Page6);
