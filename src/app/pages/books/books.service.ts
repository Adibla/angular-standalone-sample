import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Book {
    title?: string;
    author?: string;
    year?: number;
}

@Injectable({
  providedIn: 'root'
})

export class BooksService {
    books: Book[] = [
        {
          title: 'The Lord of the Rings',
          author: 'J.R.R. Tolkien',
          year: 1954,
        },
        {
          title: 'Harry Potter and the Philosopher\'s Stone',
          author: 'J.K. Rowling',
          year: 1997,
        },
        {
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          year: 1937,
        }
      ];


    constructor(private httpClient: HttpClient) { }

    getBooks(): Observable<Book[]> {
        return of(this.books);
    }
}