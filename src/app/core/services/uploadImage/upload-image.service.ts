import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {


  constructor(private http: HttpClient) {}


  uploadImage(image: File): Observable<Response> {

    const formData = new FormData();
    formData.append('image', image);

    return this.http.post<Response>('/api', formData);
  }
}
