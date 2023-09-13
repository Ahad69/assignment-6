import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const onFinish = async (values) => {
    const result = await signIn("credentials", {
      email: values.username,
      password: values.password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="w-full  sm:w-[600px] sm:m-auto border sm:mt-10 shadow-lg shadow-blue-500/50 rounded">
      <Image
        width={500}
        height={200}
        className="w-[250px] m-auto mb-10"
        src={"/logo.png"}
        alt="logo"
      />
      <div className="flex justify-center items-center">
        <Form name="basic" onFinish={onFinish} autoComplete="off">
          <Form.Item
            label="User Email"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
      <hr />
      <div className="flex justify-center items-center gap-10 my-10">
        <FcGoogle
          className="text-5xl  cursor-pointer"
          onClick={() =>
            signIn("google", {
              callbackUrl: `${
                router?.query?.callbackUrl ? router?.query?.callbackUrl : "/"
              }`,
            })
          }
        />
        <BsGithub
          className="text-5xl p-1 cursor-pointer"
          onClick={() =>
            signIn("github", {
              callbackUrl: `${
                router?.query?.callbackUrl ? router?.query?.callbackUrl : "/"
              }`,
            })
          }
        />
      </div>
    </div>
  );
};

export default Login;
