// binary tree

class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.rigth = null
        this.parent = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
}

function sumLeafs(tree) {
    let sum = 0
    tree.forEach((node) => {
        if(!node.left && !node.rigth) {
            sum += node.value
        }
        sum += sumLeafs(node.left)
        sum += sumLeafs(node.rigth)
    })
    return sum
}
