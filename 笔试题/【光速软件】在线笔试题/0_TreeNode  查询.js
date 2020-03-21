/**
 *
 * @param root
 * @param id
 * @returns {*|undefined|undefined}
 */
function findNodeById(root, id){
    if (!root) return undefined;
    if (root.id === id) return root;
    if (!root.children) return undefined;
    let len = root.children.length;
    for (let i = 0; !!len && i < root.children.length; i++) {
        const target = findNodeById(root.children[i], id);
        if (target) return target;
    }
}

/**
 * 测试
 * @type {{children: *[], id: string, label: string}}
 */
let tree = {
    id: '1',
    label: 'first',
    children: [
        {
            id: '2',
            label: 'second'
        },
        {
            id: '3',
            label: 'third',
            children: [
                {
                    id: '4',
                    label: 'fourth'
                },
                {
                    id: '5',
                    label: 'fifth',
                    children: [
                        {
                            id: '43',
                            label: 'fourth'
                        },
                        {
                            id: '35',
                            label: 'fifth'
                        }
                    ]
                }
            ]
        }
    ]
};
const node = findNodeById(tree, '35');
console.log(node);
