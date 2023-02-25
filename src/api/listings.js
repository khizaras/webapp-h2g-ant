import { getDocs, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";


export const getRecentListings = (email) => {
    return new Promise(async (resolve, reject) => {
        let asyncResult={
            food:getAllFoodListings(),
            clothes:getAllClothesListings()
        }
        let result={
            food:await asyncResult.food,
            clothes:await asyncResult.clothes
        }
        resolve(result)
    })
}

export const getAllFoodListings = () => {
    return new Promise(async (resolve, reject) => {
        const db = getFirestore()
        let foods = []
        getDocs(collection(db, "food")).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                foods.push(doc.data())
            });
            resolve(foods)
        });
    })
}

export const getAllClothesListings = () => {
    return new Promise(async (resolve, reject) => {
        const db = getFirestore()
        let clothes = []
        getDocs(collection(db, "clothes")).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                clothes.push(doc.data())
            });
            resolve(clothes)
        });
    })
}
