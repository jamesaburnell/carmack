export function bindAll(list, _this) {
    list.forEach(e => { _this[e] = _this[e].bind(_this) })
}