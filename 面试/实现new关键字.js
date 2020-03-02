/**
 * Created by Tyler on 2020/3/2 19:37.
 */
// 作者：蒋鹏飞
// 链接：https://juejin.im/post/5e50e5b16fb9a07c9a1959af
//     来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

//实现方式
function myNew(func, ...args){
    const obj = {};     // 新建一个空对象
    func.call(obj, ...args);  // 执行构造函数
    obj.__proto__ = func.prototype;    // 设置原型链

    return obj;
}

// 使用方式
function Puppy(age){
    this.puppyAge = age;
}
Puppy.prototype.say = function (){
    console.log("汪汪汪");
};
const myPuppy3 = myNew(Puppy, 2);
console.log(myPuppy3.puppyAge);  // 2
console.log(myPuppy3.say());     // 汪汪汪

