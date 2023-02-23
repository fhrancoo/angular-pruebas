import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageFileComponent } from './image-file/image-file.component';

const routes: Routes = [
  {
    path: '',
    component: ImageFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadImageRoutingModule { }
