import { Component, OnInit } from '@angular/core';
import { UploadImageService } from 'src/app/core/services/uploadImage/upload-image.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-image-file',
  templateUrl: './image-file.component.html',
  styleUrls: ['./image-file.component.scss']
})
export class ImageFileComponent implements OnInit {


  selectedFile!: ImageSnippet;

  constructor(){}

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      // this.uploadImageService.uploadImage(this.selectedFile.file).subscribe(
      //   (res) => {
      //     this.onSuccess();
      //   },
      //   (err) => {
      //     this.onError();
      //   })
    });

    reader.readAsDataURL(file);
  }

  ngOnInit(): void {
  }

}
