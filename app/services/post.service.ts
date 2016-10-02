import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IPost } from '../entities/index'

@Injectable()
export class PostService {
    private _url: string = 'http://jsonplaceholder.typicode.com/posts?userId';
  
    constructor(private _http: Http) { }

    GetUserPosts(userId: number): Observable<IPost[]> {
        return this._http.get(`${this._url}=${userId}`)
            .map((response: Response) => <IPost[]>response.json());
    }
}

