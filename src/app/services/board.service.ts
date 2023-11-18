import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IBody } from '@interfaces/board';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  userBoards: BehaviorSubject<IBody[]> = new BehaviorSubject<IBody[]>([]);
  constructor() {}

  postBoard(body: IBody) {
    this.userBoards.next([...this.userBoards.getValue(), body]);
    return;
  }
}
