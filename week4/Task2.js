class Person {
    constructor (Name) {
        this.name = Name;
    }
}

Person.planet = 'Земя';

Person.prototype.hello = function () {
    console.log('Здравей ' + this.name + ' от планетата ' + Person.planet);
};

let ivan = new Person('Иван');
let gosho = new Person('Гошо');
let pesho = new Person('Пешо');

ivan.hello();
gosho.hello();
pesho.hello();