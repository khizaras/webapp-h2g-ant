import React, { useEffect, useState } from 'react'
import { Breadcrumb, Button, Col, Divider, Form, Input, InputNumber, Row, Select, Space, Typography, Upload, message, Modal, Spin, notification } from 'antd';
import { UploadOutlined, PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { Link } from '@gatsbyjs/reach-router';
import './addListings.less'
import banner2 from '../assets/images/illustrations/eating.svg'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
import { useSelector } from 'react-redux';
import moment from 'moment-timezone';


const H2GAddListings = (props) => {
    const user=useSelector(state=>state.user)
    const { category } = props
    const { schema } = window.firebase
    const selectedCategory = schema.find((cat) => cat.name === category) || schema[0]
    const [docRef, setdocRef] = useState(null)
    const [images,setImages]=useState([])
    const db = getFirestore();

    const [form] = Form.useForm()
    useEffect(() => {
        getReference()
        form.setFieldsValue({
            food: {
                "title": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for p",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do",
                "whatType": "wantedHelp",
                "foodType": "veg",
                "quantity": 25,
                "address": "102 inside walljah big mosque campus",
                "country": "india",
                "state": "karnataka",
                "city": "bangalore",
                "pincode": 600005,
                "displayContact": "true",
                "contactName": "Khizar Ahmed",
                "contactNumber": 9715463636
            }
        })
    }, [])
    const onFinish = (values) => {
        saveListings(values.food)
    }
    const onFinishFailed = (errorInfo) => {
        console.log({ errorInfo });
    }
    const getReference = async () => {
        const collectionRef = collection(db, category || 'food');        
        const docRef = doc(collectionRef);        
       
        setdocRef(docRef)
    }
    const saveListings = (values) => {
        let insertData= { 
            id: docRef.id, 
            ...values, 
            category:category,
            createdBy: user.uid,
            createdOn: new Date().toISOString(),         
            timeStamp:moment().unix(),
            expires:moment().add(90,'days').unix(),
            images:images   
        }     
        setDoc(docRef, { ...insertData}).then((data) => {
            console.log("Document written with ID: ");
            console.log({data});
            notification.success({
                message: 'Listing Added Successfully',
                description: 'Your listing has been added successfully.'
            })

        })

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
                {docRef ?
                    <div>
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
                                                                
                                                                tooltip={field.help || null}
                                                                hidden={!field.visible}
                                                                key={index}
                                                                label={field.placeholder}
                                                                name={['food', field.name]}
                                                                rules={[
                                                                    { required: field.required || false, message: field.placeholder + ' is required' },
                                                                    {
                                                                        type: field.type === 'number' ? 'number'

                                                                            : 'string', message: field.placeholder + ' should be a ' + field.type
                                                                    }]}
                                                            >
                                                                {RenderFieldType(field)}
                                                            </Form.Item>
                                                        </Col>
                                                    )
                                                })
                                            }
                                            <Col span={24}>
                                                <Typography.Title level={4}>Upload Images</Typography.Title>
                                                <Row gutter={16} style={{ margin: '30px 0' }}>
                                                    <Col span={24}>
                                                        <ImageUpload docRef={docRef} images={images} setImages={setImages} />
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
                    : <Space>
                        <Spin />
                        <Typography.Text strong>Please wait loading . . .</Typography.Text>
                    </Space>
                }

            </div>
        </div >
    )
}

export default H2GAddListings

const RenderFieldType = (field) => {

    let result = <Input />
    if (field.type === 'text') {
        result = <Input showCount={field.maxLength && true} maxLength={field.maxLength} />
    }
    if (field.type === 'textarea') {
        result = <Input.TextArea rows={5} showCount={field.maxLength && true} maxLength={field.maxLength} />
    }
    if (field.type === 'number') {
        result = <InputNumber stringMode={false} style={{ width: '100%' }} />
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

const uploadToFirebaseStorage = (file, folderName = "images",images=[],setImages) => {
    const storage = getStorage();
    const metadata = {
        contentType: file.type
    };
    const storageRef = ref(storage, `${folderName}/${file.name}`);
    
    uploadBytesResumable(storageRef, file, metadata).then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
            let currImage=images.concat(url)
            console.log({ currImage });
            setImages(currImage)
        })
    })

}   

const ImageUpload = ({ docRef, images, setImages }) => {
    const [fileList, setFileList] = useState([]);
    let folderName = docRef.id
    const onChange = (info) => {
        setFileList(info.fileList);
        uploadToFirebaseStorage(info.file.originFileObj, folderName, images, setImages)
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    return (


        <Upload
            action=""
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            beforeUpload={beforeUpload}
            onPreview={onPreview}
        >
            {fileList.length < 3 && '+ Upload'}
        </Upload>

    );
}