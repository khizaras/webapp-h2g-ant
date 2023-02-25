import React, { useEffect, useState } from 'react'
import { Avatar, Layout, Space, Typography, Menu, Dropdown, Button, Row, Col } from 'antd';
import { UserOutlined, HomeOutlined, UnorderedListOutlined, PlusOutlined, MenuOutlined } from '@ant-design/icons';
import logo from '../assets/images/logo.png'
import { useSelector } from 'react-redux';
import { Link, navigate } from '@gatsbyjs/reach-router';
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
            label: <Link to="/"><HomeOutlined style={{ fontSize: 20 }} /> Home</Link>,
            url: '/',
        },
        {
            key: 'categories',
            label: <Link to="/"><UnorderedListOutlined style={{ fontSize: 20 }} /> Categries</Link>,
            url: '/categories',
        },
        {
            key: 'addListings',
            label: <Link to='/addListings/food'><PlusOutlined style={{ fontSize: 20 }} /> Add Listings</Link>,
            url: '/categories',
        }
    ]
    return (

        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }} >
            <section className='header-container'>
                <Row gutter={16} justify='space-between'>
                    <Col lg={4} xl={4} xxl={4} md={6} xs={10} sm={10} className="logo-container" >
                        <img src={logo} />
                    </Col>

                    <Col lg={12} xl={12} xxl={12} md={12} xs={6} sm={6} >

                        <div className='menu-container'>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['home']}
                                items={menuItems}
                                expandIcon={< MenuOutlined/>}
                                
                            />
                        </div>
                    </Col>

                    <Col lg={4} xl={4} xxl={4} md={6} xs={4} sm={4}  >
                        {logedIn ?
                            <Dropdown menu={{ items: dropdownItems }} >
                                <a>


                                    {user.photoURL ? <Avatar size={40} src={user.photoURL} /> :
                                        <Avatar size={40} icon={<UserOutlined />} />
                                    }
                                    

                                    </a>

                            </Dropdown>
                            :
                            <Button onClick={() => navigate("/login")} type='link'>Signin</Button>
                        }
                    </Col>
                </Row>
                {/* <div className="logo" >
                    <img src={logo} height={45} />
                </div>
                <div className='menu-container'>
                <Menu
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
                </div> */}
            </section>
        </Header>



    )
}

export default H2GPrimaryHeader