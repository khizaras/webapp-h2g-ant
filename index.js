import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom";
import { navigate, Router } from "@gatsbyjs/reach-router";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";

import { getAuth, connectAuthEmulator } from "firebase/auth";
import { ConfigProvider } from 'antd'
import Suspence from "./src/widgets/suspence";
import { store } from "./src/store";
import { Provider } from "react-redux";
import AppGlobal from "./src/widgets/global";
import firebaseConfig from "./firebase-config";
import App from "./src";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

// todo
// remove this in production
connectAuthEmulator(auth, "http://localhost:9099");
connectFirestoreEmulator(db, 'localhost', 8080);
connectStorageEmulator(storage, 'localhost', 9199);
const global = new AppGlobal()
window.firebase.firestore = db
window.firebase.auth = auth
window.firebase.analytics = analytics
window.firebase.storage = storage

const root = document.getElementById("root");
const token={token:{colorPrimary:'#6c63ff',fontFamily:'Open Sans'}}

ReactDOM.render(
    <ConfigProvider  theme={token} virtual={true} prefixCls="h2g" iconPrefixCls="h2gIcons" componentSize="large" >
        <Provider store={store}>
            <Suspense fallback={<Suspence />}>
                <Router basepath="/">
                    <App path="/*" />
                </Router>
            </Suspense>
        </Provider>
    </ConfigProvider>,
    root
);
