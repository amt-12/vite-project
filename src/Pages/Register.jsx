import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  const [husband, setWife] = useState();
  console.log("husband ka pass value aa gyi", husband);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      await axios
        .post("http://localhost:5001/api/adhaarTeam/adhaarRegister", values)
        .then((res) => {
          console.log("husband ka pass res aa gyi", res);
          navigate("/users");
          setWife(res?.data?.message);
        })
        .catch((error) => {
          console.log("husband ka pass error aa gyi", error?.response);
          setWife(error?.response?.data?.message);
        });
    } catch (error) {
      console.log("error backend",error?.response);

    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {/* <h1>{husband.data.message}</h1> */}
      <h1>{husband}</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Register;
