import http from './index'

export function main(){
    return http.get('/main')
}
export function footer(){
    return http.get('/footer')
}