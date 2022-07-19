type LoginDataInitialStateType = {
    id:number
    login:string
    password:string
}
type ActionsTypes = confirmLoginType | setLoginType | recoverPasswordType | changePasswordType

const InitialState:LoginDataInitialStateType = {
    id:0,
    login:'',
    password:''
}

export const LoginDataReducer =
    (state:LoginDataInitialStateType = InitialState, action:ActionsTypes):LoginDataInitialStateType => {
    switch(action.type) {
        case 'CONFIRM_LOGIN_DATA' : {
            return state
        }
        case 'SET_LOGIN' : {
            return state
        }
        case 'RECOVER_PASSWORD' : {
            return state
        }
        case 'CHANGE_PASSWORD_ON_NEW_PASSWORD' : {
            return state
        }
        default:
            return state
    }
}

type confirmLoginType = ReturnType<typeof confirmLogin>
const confirmLogin = () => {
    return {
        type:'CONFIRM_LOGIN_DATA'
    } as const
}
type setLoginType = ReturnType<typeof setLogin>
const setLogin = () => {
    return {
        type:'SET_LOGIN'
    } as const
}
type recoverPasswordType = ReturnType<typeof recoverPassword>
const recoverPassword = () => {
    return {
        type:'RECOVER_PASSWORD'
    } as const
}
type changePasswordType = ReturnType<typeof changePasswordOnNewPassword>
const changePasswordOnNewPassword = () => {
    return {
        type:'CHANGE_PASSWORD_ON_NEW_PASSWORD'
    } as const
}