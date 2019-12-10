import http from './index'

export function swiper(){
    return http.get('/swiper')
}
export function hometop(){
    return http.get('/hometop')
}
//京东秒杀
export function jdms(){
    return http.get('/jdms')
}
export function four(){
    return http.get('/four')
}
