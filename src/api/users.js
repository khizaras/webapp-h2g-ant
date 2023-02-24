import { getDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, sendSignInLinkToEmail } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//const db = getFirestore()



export const getUserFromDB = (email) => {
    return new Promise(async (resolve, reject) => {
        const docRef = await getDoc(doc(db, "users", email));
        if (docRef.exists()) {
            resolve(docRef.data())
        } else {
            reject("No such document!")
        }
    })
}

export const loginWithEmailAndPassword = (email, password) => {



    return new Promise(async (resolve, reject) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (!user.emailVerified) {
                    sendMail(auth, email)
                }
                resolve(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject(errorMessage)
            });
    })


}


const sendMail = (auth, email) => {

    const actionCodeSettings = {
        url: 'https://localhost:3000/login?cartId=1234',
        // This must be true.
        handleCodeInApp: true,
        iOS: {
            bundleId: 'com.example.ios'
        },
        android: {
            packageName: 'com.example.android',
            installApp: true,
            minimumVersion: '12'
        },
        dynamicLinkDomain: 'example.page.link'
    };

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then((res) => {
            window.localStorage.setItem('emailForSignIn', email);
            console.log({sendSignInLinkToEmail:res});
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error({ sendSignInLinkToEmail: errorMessage })
        });
}