import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
    state: {
        user:{
        userId: "",
        name: "michelle",
        email: "michelledu38@gmail.com",
    }
    },
    getters:{
        getUserInfo(state ){
            return (state)
            
        },
        
    }
})

