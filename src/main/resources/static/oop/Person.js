function Person(name,age) {
    this.name = name
    this.age = age
    /**
     * 如果new Person('','')这里this 为Person对象,并且默认返回刚刚new的对象
     * 如果直接调用 Person('','')这里的this为window对象,没有返回值,会在window对象上绑定一个hello()方法
     */
    console.log('this',this);
    this.hello = function(){
        let car = new Car('宝马','土豪金');
        console.log(`我是${name},今年${age}岁了,拥有一辆${car.color}色的${car.name}车`);
    }
}