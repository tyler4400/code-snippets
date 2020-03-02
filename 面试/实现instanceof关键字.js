/**
 * Created by Tyler on 2020/3/2 19:39.
 * 期待的使用方式
 * instanceOf(obj, clazz);
 */

const instanceOf = function (obj, clazz){
    // 参数j检查
    if (!obj || !clazz || !obj.__proto__ || !clazz.prototype) return false;

    let current = obj;
    while (current) {
        if (current.__proto__ === clazz.prototype) {
            return true;
        } else {
            current = current.__proto__;
        }
    }
    return false;
};


// 使用
function Parent(){
}

function Child(){
}

Child.prototype.__proto__ = Parent.prototype;

const obj = new Child();
console.log(instanceOf(obj, Child));   // true
console.log(instanceOf(obj, Parent));   // true
console.log(instanceOf({}, Parent));   // false
