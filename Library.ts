import { Book, Genre } from './Book';

export class Library {
    private books: Book[] = [];

    // Add a new book to the library
    addBook(book: Book): void {
        this.books.push(book);
        console.log('Book added successfully.');
    }

    // Update details of an existing book
    updateBook(id: number, updatedDetails: Partial<Book>): void {
        const book = this.books.find(b => b.id === id);
        if (book) {
            Object.assign(book, updatedDetails);
            console.log('Book updated successfully.');
        } else {
            console.log('Book not found.');
        }
    }

    // Delete a book by ID
    deleteBook(id: number): void {
        this.books = this.books.filter(b => b.id !== id);
        console.log('Book deleted successfully.');
    }

    // Search for books by title, author, or genre
    searchBooks(query: string): Book[] {
        return this.books.filter(b =>
            b.title.includes(query) ||
            b.author.includes(query) ||
            Genre[b.genre].includes(query)
        );
    }

    // List all books
    listBooks(): void {
        if (this.books.length === 0) {
            console.log('No books available.');
        } else {
            this.books.forEach(book => {
                console.log(`${book.id}: ${book.title} by ${book.author}`);
            });
        }
    }
}
