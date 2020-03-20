function Node(key, left, right){
    this.key = key;
    this.left = left || null;
    this.right = right || null;
}

function BinaryTree(rootNode){
    this.root = rootNode || null;
    /**
     * 插入方法
     */
    this.insert = function (key){
        const newNode = new Node(key);
        if (this.root === null) {
            this.root = newNode;
        } else {
            insertNode(this.root, newNode);
        }
    };
    const insertNode = function (root, node){
        if (root.key > node.key) {
            if (root.left === null) {
                root.left = node;
            } else {
                insertNode(root.left, node);
            }
        }
        if (root.key < node.key) {
            if (root.right === null) {
                root.right = node;
            } else {
                insertNode(root.right, node);
            }
        }
    };
    /**
     * 遍历方法
     * 中序遍历
     先访问左节点，然后访问根节点，最后访问右节点(左->根->右)
     */
    this.inOrderTraverse = function (callback){
        inOrderTraverseNode(this.root, callback);
    };
    const inOrderTraverseNode = function (node, callback){
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback)
        }
    };
    /**
     * 查找最大值
     */
    this.findMax = function (){
        let node = this.root;
        while (node && node.right !== null) {
            node = node.right;
        }
        return node && node.key;
    }
}

/**
 * 测试方法1
 * 生成二叉树
 */
console.log('生成二叉树:');
console.log(test1());

function test1(){
    let list = [8, 3, 10, 5, 3, 3, 56, 2, 1, 4, 6, 14, 7, 13];
    let binaryTree = new BinaryTree();
    list.forEach(val => binaryTree.insert(val));
    return binaryTree;
}

/**
 * 测试方法2
 * 中序遍历二叉树
 */
test2();

function test2(){
    console.log('中序遍历二叉树:');
    let binaryTree = test1();
    binaryTree.inOrderTraverse(key => console.log(key));
}

/**
 * 查找最大值
 */
test3();

function test3(){
    console.log('查找最大值:');
    let binaryTree = test1();
    const max = binaryTree.findMax();
    console.log(max);
}
