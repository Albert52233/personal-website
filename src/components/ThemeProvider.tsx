"use client";

import { ConfigProvider, theme } from "antd";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#f3a6b3",
          borderRadius: 14,
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "SF Pro Display", "Segoe UI", Roboto',
        },
        algorithm: theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}
