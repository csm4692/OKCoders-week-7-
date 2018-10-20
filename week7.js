var person1= { firstname: 'Carson', lastname: 'Mitchell', age: '27'};
var person2= { firstname: 'Zeus', lastname: 'Mcfob', age: '105'};
var person3= { firstname: 'Socrates', lastname: 'Sam', age: '480'};
var people = [person1, person2, person3];
console.log(people);

// function f (x) {console.log( "Hello" + x) };



var tmp = { 
    repete3: function(x){
        for(var i = 1; i<= 3; i++){
            x();
        }
    }
    hello: function (){console.log("goodbye");
}
}

var functionName = 'hello';
tmp['repete3']( tmp[functionName]);
tmp.repete3( tmp.hello);