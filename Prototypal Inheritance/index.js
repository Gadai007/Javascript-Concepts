//es5 functional prototypal inheritance

function Person(name, age){
    this.name = name
    this.age = age
}

Person.prototype.greet = function(){
    return `Hi I'm ${this.name} and my age is ${this.age}`
}

function Teacher(name, age, subject){
    Person.call(this, name, age)
    this.subject = subject
}

Teacher.prototype = Object.create(Person.prototype)
Teacher.prototype = Object.assign(Teacher.prototype, { constructor: Teacher})

const teacher = new Teacher('Debayan', 23, "Maths")
console.log(teacher.name, teacher.age)
console.log(teacher.constructor.name)
console.log(teacher.greet())
