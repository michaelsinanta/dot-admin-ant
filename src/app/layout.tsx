import React from "react";
import { Layout } from "antd";
import "./globals.css";
import { SideBar } from "@/components/elements/SideBar";

export const metadata = {
  title: "Michael Sinanta | Portfolio",
  description: "Michael Christlambert Sinanta's Portfolio",
  icons: {
    icon: [
      {
        url: '/assets/logo.png',
        href: '/assets/logo.png',
      },
    ],
  },
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <body>
        <Layout>
          <SideBar>{children}</SideBar>
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
