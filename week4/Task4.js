function Person () {
    let _salary = 1000;

    return {
        getSecretSalaryInfo: function () {
            return _salary;
        }
    }
}

let person = new Person();
console.log(person._salary);
console.log(person.getSecretSalaryInfo());