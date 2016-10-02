import { Component, OnInit, Input } from '@angular/core';
import { IUser, IPost, IComment } from '../entities/index'
import { CommentService } from '../services/index'
@Component({
    moduleId: module.id,
    selector: 'app-post',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.css'],
    providers:[CommentService]
})
export class PostComponent implements OnInit {

    @Input() post: IPost
    public Comments: IComment[]
    public CommentVisibility: boolean
    constructor(private _commentService: CommentService) {

    }
    ShowComments() {
        this.CommentVisibility = true;
        this._commentService.GetPostComments(this.post.id)
            .subscribe((comments: IComment[]) =>
                this.Comments = comments);
    }
    ngOnInit() {
        this.CommentVisibility = false;
    }
}


