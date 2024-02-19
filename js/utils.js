function byId(str) {
    return document.getElementById(str)
}

function byClass(str) {
    return document.getElementsByClassName(str)
}

function byTag(str) {
    return document.getElementsByTagName(str)
}

export {
    byId,
    byClass,
    byTag
}
