import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser,IPost} from '../entities/index'
import {LoginService,PostService} from '../services/index'
@Component({
    moduleId: module.id,
    selector: 'app-wall',
    templateUrl: 'wall.component.html',
    styleUrls: ['wall.component.css'],
    providers:[PostService]
})
export class WallComponent implements OnInit {
    constructor(private _loginService: LoginService,private _postService:PostService, private _router: Router) { }
    public UserName: string;
    public UserPosts:IPost[];
    ngOnInit() {
        let currentUser = this._loginService.GetCurrentUser();
        if (currentUser) {
            this.UserName = currentUser.name;
             this._postService.GetUserPosts(currentUser.id)
                 .subscribe((posts:IPost[]) => 
                 this.UserPosts=posts
                 );
             
        }
        else {
            let link = ['/login'];
            this._router.navigate(link);
        }
    }
}