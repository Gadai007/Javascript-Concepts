//es6 based class based prototypal inheritance

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greet(){
        return `Hi I'm ${this.name} and my age is ${this.age}`
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age)
        this.subject = subject
    }
}