import { Route, RouterOutlet } from '@angular/router';

export const ROUTES: Route[] = [
  {path: 'books', loadChildren: () => import('./pages/books/books.routes').then(mod => mod.BOOKS_ROUTES)},
];