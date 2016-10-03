import { Component, OnInit, Input } from '@angular/core';
import { IUser, IPost, IComment } from '../entities/index'
import { CommentService } from '../services/index'
@Component({
    moduleId: module.id,
    selector: 'app-post',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.css'],
    providers: [CommentService]
})
export class PostComponent implements OnInit {

    @Input() post: IPost
    public Comments: IComment[]
    public CommentsVisibility: boolean
    public NoCommentsVisibility: boolean
     public ShowCommentBtnVisibility: boolean
    constructor(private _commentService: CommentService) {

    }
    ShowComments() {
         this.ShowCommentBtnVisibility=false;
        this._commentService.GetPostComments(this.post.id)
            .subscribe((comments: IComment[]) => {
                this.Comments = comments;
                if (this.Comments.length) {
                     this.CommentsVisibility = true;
                     this.NoCommentsVisibility=false;
                }
                else {
                   this.CommentsVisibility = false;
                   this.NoCommentsVisibility=true;
                }
            });
    }
    ngOnInit() {
             this.CommentsVisibility = false;
             this.ShowCommentBtnVisibility=true;
             this.NoCommentsVisibility=false;
    }
}


