/**
 * 最简单的方法就是用一个自增id去匹配查找，没有查找到时说明此时的id就是我们想要的。
 * 查找方法第一题已经写过了，稍微改一下就能用。当然最好是把第一题修改使其可以复用。
 * @param srcName
 * @param rootTreeNode
 * @returns {*}
 */
function getIncName(srcName, rootTreeNode){
    let nameId = 0;
    while (nameId >= 0){
        const name = newName(nameId, srcName);
        const node = findNodeByName(rootTreeNode, name);
        if(!node) return name;
        nameId++;
    }
}

function newName(nameId, srcName){
    return nameId === 0 ? srcName : srcName + '_' + nameId;
}

/**
 * 这里直接把第一题答案搬过来了，区别只是把id改成name
 * @param root
 * @param name
 * @returns {*|undefined|undefined}
 */
function findNodeByName(root, name){
    if (!root) return undefined;
    if (root.name === name) return root;
    if (!root.children) return undefined;
    let len = root.children.length;
    for (let i = 0; !!len && i < root.children.length; i++) {
        const target = findNodeByName(root.children[i], name);
        if (target) return target;
    }
}

/**
 * 测试
 * @type {{children: *[], name: string, id: string, type: string}}
 */
let tree = {
    id: '1',
    type: 'View',
    name: 'view',
    children: [
        {
            id: '2',
            type: 'Button',
            name: 'button'
        },
        {
            id: '3',
            type: 'View',
            name: 'view_1',
            children: [
                {
                    id: '4',
                    type: 'Button',
                    name: 'button_1'
                },
                {
                    id: '5',
                    type: 'View',
                    name: 'view_2'
                },
                {
                    id: '5',
                    type: 'View',
                    name: 'view_3'
                },
                {
                    id: '5',
                    type: 'View',
                    name: 'view_5'
                },
                {
                    id: '5',
                    type: 'View',
                    name: 'view_6'
                }
            ]
        }
    ]
};
const a = getIncName('view', tree);
console.log(a);

