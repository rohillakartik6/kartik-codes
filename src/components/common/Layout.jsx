import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, VideoCameraOutlined, BellOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, Space } from "antd";
import profile from "../../images/profile.png";
import "./layout.css";
import { Footer } from "antd/es/layout/layout";
import useScrollBlock from "../custom-hooks/useScrollBlock";
import Cursor from "./Cursor";
import { Link, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

function UserLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const [blockScroll] = useScrollBlock();

    const items = [
        {
            key: "1",
            icon: (
                <img
                    width={"30px"}
                    height={"30px"}
                    src={profile}
                    alt="dp"
                />
            ),
            label: <Link to="/dashboard">Dashboard</Link>,
        },
        {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: <Link to="/about">About</Link>,
        },
        {
            key: "3",
            icon: <UploadOutlined />,
            label: <Link to="/nav">nav 3</Link>,
        },
    ];

    useEffect(() => {
        blockScroll();
    });
    return (
        <>
            <Layout>
                <Cursor />
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    style={{ backgroundColor: "#445D48" }}>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        style={{ backgroundColor: "#D6CC99", color: "#001524", fontWeight: "500" }}
                        defaultSelectedKeys={["1"]}
                        items={items}
                    />
                    {/* {items.map((data) => (
                            <MenuItem
                                title={data?.label}
                                icon={data?.icon}
                                key={data?.key}
                            />
                        ))}
                    </Menu> */}
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, backgroundColor: "#445D48" }}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: "16px",
                                width: 64,
                                height: 64,
                                float: "left",
                            }}
                        />
                        {/* <Space> */}
                        <div className="float-end">
                            <BellOutlined style={{ fontSize: "20px" }} />
                        </div>
                        {/* </Space> */}
                    </Header>
                    <div className="container-fluid">
                        <Content>
                            <center>
                                <Outlet />
                            </center>
                        </Content>
                    </div>
                    <Footer style={{ textAlign: "center", backgroundColor: "#445D48", color: "white" }}>Kartik Codes ©2023 Created by Kartik Rohilla</Footer>
                </Layout>
            </Layout>
        </>
    );
}

export default UserLayout;
