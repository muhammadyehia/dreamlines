import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, IPost } from '../entities/index'
import { LoginService, PostService } from '../services/index'
@Component({
    moduleId: module.id,
    selector: 'app-wall',
    templateUrl: 'wall.component.html',
    styleUrls: ['wall.component.css'],
    providers: [PostService]
})
export class WallComponent implements OnInit {
    constructor(private _loginService: LoginService, private _postService: PostService, private _router: Router) { }
    public currentUser: IUser;
    public UserPosts: IPost[];
    public NewTitle: string;
    public NewBody: string;
    public TitleBorderStyle: string = "";
    public BodyBorderStyle: string = "";
    // public borderStyle:string =;
    ngOnInit() {
        this.currentUser = this._loginService.GetCurrentUser();
        if (this.currentUser) {
            this._postService.GetUserPosts(this.currentUser.id)
                .subscribe((posts: IPost[]) =>
                    this.UserPosts = posts
                );
        }
        else {
            let link = ['/login'];
            this._router.navigate(link);
        }
    }
    AddNewPost() {
        if (!this.NewTitle) {
            this.TitleBorderStyle = "rgb(252, 88, 85)";
        }
        else {
            this.TitleBorderStyle = "";
        }
        if (!this.NewBody) {
            this.BodyBorderStyle = "rgb(252, 88, 85)";
        }
        else {
            this.BodyBorderStyle = "";
        }
        if (this.NewTitle && this.NewBody) {
            this.TitleBorderStyle = this.BodyBorderStyle = "";
            let newPost: IPost = {
                "userId": this.currentUser.id,
                "id": 0,
                "title": this.NewTitle,
                "body": this.NewBody
            };
            this.UserPosts.unshift(newPost);
            this.NewTitle = "";
            this.NewBody = "";
        }
    }
    LogOut() {
        this._loginService.LogOut();
        let link = ['/login'];
        this._router.navigate(link);
    }
}