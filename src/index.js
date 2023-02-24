import React, { useEffect } from 'react'

import { Layout, } from 'antd';

import 'antd/dist/reset.css'
import './assets/style/index.less'
import H2GPrimaryHeader from './widgets/primaryHeader';
import { Router } from '@gatsbyjs/reach-router';
import H2GHomePage from './pages';
import H2GLoginPage from './pages/login';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { updateUser } from './store/reducers/user';
import { getAuth } from "firebase/auth";
import H2GAddListings from './pages/addListings';
const { Content, Footer } = Layout;

const Hands2GetherMain = () => {

    const dispatch = useDispatch()
    const auth = getAuth()
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(updateUser(user))
                window.firebase.user = user
            }
        });
    }, [])



    /*  */

    return (
        <Layout className="webapp">
            <H2GPrimaryHeader />
            <Content >
                <Router>
                    <H2GHomePage path="/" />
                    <H2GLoginPage path="/login" />
                    <H2GAddListings path="/addListings/:category" />
                </Router>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Hands2gether ©2023 Created by Ant UED
            </Footer>
        </Layout>
    )
}

export default Hands2GetherMain