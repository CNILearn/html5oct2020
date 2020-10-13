// create a book using the Object

function books1() {
    let book1 = new Object();
    book1.title = "Professional C# and .NET";
    book1.display = function () {
        console.log("display");
        console.log(book1.title);
    }

    console.log(book1.title);
    book1.display();
}

// object literal
function books2() {
    let book1 = {
        title: "Professional C# and .NET",
        publisher: "Wrox Press",
        display: function () {
            console.log(this.title);
        }
    };
    console.log(book1.title);
    book1.display();
}

// use constructor
function books3() {
    let Book = function (title, publisher) {
        this.title = title;
        this.publisher = publisher;
    }

    Book.prototype.display = function () {
        console.log(this.title);
    }

    let book3 = new Book("Professional C#", "Wrox Press");
    book3.display();
    let book4 = new Book("a title", "a pub");
    book4.display();

    //book4.display = function () {
    //    console.log("bah!!!");
    //}

    book4.display();


 
}

books1();

books3();