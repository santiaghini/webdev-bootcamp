var obj = {
    name: "Chuck",
    age: 45,
    isCool: true,
    friends: ["Joe", "Michael"],
    add: function(x, y){
        return x + y;
    }
}

obj.addOne = function(){
    this.age += 1;
}

// USE UNDERSCORE.JS