


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