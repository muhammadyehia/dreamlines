import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser} from '../entities/index'
import {LoginService} from '../services/index'
@Component({
    moduleId: module.id,
    selector: 'app-wall',
    templateUrl: 'wall.component.html',
    styleUrls: ['wall.component.css']
})
export class WallComponent implements OnInit {
    constructor(private _loginService: LoginService, private _router: Router) { }
    public UserName: string;
    ngOnInit() {
        let currentUser = this._loginService.GetCurrentUser();
        if (currentUser) {
            this.UserName = currentUser.name;
        }
        else {
            let link = ['/login'];
            this._router.navigate(link);
        }
    }
}