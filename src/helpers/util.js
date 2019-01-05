export function bindAll(list, _this) {
    list.forEach(e => { _this[e] = _this[e].bind(_this) })
}

export function checkLoginStatus({auth: { user, uid }, history: { push }}) {
    if(!user || !uid) push('/login')
}