/**
 * Write a JavaScript program to display the reading status (i.e. display book name, author name,
 * and reading status) of the following books.
 */

let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
];

// node does not support alert function, so I use console logs instead
const displayReadingStatuses = (library) => {
    library.forEach(book => {
        console.log('author:', book.author);
        console.log('title:', book.title);
        console.log('reading status:', book.author ? 'reading' : 'not reading')
        console.log('\n', '===================', '\n');
    });
}

export const run = () => {
    displayReadingStatuses(library);
}

