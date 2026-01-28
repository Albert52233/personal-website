"use client";

import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function AboutPage() {
  return (
    <>
      <Title level={2}>about</Title>
      <Paragraph>
        i’m an undergraduate at uc berkeley studying applied mathematics & data science.
        my interests include software engineering, machine learning, and distributed systems.
      </Paragraph>
    </>
  );
}
