


class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    info(){
        console.log(`${this.title}`);
    }
}

const book1 = new Book("LOTR", "Tolkien");
//book1.info();


class EBook extends Book {
    constructor(title, author, pages){
        super(title, author);
        this.pages = pages;
    }

    info(){
        console.log(`${this.title} EBook has ${this.pages} pages`);
    }
}

const book2 = new EBook("LOTR", "Tolkien", 100);
book2.info();

//======= Builder Pattern and Chaining ====================

class Wallet {
    balance = 0;

    add(sum){
        this.balance += sum;
        return this;
    }

    remove(sum){
        this.balance -= sum;
        return this;
    }
}

const wallet = new Wallet();
const res = wallet
        .add(100)
        .remove(10)
console.log(res);


class Builder {
        house = {};

        addRoof(){
            this.house.roof = "Roof";
            return this;
        }

        addFloor(){
            this.house.floor = "Floor";
            return this;
        }

        execute(){
            return this.house;
        }
}

const result = new Builder().addRoof().addFloor().execute();
console.log(result);