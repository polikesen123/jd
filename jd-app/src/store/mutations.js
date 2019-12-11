export function stateChange(state,option){
    state.loginState = option.loginState
}
export function nameChange(state,option){
    state.username = option.nikoname
    localStorage.setItem('username',JSON.stringify(option.nikoname))
}
