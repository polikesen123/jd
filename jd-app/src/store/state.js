let username = localStorage.getItem('username');
let jdGoods = localStorage.getItem('jdGoods');
export default {
    count:0,
    loginState:false,
    username,
    jdGoods:JSON.parse(jdGoods) || ''
}