import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IBoard } from '@interfaces/board';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  userBoards: BehaviorSubject<IBoard[]> = new BehaviorSubject<IBoard[]>([]);
  constructor() {}

  postBoard(body: IBoard) {
    this.userBoards.next([...this.userBoards.getValue(), body]);
    return;
  }
}
