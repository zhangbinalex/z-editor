// 判断节点是否为占位空白符
function isPlaceholderSpace(node) {
    // console.log(node,333)
    let uselessNode = document.createElement('span')
    uselessNode.innerHTML = '&#8203;'
    return node && node.nodeType === 3 && uselessNode.innerHTML === node.nodeValue
}

export { isPlaceholderSpace }