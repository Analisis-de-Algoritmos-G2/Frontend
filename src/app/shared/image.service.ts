import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  // URL de tu servidor Flask
  private apiUrl = 'http://127.0.0.1:5000/create-word-cloud';

  constructor(private http: HttpClient) { }

  getWordCloud(candidateName: string, topic: string): Observable<Blob> {
    const body = { candidate_name: candidateName, topic: topic};
    return this.http.post(this.apiUrl, body, { responseType: 'blob' });
  }
}
