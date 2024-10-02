import { Library } from './Library';
import { Genre, Book } from './Book';

const library = new Library();

// Add books to the library
library.addBook({
    id: 1,
    title: '1984',
    author: 'George Orwell',
    genre: Genre.Fiction,
    publishedYear: 1949,
    isAvailable: true
});

library.addBook({
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: Genre.Fiction,
    publishedYear: 1960,
    isAvailable: true
});

library.addBook({
    id: 3,
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    genre: Genre.NonFiction,
    publishedYear: 1988,
    isAvailable: true
});

library.addBook({
    id: 4,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: Genre.Fantasy,
    publishedYear: 1937,
    isAvailable: false
});

library.addBook({
    id: 5,
    title: 'The Martian',
    author: 'Andy Weir',
    genre: Genre.ScienceFiction,
    publishedYear: 2011,
    isAvailable: true
});

// List all books in the library
library.listBooks();

// Search for a book by title
const searchResults = library.searchBooks('1984');
console.log('Search Results:', searchResults);
