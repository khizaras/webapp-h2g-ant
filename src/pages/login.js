import { Alert, Button, Card, Divider, Form, Input, notification, Space, Spin, Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginWithEmailAndPassword } from '../api/users'
import { updateUser } from '../store/reducers/user'
import './login.less'

const H2GLoginPage = () => {


    useEffect(() => { }, [])

    const onChange = (key) => {
        console.log(key);
    };
    const TabItems = [
        {
            key: 'login',
            label: 'Login',
            children: <LoginPage />
        },
        {
            key: 'register',
            label: 'Register',
            children: <RegisterPage />
        }
    ]

    return (
        <div className="site-layout-content">
            <div className='loginpage-container'>
                <Card title={false}>
                    <Tabs defaultActiveKey="1" items={TabItems} onChange={onChange} />
                </Card>

            </div>
        </div>
    )
}


const LoginPage = () => {
    const dispatch=useDispatch()
    const [form] = Form.useForm()
    const [state, setState] = useState({
        login: false,
        error: null
    })
    const resetState = () => {
        setState({
            login: false,
            error: null
        })
    }
    const onFinish = (values) => {
        const { login } = values
        const { email, password } = login
        setState({ login: true, error: null })
        loginWithEmailAndPassword(email, password).then((user) => {
            window.firebase.user = user
            dispatch(updateUser(user))
        }).catch((error) => {
            setState({
                login: false,
                error: error
            })

        })
    }

    return (
        <Form onFinish={onFinish} form={form} layout='vertical' size='large'>
            <Form.Item name={['login', 'email']} label="Email" required rules={[{ required: true, message: 'Please enter your email address' }, { type: 'email', 'message': 'Please enter valid Email' }]}>
                <Input datatype='email' placeholder='Enter email address' />
            </Form.Item>
            <Form.Item name={['login', 'password']} label="Password" rules={[{ required: true, message: 'Please enter your password' }]}>
                <Input.Password />
            </Form.Item>
            <Divider />
            {
                state.error && <Alert closable onClose={() => resetState()} style={{ margin: '20px 0' }} type='error' message={state.error} />
            }
            {state.login && <div style={{ margin: '20px 0' }}> <Spin /> </div>}
            <Form.Item>

                <Button size='large' block shape='round' type='primary' htmlType='submit'>Login</Button>



            </Form.Item>

        </Form>
    )
}

const RegisterPage = () => {
    const [form] = Form.useForm()
    const onFinish = (values) => {
    }
    return (
        <Form form={form} layout='vertical' size='large'>
            <Form.Item name={['register', 'name']} label="Full Name" required rules={[{ required: true, message: 'Please enter your full name' }, {
                pattern: /^[a-zA-Z ]+$/,
                message: 'Please enter valid name'
            }]}>
                <Input datatype='email' placeholder='Enter email address' />
            </Form.Item>


            <Form.Item name={['login', 'email']} label="Email" required rules={[{ required: true, message: 'Please enter your email address' }, { type: 'email', 'message': 'Please enter valid Email' }]}>
                <Input datatype='email' placeholder='Enter email address' />
            </Form.Item>
            <Form.Item name={['login', 'password']} label="Password" rules={[{ required: true, message: 'Please enter your password' }]}>
                <Input.Password />
            </Form.Item>
            <Divider />
            <Form.Item>
                <Button size='large' shape='round' type='primary' htmlType='submit'>Login</Button>
            </Form.Item>
        </Form>
    )
}


export default H2GLoginPage