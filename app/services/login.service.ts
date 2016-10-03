import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { IUser } from '../entities/index';

@Injectable()
export class LoginService {
    private _url: string = 'http://jsonplaceholder.typicode.com/users';
    private LoginUserKey: string = "CurrentLoginUser";
    constructor(private _http: Http) { }
    private CurrentUser: IUser;
    GetCurrentUser(): IUser {
        return this.CurrentUser;
    }
    GetCurrentLoginUserName(): string {
        if (typeof (Storage) !== "undefined") {
            return localStorage.getItem(this.LoginUserKey);
        }
        else {
            return "";
        }
    }
    SetCurrentLoginUserName(userName: string) {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem(this.LoginUserKey, userName);
            if (!this.CurrentUser || this.CurrentUser.username !== userName) {
                this.CurrentUser = {
                    id: 0,
                    name: userName,
                    username: userName,
                    email: "",
                    address: {
                        street: "",
                        suite: "",
                        city: "",
                        zipcode: "",
                        geo: {
                            lat: 0,
                            lng: 0
                        }
                    },
                    phone: "",
                    website: "",
                    company: {
                        name: "",
                        catchPhrase: "",
                        bs: ""
                    }
                }
            }
        }
    }
    GetUser(userName: string): Promise<IUser> {
        return this._http.get(this._url)
            .map((response: Response) => {
                let users = <IUser[]>response.json()
                this.CurrentUser = users.filter((user) => user.username === userName)[0];
                return this.CurrentUser;
            }).toPromise();
    }
    LogOut() {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem(this.LoginUserKey, "");
            this.CurrentUser = undefined;
        }
    }

}