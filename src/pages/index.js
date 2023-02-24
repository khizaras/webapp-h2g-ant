import { Button, Col, Divider, Input, Row, Typography,Cascader  } from 'antd'
import React from 'react'
import {AudioOutlined} from '@ant-design/icons'
import banner1 from '../assets/images/illustrations/eating.svg'
import './index.less'
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

                    <Row >
                        <Col span={18}>
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
                    <Row>
                        <Col span={24}>
                            <Divider />
                            <Typography.Title style={{textAlign:"center"}} level={3} >Browse our category list</Typography.Title>
                            <div className='categories-toolbar'>
                                    <Input.Search suffix={suffix}   enterButton="Search" allowClear placeholder="Search for a category" size="large" style={{ width: 500, }} />
                                    <Cascader options={LocationCascade()} placeholder="Select Location" size="large" style={{ width: 300,   }} />
                            </div>
                        </Col>
                    </Row>

                </div>

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