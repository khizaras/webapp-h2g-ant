class AppGlobal {

    constructor() {
        window.firebase = {
           firestore:null,
           auth:null,
           analytics:null,
           user:null
        }
    }

    registerUser(user) {
        window.firebase.user = user
    }
    


}


export default AppGlobal