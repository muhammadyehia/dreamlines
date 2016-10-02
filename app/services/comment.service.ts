import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IComment } from '../entities/index';
@Injectable()
export class CommentService {

    private _url: string = 'http://jsonplaceholder.typicode.com/posts/';

    constructor(private _http: Http) { }

    GetPostComments(commentId: number): Observable<IComment[]> {
        return this._http.get(`${this._url}${commentId}/comments`)
            .map((response: Response) => <IComment[]>response.json());
    }
}