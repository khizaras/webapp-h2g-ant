import { Button, Col, Divider, Input, Row, Typography, Cascader, Card, Space } from 'antd'
import React from 'react'
import { AudioOutlined } from '@ant-design/icons'
import banner1 from '../assets/images/illustrations/eating.svg'
import './index.less'
import H2GRecentListings from '../widgets/recentListings'
import { categories } from '../schema'
const H2GHomePage = () => {
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    return (

        <div className="site-layout-content">
            <div className='homepage-container'>
                <div className='banner-section' style={{ backgroundImage: `url(${banner1})` }}>
                    <Row gutter={16} >
                        <Col xxl={18} xl={16} lg={16} md={20} sm={22} xs={22} >
                            <div className='banner-content'>
                                <Typography.Title className='purple ligthWeight' level={3}>Find the best food in your city</Typography.Title>
                                <Typography.Title className='lightGrey boldWeight' level={1}>Help to feed the needy one</Typography.Title>
                                <div style={{ margin: '30px 0' }}>&nbsp;</div>
                                <Typography.Title level={5} className='lightGrey' >
                                    Click the below button to Help the needy ones
                                </Typography.Title>
                                <div style={{ margin: '5px 0' }}>&nbsp;</div>
                                <Button style={{ fontSize: 20, height: 45 }} size='large' shape='round' type='primary' className='btn-purple'>Help Now - Get Help </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='categories-container'>
                    <Row gutter={16} align='middle' justify='center'>
                        <Col span={24}><Divider /></Col>
                        <Col span={24} >
                            <Typography.Title style={{ textAlign: "center" }} level={3} >Browse our category list</Typography.Title>
                        </Col>

                    </Row>

                    <Row style={{ marginTop: 20 }} gutter={[16, 20]} align='top' justify='center'>
                        {
                            categories.map((category, index) => {
                                return (
                                    <Col key={index} xxl={4} xl={4} md={4} sm={8} xs={8}  >
                                        <Button block shape='round' size='large' type='dashed' style={{ height: 110 }}>
                                            <Space direction='vertical' align='center'>
                                            <img src={category.icon} height={60} />
                                            <Typography.Title level={4} style={{ textAlign: 'center' }}>{category.name}</Typography.Title>
                                            </Space>
                                        </Button>
                                    </Col>
                                )
                            })

                        }
                    </Row>

                    <Row style={{ marginTop: 20 }} gutter={[16, 20]} align='top' justify='center'>
                        <Col xxl={6} xl={6} md={6} sm={22} xs={22}  >
                            <Input.Search suffix={suffix} enterButton="Search" allowClear placeholder="Search for a category" size="large" style={{ width: '100%' }} />
                        </Col>
                        <Col xxl={6} xl={6} md={6} sm={22} xs={22}  >
                            <Cascader options={LocationCascade()} placeholder="Select Location" size="large" style={{ width: '100%' }} />
                        </Col>

                    </Row>
                </div>
                <H2GRecentListings />
            </div>
        </div>

    )
}

export default H2GHomePage


export const LocationCascade = () => {
    return [
        {
            value: 'India',
            label: 'India',
            children: [
                {
                    value: 'Karnataka',
                    label: 'Karnataka',
                    children: [
                        {
                            value: 'Bangalore',
                            label: 'Bangalore',
                        },
                    ],
                },
                {
                    value: 'TamilNadu',
                    label: 'Tamil Nadu',
                    children: [
                        {
                            value: 'Chennai',
                            label: 'Chennai',
                        },
                        {
                            value: 'Trichy',
                            label: 'Trichy',
                        },
                        {
                            value: 'Vellore',
                            label: 'Vellore',
                        },

                    ],
                },
            ],
        },
        {
            value: 'USA',
            label: 'USA',
            children: [
                {
                    value: 'California',
                    label: 'California',
                    children: [
                        {
                            value: 'San Francisco',
                            label: 'San Francisco',
                        },
                    ],
                },
            ],
        },
        {
            value: 'UK',
            label: 'UK',
            children: [
                {
                    value: 'London',
                    label: 'London',
                    children: [
                        {
                            value: 'London',
                            label: 'London',
                        },
                    ],
                },
            ],

        }
    ]
}