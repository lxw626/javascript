function Car(name,color) {
    this.name = name
    this.color = color
    this.hello = function(){
        console.log(name,color);
    }
}