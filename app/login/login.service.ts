import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { IUser } from './user';

@Injectable()
export class LoginService {
    private _url: string = 'http://jsonplaceholder.typicode.com/users';
    constructor(private _http: Http) { }
    private CurrentUser: IUser;
    GetCurrentUser(): IUser {
        return this.CurrentUser;
    }
    GetUser(userName: string): Promise<IUser> {
        return this._http.get(this._url)
            .map((response: Response) => {
                let users = <IUser[]>response.json()
                this.CurrentUser = users.filter((user) => user.username === userName)[0];
                return this.CurrentUser;
            }).toPromise();
    }

}