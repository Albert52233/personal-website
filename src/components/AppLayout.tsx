"use client";

import { Layout, Menu, Typography } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const items = [
  { key: "/", label: <Link href="/">Home</Link> },
  { key: "/photo", label: <Link href="/photo">Photo Gallery</Link> },
  { key: "/projects", label: <Link href="/projects">Projects</Link> },
  { key: "/resume", label: <Link href="/resume">Resume</Link> },
  { key: "/contact", label: <Link href="/contact">Contact</Link> },
  { key: "/cues", label: <Link href="/cues">Cue Collection</Link> },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Layout style={{ minHeight: "100vh", background: "transparent" }}>
      <Header style={{ background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(10px)" }}>
        
        <div style={{ maxWidth: 980, margin: "0 auto", display: "flex", gap: 24 }}>
          <Link href="/" style={{ fontWeight: 600 }}>
            Albert 
          </Link>
          <Menu
            mode="horizontal"
            selectedKeys={[pathname]}
            items={items}
            style={{ flex: 1, background: "transparent", borderBottom: "none" }}
          />
        </div>
      </Header>

      <Content style={{ padding: "56px 16px" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>{children}</div>
      </Content>

      <Footer style={{ background: "transparent", textAlign: "center" }}>
        <Text type="secondary">© {new Date().getFullYear()} Albert Zhang</Text>
      </Footer>
    </Layout>
  );
}
