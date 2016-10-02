import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/index'
import { IUser } from '../entities/index'
@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private _router: Router, private _loginService: LoginService) { }
    public UserName: string;
    public Submit: boolean;
    public  HideLoading: boolean;
    ngOnInit() {
        this.Submit = true;
        this.HideLoading = true;
        this.UserName="Bret";
    }
    OnPressEnter(event: any) {
        if (event.keyCode == 13) {
            this.Login();
        }
        else if (!this.Submit) {
            this.Submit = true;
        }
    }
    Login() {
        this. HideLoading = false;
        if (!this.UserName) {
            this.Submit = false;
        }
        else {
            this.Submit = true;
        }
        if (this.Submit) {
            this._loginService.GetUser(this.UserName).then((value: IUser) => {
                this. HideLoading = true;
                if (value) {
                    let link = ['/wall'];
                    this._router.navigate(link);
                }
                else {

                }
            });

        }

    }
}


