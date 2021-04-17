const ProAPI = {

}

const DevAPI = {
    Login: 'https://diversion.server.topviewclub.cn/api/user/login',
    GetInfo: 'https://diversion.server.topviewclub.cn/api/student/queryStudentInfo'
}

export const API = process.env.NODE_ENV === 'development' ? DevAPI : ProAPI;

export const FetchState = {
    Init: 0,
    Loading: 1,
    Success: 2,
    Failure: 3
}