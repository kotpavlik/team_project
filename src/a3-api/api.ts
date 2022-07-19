import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://please.wright.url.com`,
})

export type LoginDataAPIType = {}
export type ProfileAPIType = {}
type ResponseDeleteType = {}

export const profileAPI = {
    getProfile(idProfile: number) {
        return instance.get<ProfileAPIType>(`profile/${idProfile}`).then(response => {
            return response
        });
    },
    deleteProfile(idProfile:number){
        return instance.delete<ResponseDeleteType>(`profile/${idProfile}`).then(response => {
            return response
        })
    },
    changeProfile(idProfile:number,profileData:ProfileAPIType) {
        return instance.put<ProfileAPIType>(`profile/${idProfile}`, {profileData}).then(response => {
            return response
        })
    }
};