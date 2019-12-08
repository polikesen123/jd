import http from './index'

export function login(option){
    return http.post('/login',option)
}