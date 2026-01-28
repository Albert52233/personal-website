import "antd/dist/reset.css";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import AppLayout from "@/components/AppLayout";

export const metadata = {
  title: "Albert Zhang",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AppLayout>{children}</AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
