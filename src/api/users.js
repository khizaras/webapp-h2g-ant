import { getDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
                // Signed in 
                const user = userCredential.user;
                // ...
                resolve(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject(errorMessage)
            });
    })
}