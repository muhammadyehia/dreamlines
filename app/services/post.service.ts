import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IPost } from '../entities/index'

@Injectable()
export class PostService {
    private _url: string = 'app/api/contacts/contactsWithLastMessage.json';
    constructor(private _http: Http) { }

    GetUserPosts(userName: string): Observable<IPost[]> {
        return this._http.get(this._url)
            .map((response: Response) => <IPost[]>response.json());
    }
}

