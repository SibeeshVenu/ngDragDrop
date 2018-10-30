import { Injectable } from '@angular/core';
import { RequestMethod, RequestOptions, Request, Http } from '@angular/http';
import { config } from './config';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: Http) {
  }

  async get(url: string) {
    return await this.request(url, RequestMethod.Get);
  }

  async request(url: string, method: RequestMethod) {
    const requestOptions = new RequestOptions({
      method: method,
      url: `${config.api.baseUrl}${url}${config.api.apiKey}`
    });

    const request = new Request(requestOptions);
    return await this.http.request(request).toPromise();
  }
}
