import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'image',
    loadChildren: () => import('./modules/upload-image/upload-image.module').then(m => m.UploadImageModule),
  },
  {
    path: 'slide',
    loadChildren: () => import('./modules/slide/slide.module').then(m => m.SlideModule),
  },
  {
    path: '**',
    redirectTo: 'slide'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
