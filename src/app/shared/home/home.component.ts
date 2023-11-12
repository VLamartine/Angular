import { Component } from '@angular/core';
import { NoteCardComponent } from './note-card/note-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [NoteCardComponent],
})
export class HomeComponent {}
