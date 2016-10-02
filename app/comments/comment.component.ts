import { Component, OnInit,Input } from '@angular/core';
import { IComment} from '../entities/index'
@Component({
    moduleId: module.id,
    selector: 'app-comment',
    templateUrl: 'comment.component.html',
    styleUrls:['comment.component.css']
})
export class commentComponent implements OnInit {

    @Input() comment:IComment
    constructor() { }

    ngOnInit() { }
}


