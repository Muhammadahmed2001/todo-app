import { AudioOutlined } from "@ant-design/icons";
import React from "react";
import { Input, Space } from "antd";

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#a52a2a",
    }}
  />
);

const onSearch = (value) => console.log(value);
const Login = () => (
  <Space direction="vertical">
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Add Todo"
      size="large"
      onSearch={onSearch}
    />
  </Space>
);
export default Login;
