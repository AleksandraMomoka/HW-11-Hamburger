const SIZE_SMALL = {
    name: 'SIZE_SMALL',
    price: 50,
    calories: 20
};

const SIZE_MIDDLE = {
    name: 'SIZE_MIDDLE',
    price: 75,
    calories: 30
};

const SIZE_BIG = {
    name: 'SIZE_BIG',
    price: 100,
    calories: 40
};

const CHEESE = {
    name: 'CHEESE',
    price: 10,
    calories: 20
};

const SALAD = {
    name: 'SALAD',
    price: 20,
    calories: 5
};

const POTATO = {
    name: 'POTATO',
    price: 15,
    calories: 10
};

const FLAVORING = {
    name: 'FLAVORING',
    price: 15,
    calories: 0
};

const MAYO = {
    name: 'MAYO',
    price: 20,
    calories: 5
};


class Hamburger {
    addedPrice = 0;
    addedCalories = 0;
    constructor(size) {
        this.price = size.price
        this.calories = size.calories
    }

    addedComponent(mod) {
        if (mod) {
            this.addedPrice += mod.price;
            this.addedCalories += mod.calories;
        }
        else {
            return;
        }
    }

    getPrice() {
        return this.price + this.addedPrice;
    }

    getCalories() {
         return this.calories + this.addedCalories;
    }
}

let hamburger = new Hamburger(SIZE_MIDDLE);

hamburger.addedComponent(MAYO);
hamburger.addedComponent(CHEESE);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Calories with sauce: " + hamburger.getCalories());