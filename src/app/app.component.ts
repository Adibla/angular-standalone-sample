import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports:[HeaderComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'angular-standalone-sample';
}
