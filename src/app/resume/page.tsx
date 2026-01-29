"use client";

import { Typography, Space, Button } from "antd";

const { Title } = Typography;

export default function ResumePage() {
  return (
    <>
      <Title level={2}>resume</Title>

      <Space style={{ marginBottom: 24 }}>
        <Button type="primary" href="/resume.pdf" target="_blank">
          open pdf
        </Button>

        <Button href="/resume.pdf" download>
          download
        </Button>
      </Space>

      <div
        style={{
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <iframe
          src="/resume.pdf"
          title="Resume PDF"
          style={{
            width: "100%",
            height: "80vh",
            border: "none",
          }}
        />
      </div>
    </>
  );
}
