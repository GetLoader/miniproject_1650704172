export enum Genre {
    Fiction,
    NonFiction,
    Fantasy,
    Biography,
    ScienceFiction
}

export interface Book {
    id: number;
    title: string;
    author: string;
    genre: Genre;
    publishedYear: number;
    isAvailable: boolean;
}
