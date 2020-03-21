/**
 * 1题
 */
function buildLocationTree(locationList){
    // 检查参数是否有误
    if(!Array.isArray(locationList) && locationList.length <= 0) return {};

    return locationList.reduce((total, currVal) => {
        if(!currVal.pid) total.root = currVal;
        return appendNode(total, currVal); // 递归子节点
    }, {root: {}})
}

function appendNode(LocationNode, location){
    if(LocationNode.id === location.pid){
        LocationNode.subLocations = [...LocationNode.subLocations|| [], location]
    }
    if(LocationNode.subLocations && LocationNode.subLocations.length > 0){
        LocationNode.subLocations.map(subLocation => {
            appendNode(subLocation, location);
        })
    }
    return LocationNode;
}

/**
 * 2题
 */
let someList = [{"eventId":2498858,"timestamp":1463569008327,"user":"auto"},{},{}];
mySort(someList);

function mySort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j].timestamp > arr[j+1].timestamp) {
                const temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

/**
 * 3题
 */
let target = cookie.match(/;uin=(.*);/);
