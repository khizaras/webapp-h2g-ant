import React, { useEffect } from 'react'
import { loginWithEmailAndPassword } from './api/users';
import { Breadcrumb, Layout, Menu, theme } from 'antd';


import 'antd/dist/reset.css'
import './assets/style/index.less'
import  logo from './assets/images/logo.png'
const { Header, Content, Footer } = Layout;

const Hands2GetherMain = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    useEffect(() => {
        getUserinformation()
    }, [])

    const getUserinformation = async () => {
        loginWithEmailAndPassword("khizar@gmail.com", "shower@123").then((user) => {
            console.log("user", user)
        }).catch((error) => {
            console.log("error", error)
        })

    }



    return (
        <Layout className="webapp">
            <Header>
                <div className="logo" >
                <img src={logo} />
                </div>
                <div className='menu-container'>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(15).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `nav ${key}`,
                        };
                    })}
                />
                </div>
                
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    Content
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    )
}

export default Hands2GetherMain