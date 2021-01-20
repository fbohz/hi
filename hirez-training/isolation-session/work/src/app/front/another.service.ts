import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Llama } from './llama.model';

@Injectable()
export class AnotherService {

  constructor(
    private http: HttpClient,
    ) {}

    serverEndPoint = "http://localhost:3000"

  // getLlamasFromServer(): Observable<Llama[]> {
  //   return of(
  //     [
  //       { name: 'Moco', imageFileName: '1.jpg' },
  //       { name: 'Barbas', imageFileName: '2.jpg' },
  //     ]
  //   )
  // }

  // using http request make sure run yarn server
  getLlamasFromServer(): Observable<Llama[]> {
    return this.http.get<Llama[]>(`${this.serverEndPoint}/newestLlamas`);
    // return this.http.get<Llama[]>('/api/newestLlamas');
  }
}

