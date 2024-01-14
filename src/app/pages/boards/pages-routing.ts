import { Routes } from '@angular/router';
import { HomeComponent } from '@shared/home/home.component';
import { NewBoardComponent } from './new-board/new-board.component';
import { BoardComponent } from './board/board.component';

export const PAGES_ROUTING: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'new',
    component: NewBoardComponent,
  },
  {
    path: ':id',
    component: BoardComponent,
  },
];
