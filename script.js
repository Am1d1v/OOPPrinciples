


/*

class Film{
    #name;
    #author;
    rating;
    #length;

    constructor(name, author, length){
        this.#name = name;
        this.#author = author;
        this.#length = length;
    }

    get name(){
        return this.#name;
    }

    get author(){
        return this.#author;
    }

    get length(){
        return this.#length;
    }
}

const film = new Film("Avatar", "Cameron", 240);
console.log(film);

*/

const Book = function(title, author){
    this.title = title;
    this.author = author;

}

Book.prototype.buy = function(){
    console.log("Buy");
}

const AudioBook = function(title, author, lengthMin){
    Book.call(this, title, author);
    this.lengthMin = lengthMin;
}

AudioBook.prototype = Object.create(Book.prototype);

AudioBook.prototype.log = function(){
    console.log(`${this.title} - ${this.lengthMin}`);
}

const book = new AudioBook("Lotr", "Tolkien", 20*60);
book.log();
book.buy();