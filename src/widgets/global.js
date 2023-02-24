import {categories} from '../schema'
class AppGlobal {

    constructor() {
        window.firebase = {
           firestore:null,
           auth:null,
           analytics:null,
           user:null,
           schema:categories
        }
    }

    registerUser(user) {
        window.firebase.user = user
    }
    


}


export default AppGlobal