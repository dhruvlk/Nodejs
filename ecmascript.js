// let a=30;
// function xyz() {
//     let a=40;
//     console.log(a);
// }
// xyz();
// console.log(a);


// const a={
//     "name":"dhruv",
//     "age":21
// }
// a.email="dhruvlallukarshanwala6165@gmail.com";
// a.age=20;
// console.log(a);


// var name="dhruv";
// var age=21;
// console.log(`Hii ${name} you are ${age} years old`);

class users {
    constructor() {
        this.name="dhruv";
        this.age="21";
    }
    getName(){
        this.email="dhruvlallukarshanwala6165@gmail.com";
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getEmail(){
        return this.email;
    }

}

var user =new users();
console.log(user.getName());
console.log(user.getEmail());
