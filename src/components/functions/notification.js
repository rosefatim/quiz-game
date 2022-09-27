import { notification } from "antd";


const openNotification = (type, text) => {
  notification[type]({
    message: "Notification",
    description: text,
    duration: 4
  });
};
export { openNotification };