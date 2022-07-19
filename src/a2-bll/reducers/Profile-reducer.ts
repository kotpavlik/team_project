type ProfileInitialStateType = {
    id:number
    login:string
    email:string
    firstName:string
    lastName:string
    profilePhoto:string


}
type ActionsTypes = getProfileDataType | changeProfileDataType

const InitialState:ProfileInitialStateType = {
    id:0,
    login:'',
    email:'',
    firstName:'',
    lastName:'',
    profilePhoto:''
}

export const ProfileReducer = (state:ProfileInitialStateType = InitialState,action:ActionsTypes):ProfileInitialStateType => {
    switch(action.type) {
        case 'GET_PROFILE_DATA':{
            return state
        }
        case 'CHANGE_PROFILE_DATA': {
            return state
        }
        default :
            return state
    }
}

type getProfileDataType = ReturnType<typeof getProfileData>
const getProfileData = () => {
    return {
        type:'GET_PROFILE_DATA'
    } as const
}
type changeProfileDataType = ReturnType<typeof changeProfileData>
const changeProfileData = () => {
    return {
        type:'CHANGE_PROFILE_DATA'
    } as const
}