/**
 * 实现继承目的有两个：
 * 1. 子类可以使用父类的方法
 * 2. 子类的原型指向父类
 *
 * Created by Tyler on 2020/3/3 14:31.
 */

// 基本的两个类
function Animal(){
    this.name = 'animal';
    this.type = ['pig', 'cat']
}
Animal.prototype.greet = function (sound){
    console.log(sound);
};
function Dog(){
    this.name = 'dog';
}


/**
 * prototype继承
 *  子类的构造函数指向父类的一个实例，简单粗暴，但缺点也很明显，所有之类的原型的__proto__共用同一个父类实例。
 */
Dog.prototype = new Animal();

/**
 * 构造函数继承
 * 子类就拥有了父类中的共有属性和方法。但是子类的原型链并没有链接到父类上
 */
function Dog(color) {
    Animal.apply(this, arguments);
}

/**
 * 组合继承
 * 所以把两个组合起来就行了
 */
function Dog(color) {
    Animal.apply(this, arguments);
}
Dog.prototype = new Animal();

/**
 * 寄生组合继承，还没看懂。。
 * extends就是语法糖，略过
 */
