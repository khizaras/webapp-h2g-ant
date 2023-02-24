import React, { useEffect, useState } from 'react'
import { Avatar, Layout, Space, Typography, Menu, Dropdown, Button } from 'antd';
import { UserOutlined, HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import logo from '../assets/images/logo.png'
import { useSelector } from 'react-redux';
import { navigate } from '@gatsbyjs/reach-router';
import { useDispatch } from 'react-redux';
import { updateUser } from '../store/reducers/user';
import { getAuth } from "firebase/auth";
const { Header } = Layout;

const H2GPrimaryHeader = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const [logedIn, setLogedIn] = useState(false)
    const auth = getAuth()
    const dropdownItems = [
        {
            key: 'profile',
            label: <div>Profile</div>,
            url: '/profile',
        },
        {
            key: 'logout',
            label: <div>Logout</div>,
            url: '/logout',
            onClick: () => signOut()
        }
    ]

    const signOut = () => {
        auth.signOut()
        window.firebase.auth.signOut()
        dispatch(updateUser({ isLoggedin: false }))
        window.location.href = "/"
    }
    useEffect(() => {
        if (user.isLoggedin) {
            setLogedIn(true)
        }
    }, [user])

    const menuItems = [
        {
            key: 'home',
            label: <div><HomeOutlined style={{ fontSize: 20 }} /> Home</div>,
            url: '/',
        },
        {
            key: 'categories',
            label: <div><UnorderedListOutlined style={{ fontSize: 20 }} /> Categries</div>,
            url: '/categories',
        }
    ]
    return (

        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }} >
            <section className='header-container'>
                <div className="logo" >
                    <img src={logo} height={45} />
                </div>
                <div className='menu-container'><Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['home']}
                    items={menuItems}
                /></div>
                <div className='user-container'>

                    {logedIn ?
                        <Dropdown menu={{ items: dropdownItems }}>
                            <a>
                                <Space>
                                    {user.photoURL ? <Avatar size={40} src={user.photoURL} /> :
                                        <Avatar size={40} icon={<UserOutlined />} />
                                    }
                                    <Typography.Text>{user.displayName}</Typography.Text>
                                </Space>
                            </a>
                        </Dropdown>
                        :
                        <Button onClick={() => navigate("/login")} type='link'>Signin</Button>
                    }
                </div>
            </section>
        </Header>
          

   
    )
}

export default H2GPrimaryHeader