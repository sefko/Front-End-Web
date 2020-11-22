class Item {
    constructor (name, discount) {
        this.name = name;
        this.discount = discount;
    }
    getPrice () {
        let price = 1000;
        return price;
    }
    applyDiscont () {
        let price = this.getPrice()
        return price - price * (this.discount / 100);
    }
}

let apple = new Item('apple', 20);
console.log(apple.applyDiscont());