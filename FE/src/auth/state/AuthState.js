import React, {createContext} from 'react'

const AuthState = createContext({
    user: {
        username: 'guest',
        role: 'guest'
    }
})

export default AuthState;