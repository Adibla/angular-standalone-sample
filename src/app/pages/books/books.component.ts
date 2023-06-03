import { Component, OnInit } from '@angular/core';
import { BooksService, Book } from './books.service';
import { EMPTY, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-books',
  imports: [CommonModule],
  templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit{     
  books$: Observable<Book[]> = EMPTY;

  constructor(private BooksService: BooksService) { 

  }
  ngOnInit(): void {
    this.books$ = this.BooksService.getBooks();
  }
}
