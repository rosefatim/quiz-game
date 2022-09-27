import React, { Component } from "react";
import { Form, Typography, Input, Space } from "antd";
import { openNotification } from "../functions/notification";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addUserData, removeUserData } from "../../store/actions";
import { DisplayButton } from "../librairy/Button";
import { keyCredential } from "../constants/credential";
import { sessionHandler } from "../functions/sessionStore";

const { Title, Text } = Typography;

class Page1 extends Component {
  state = {
    nom: "",
    prenom: "",
    numero: "",
    alert: false,
    alertText: "Verifier les champs",
    alertType: "error",
  };

  componentDidMount() { 
      this.props.removeData()
   }

  closeAlert = () => {
    return this.setState({
      alert: false,
    });
  };
  handleConnect = async () => {
    const { nom, prenom, numero } = this.state;

    if (nom.length ===0 || prenom.length ===0 ||numero.length ===0 ) {
      return openNotification ("error", "remplicez tous les champs ")     
    }
    await this.props.saveData({
      nom: nom,
      prenom: prenom,
      numero: numero,
    });
    await sessionHandler("auth_token", keyCredential, "set");
    this.setState({
      alert: true,
      alertType: "success",
      alertText: "Vous êtes connecté",
    });
  };
  render() {
    if (
      sessionHandler("auth_token", null, "get") &&
      sessionHandler("auth_token", null, "get").length !== 0
    ) {
      return <Redirect to="/page2"/>;
    }
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <div className="left" style={{ width: "50%" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
              alignItems: "center",
              paddingLeft: 15,
            }}
          >
            <img
              width="24"
              height="24"
              src={require("../../assets/log.png")}
              alt="log"
            />
            <Title level={3} style={{ color: "#A44B9B", marginLeft: 15 }}>
              Black Memory Quiz
            </Title>
          </div>

          <div style={{ padding: "5%" }}>
            <Title level={3}>Participer au quiz</Title>
            <Text>Et multiplier vos chances de gagner en jouant </Text>
          </div>
          <div>
            <Space direction="vertical" style={{ marginTop: "10%" }}>
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  label="Nom"
                  name="nom"
                  rules={[
                    {
                      message: "Entrez votre nom SVP!",
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => this.setState({ nom: e.target.value })}
                  />
                </Form.Item>

                <Form.Item
                  label="Prenom"
                  name="prenom"
                  rules={[{ message: "Entrez votre prénom SVP" }]}
                >
                  <Input
                    onChange={(e) => this.setState({ prenom: e.target.value })}
                  />
                </Form.Item>
                <Form.Item
                  label="Numéro"
                  name="numero"
                  rules={[{ message: " Entrez votre numéro SVP" }]}
                >
                  <Input
                    onChange={(e) => this.setState({ numero: e.target.value })}
                  />
                </Form.Item>

                <DisplayButton
                  text={"Valider et continue"}
                  onPress={() => this.handleConnect()}
                  style={{
                    width: "70%",
                    backgroundColor: "#A44B9B",
                    color: "white",
                    height: 40,
                    marginLeft: "30%",
                    borderRadius: "5%",
                  }}
                />
              </Form>
            </Space>
          </div>
        </div>

        <div
          className="right"
          style={{
            display: "flex",
            width: "50%",
            background: "linear-gradient(90deg, #571D59 0%, #822F83 100%)",
            border: "1px solid black",
          }}
        >
          <img
            width="280"
            height="300"
            src={require("../../assets/rectangle12.png")}
            alt="rect12"
            style={{
              borderRadius: "8%",
              marginTop: "13%",
              marginLeft: "20%",
              position: "absolute",
            }}
          />
          <img
            width="320"
            height="300"
            src={require("../../assets/rectangle11.png")}
            alt="rect11"
            style={{
              borderRadius: "8%",
              marginTop: "14%",
              marginLeft: "19%",
              position: "absolute",
            }}
          />
          <img
            width="360"
            height="300"
            src={require("../../assets/rectangle10.png")}
            alt="rect10"
            style={{
              borderRadius: "8%",
              marginTop: "15%",
              marginLeft: "18%",
              position: "absolute",
            }}
          />
        </div>
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
      dispatch(addUserData(data));
    },
    removeData: () => {
      dispatch(removeUserData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchStoreToProps)(Page1);
