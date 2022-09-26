import React from "react";
import { Form, Typography, Input, Space, Button } from "antd";
const { Title, Text } = Typography;

const Page1 = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
        <div className="left" style={{ width: "50%", }}>
            <div style={{display: "flex", width:"100%",boxShadow:"0px 0px 4px rgba(0, 0, 0, 0.15)",alignItems:"center"}}>
                <img width="24"  height="24" src={require("../../assets/log.png")} alt="log"/>
                <Title level={3} style={{ color: "#A44B9B" ,}}>Black Memory Quiz</Title>
            </div>
            
            <div style={{padding: "5%" }}>
                <Title level={3}>Créer un compte</Title>
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
                    name="name"
                    rules={[
                        {
                        message: "Entrez votre nom SVP!",
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item
                    label="Prenom"
                    name="lastName"
                    rules={[{ message: "Entrez votre prénom SVP" }]}
                    >
                    <Input />
                    </Form.Item>
                    <Form.Item
                    label="Numéro"
                    name="number"
                    rules={[{ message: " Entrez votre numéro SVP" }]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    ></Form.Item>

                    <Button
                    style={{
                        backgroundColor: "#A44B9B",
                        color: "white",
                        borderRadius: "5%",
                    }}
                    >
                    Valider et continue
                    </Button>
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
};

export default Page1;
