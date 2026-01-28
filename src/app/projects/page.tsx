"use client";

import { Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

export default function ProjectsPage() {
  return (
    <>
      <Title level={2}>projects</Title>

      <Card title="intelligent collaborative cloud gallery">
        <Paragraph>
          real-time multi-user collaboration platform with spring boot, redis, and websockets.
        </Paragraph>
      </Card>
    </>
  );
}
