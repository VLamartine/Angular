import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {}
