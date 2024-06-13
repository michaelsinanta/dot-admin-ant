"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import {
  CarryOutOutlined,
  TrophyOutlined,
  PaperClipOutlined,
  UserOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Menu, theme } from "antd";
import { Footer } from "antd/es/layout/layout";
import Image from "next/image";
import { useRouter } from "next/navigation";

const { Sider, Header, Content } = Layout;

const items = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "About Me",
    path: "/",
  },
  {
    key: "2",
    icon: <CarryOutOutlined />,
    label: "Experiences",
    path: "/experiences",
  },
  {
    key: "3",
    icon: <TrophyOutlined />,
    label: "Achievements",
    path: "/achievements",
  },
  {
    key: "4",
    icon: <PaperClipOutlined />,
    label: "Projects",
    path: "/projects",
  },
];

export const SideBar: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();
  const handleMenuItemClick = (path: string) => {
    if (path) {
      router.push(path);
    }
  };

  return (
    <Layout hasSider>
      <Sider
        collapsible
        collapsed={collapsed}
        theme="light"
        onCollapse={() => setCollapsed(!collapsed)}
        width={250}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          top: 0,
          left: 0,
        }}
      >
        <div className="demo-logo-vertical" />

        <div className="justify-center w-full items-center flex pt-10">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={60}
            height={60}
            objectFit="cover"
          />
        </div>

        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ fontSize: "16px", color: "blue", padding: "12px" }}
        >
          {items.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              onClick={() => handleMenuItemClick(item.path)}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout style={{ height: "100vh" }}>
        <Content style={{ margin: 30 }}>
          <div
            style={{
              height: "100%",
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflow: "auto",
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
