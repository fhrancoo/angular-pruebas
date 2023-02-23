import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageFileComponent } from './image-file/image-file.component';
import { UploadImageRoutingModule } from './upload-image-routing.module';



@NgModule({
  declarations: [
    ImageFileComponent
  ],
  imports: [
    CommonModule,
    UploadImageRoutingModule
  ]
})
export class UploadImageModule { }
