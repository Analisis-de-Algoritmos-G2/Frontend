import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  // URL de tu servidor Flask
  private apiUrl = 'http://127.0.0.1:5000/get_positive_tweet';

  constructor(private http: HttpClient) { }

  getTweet(candidateName: string, topic: string): Observable<String> {
    const body = { candidate_name: candidateName, topic: topic};
    return this.http.post(this.apiUrl, body, { responseType: 'text' });
  }
}
