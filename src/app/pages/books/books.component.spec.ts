import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponent } from './books.component';
import { Book, BooksService } from './books.service';
import { Observable, of } from 'rxjs';

class MockBooksService {
  books: Book[] = [{ title: 'Test Book'}, { title: 'Test Book 2'}];
  getBooks(): Observable<Book[]> {
    return of(this.books);
}
}

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: BooksService, useClass: MockBooksService }
      ]
    });    
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render books title', () => {
    const nativeEl = fixture.nativeElement as HTMLElement;
    const liContents = nativeEl.querySelectorAll('li');
    expect(liContents.length).toBe(2);
    liContents.forEach((li, index) => {
      expect(li.textContent).toContain(new MockBooksService().books[index].title);
    });
  });
});
