"use client";

import Image from "next/image";
import Link from "next/link";
import { Space, Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 48,
        flexWrap: "wrap", // mobile-friendly
      }}
    >
      {/* LEFT SIDE: text + buttons */}
      <Space orientation="vertical" size={24} style={{ flex: 1 }}>
        <Title style={{ marginBottom: 0 }}>
          Hello World!
          <span
            style={{
              display: "block"
            }}
          >
            This is Albert 张翔耘
          </span>
        </Title>

        <Paragraph>
          uc berkeley · math & data science · software & data systems
        </Paragraph>
        <Paragraph>
           i’m an undergraduate at uc berkeley studying applied mathematics & data science.
        my interests include software engineering, machine learning, and distributed systems.
        </Paragraph>
        

        <Space>
          <Link href="/projects">
            <Button type="primary">Projects</Button>
          </Link>

          <Link href="/resume">
            <Button>Resume</Button>
          </Link>

          <Link href="/photo">
            <Button>Photo Gallery</Button>
          </Link>
        </Space>
      </Space>

      {/* RIGHT SIDE: photo */}
      <div
  style={{
    position: "relative",
    width: 180,
    height: 180,
    borderRadius: "50%",
    overflow: "hidden",
    flexShrink: 0,
  }}
>
  <Image
    src="/me.jpg"        // your uploaded photo
    alt="Albert Zhang"
    fill
    style={{ objectFit: "cover", objectPosition: "center 30%" }}
    priority
  />
</div>
    </div>
  );
}
