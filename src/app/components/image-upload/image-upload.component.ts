import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.scss',
})
export class ImageUploadComponent {
  @Input() label!: string;
  @Input()
  set image(image: string | undefined) {
    this.imagePreview = image ?? null;
  }

  @Output('imageUpload') eventEmitter = new EventEmitter<string>();
  @ViewChild('imageInput') imageInput!: ElementRef;

  imageFile!: File | null;
  imagePreview!: string | ArrayBuffer | null;
  changed = false;

  constructor() {}

  ngOnInit(): void {}

  uploadImage(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target || !target.files || !target.files[0]) {
      return;
    }
    this.imageFile = target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      // this.imagePreview = reader.result;
      // console.log(reader.result?.toString());
      this.eventEmitter.emit(reader.result?.toString());
    };
    reader.readAsDataURL(this.imageFile);
    this.changed = true;
  }

  removeImage(): void {
    if (this.imageFile || this.imagePreview) {
      this.imageFile = null;
      this.imagePreview = null;
      this.changed = true;
      this.imageInput.nativeElement.value = null;
      this.eventEmitter.emit('');
    }
  }
}
