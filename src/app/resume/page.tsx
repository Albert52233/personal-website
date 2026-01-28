"use client";

import { Typography, Button, Space } from "antd";

const { Title } = Typography;

export default function ResumePage() {
  return (
    <>
      <Title level={2}>resume</Title>
      <Space>
        <Button type="primary" href="/resume.pdf">open pdf</Button>
      </Space>
    </>
  );
}
