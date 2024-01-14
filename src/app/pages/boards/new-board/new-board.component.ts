import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ImageUploadComponent } from 'src/app/components/image-upload/image-upload.component';
import { BoardService } from '@services/board.service';
import { IBoard } from '@interfaces/board';

interface IBoardForm {
  name: FormControl<string>;
  image?: FormControl<string>;
  description?: FormControl<string>;
}

@Component({
  selector: 'app-new-board',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ImageUploadComponent,
  ],
  templateUrl: './new-board.component.html',
  styleUrl: './new-board.component.scss',
})
export class NewBoardComponent {
  boardForm: FormGroup<IBoardForm>;
  imagePreview!: string;
  constructor(
    private fb: NonNullableFormBuilder,
    private boardService: BoardService
  ) {
    this.boardForm = this.fb.group<IBoardForm>({
      name: this.fb.control('', [Validators.required]),
      image: this.fb.control('', []),
      description: this.fb.control('', []),
    });
  }

  onImageUploaded(event: string) {
    console.log(event);
    // this.eventForm.patchValue({
    //   image: event,
    // });
  }

  onSubmit(): void {
    if (this.boardForm.invalid) {
      return;
    }

    const body: IBoard = {
      name: this.boardForm.get('name')?.value ?? '',
      description: this.boardForm.get('description')?.value,
      image: this.boardForm.get('image')?.value,
    };

    this.boardService.postBoard(body);
  }

  get image(): string | undefined {
    return 'https://img.pokemondb.net/artwork/large/probopass.jpg';
  }
}
