import React, { useState } from 'react'
import { Breadcrumb, Button, Col, Divider, Form, Input, Row, Select, Space, Typography, Upload, message } from 'antd';
import { UploadOutlined, PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { Link } from '@gatsbyjs/reach-router';
import './addListings.less'
import banner2 from '../assets/images/illustrations/eating.svg'
const H2GAddListings = (props) => {
    const { category } = props
    const { schema } = window.firebase
    const selectedCategory = schema.find((cat) => cat.name === category) || schema[0]
    const [form] = Form.useForm()

    const onFinish = (values) => {
        console.log({ values });
    }
    const onFinishFailed = (errorInfo) => {
        console.log({ errorInfo });
    }
    return (
        <div className="site-layout-content">
            <div className='addListings-container'>

                <section className='breadcrumb'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/">Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">Add Listings</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">{category || null}</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </section>

                <section className='addListings-content'>
                    <Space align='' size={10}>
                        <img src={selectedCategory.icon} height={70} alt="" />
                        <Space direction="vertical" size={0}>
                            <Typography.Title className='purple ligthWeight' level={3}>Add Listings</Typography.Title>
                            <Typography.Title level={2} className="boldWeight  lightGrey">To help / to get food</Typography.Title>

                        </Space>
                    </Space>
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <Divider />
                        </Col>
                    </Row>
                </section>

                <section className='addListings-form'>
                    <Row gutter={[16, 16]} justify='center'>
                        <Col span={24}>
                            <Form scrollToFirstError form={form} layout="vertical" name="addListingsForm" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                                <Row gutter={[16, 16]}>
                                    {
                                        selectedCategory.attributres.map((field, index) => {
                                            return (
                                                <Col span={field.name == 'title' || field.name == 'description' ? 24 : 8} key={index}  >
                                                    <Form.Item
                                                        hidden={!field.visible}
                                                        key={index}
                                                        label={field.placeholder}
                                                        name={['food', field.name]}
                                                        rules={[{ required: field.required || false, message: field.placeholder + ' is required to complete the listings' }, { type: field.type }]}
                                                    >
                                                        {RenderFieldType(field)}
                                                    </Form.Item>
                                                </Col>
                                            )
                                        })
                                    }
                                    <Col span={24}>
                                        <Typography.Title level={4}>Upload Images</Typography.Title>
                                        <Row gutter={16}>
                                            <Col span={4}>
                                                <ImageUpload />
                                            </Col>
                                            <Col span={4}>
                                                <ImageUpload />
                                            </Col>
                                            <Col span={4}>
                                                <ImageUpload />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit"> Add Listing</Button>
                                    </Form.Item>
                                </Row>
                            </Form>

                        </Col>
                        {/*  <Col span={12} style={{ background: `url(${banner2})`, backgroundRepeat: 'no-repeat', backgroundSize: 600, backgroundPosition: 'right top' }}>
                            <div style={{position:'sticky', marginLeft:140, marginTop:550, }}>
                                <Typography.Title className='purple ligthWeight no-margin' level={3}>Add Listings</Typography.Title>
                                <Typography.Title level={2} className="boldWeight  lightGrey no-margin">To help / to get food</Typography.Title>
                            </div>
                        </Col> */}
                    </Row>
                </section>



            </div>
        </div >
    )
}

export default H2GAddListings

const RenderFieldType = (field) => {
    console.log({ field: field.name, field });
    let result = <Input />
    if (field.type === 'text') {
        result = <Input showCount={field.maxLength && true} maxLength={field.maxLength} />
    }
    if (field.type === 'textarea') {
        result = <Input.TextArea rows={5} showCount={field.maxLength && true} maxLength={field.maxLength} />
    }
    if (field.type === 'number') {
        result = <Input datatype='number' />
    }
    if (field.type === 'select') {
        result = <Select>
            {field.options.map((option, index) => {
                return <Select.Option key={index} value={option.value}>{option.label}</Select.Option>
            })}
        </Select>
    }
    if (field.type === 'boolean') {
        result = <Select>
            <Select.Option value={true}>Yes</Select.Option>
            <Select.Option value={false}>No</Select.Option>
        </Select>
    }
    return result
}

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const ImageUpload = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    return (
        <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
        >
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                        width: '100%',
                    }}
                />
            ) : (
                uploadButton
            )}
        </Upload>
    )
}