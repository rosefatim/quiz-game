import React from "react";
import { Layout, Typography } from "antd";
import NavBar from "../librairy/Header";
import { DisplayButton } from "../librairy/Button";
import Axios from "axios";

import { base_url, encrypt_pin } from "../constants/base_url";
import { error } from "../constants/error_type";
import { openNotification } from "../functions/notification";

const { Content } = Layout;
const { Text, Title } = Typography;

const Page8 = () => {
  const generatePaymentLink = async (key, id, pin) => {
    await Axios.post(base_url + encrypt_pin, {
      transaction_data: {
        value: pin,
        api_key: key,
      },
    })
      .then((res) => {
        const pin = res?.data?.encryptedValue;
        const body = {
          transaction_data: {
            api_key: key,
            merchant_data: id,
            amount: 200,
            transaction_type: "receive",
            transaction_service: "user-payment",
            currency: "xof",
            pin: "",
          },
        };
      })
      .catch((err) => {
        if (
          error.find((item) => item?.code === err?.response?.data?.code) !==
          undefined
        ) {
          return openNotification(
            "error",
            error?.find((item) => item?.code === err?.response?.data?.code)
              ?.value
          );
        }
      });
  };

  return (
    <div>
      <Layout>
        <NavBar></NavBar>
        <Content
          style={{
            padding: "5%",
            backgroundImage: `url("../../assets/celebration.png")`,
            backgroundColor: "white",
          }}
        >
          <Title level={3}>
            Vos réponses ont été envoyées avec succès Félicitations
          </Title>
          <br />
          <Text>
            Pour multiplier vos chances, vous pouvez jouer plusieurs fois{" "}
          </Text>
          <br />
          <DisplayButton
            text={"Jouer encore"}
            color="#A44B9B"
            style={{ marginTop: "15%" }}
          />
        </Content>
      </Layout>
    </div>
  );
};

export default Page8;
