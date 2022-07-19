type InitialStateType = {
    login:string
    password:string
    confirmPassword:string
}
type ActionsTypes = setLoginType

const InitialState:InitialStateType = {
    login:'',
    password:'',
    confirmPassword:''
}

export const LoginReducer = (state:InitialStateType = InitialState,action:ActionsTypes):InitialStateType => {
    switch(action.type) {
        case 'SET_LOGIN' : {
            return state
        }
        default:
            return state
    }
}

type setLoginType = ReturnType<typeof setLogin>
const setLogin = () => {
    return {
        type:'SET_LOGIN'
    }
}