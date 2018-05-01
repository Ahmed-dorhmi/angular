import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title : string;
  @Input() content : string;
  @Input() loveits : number;
  @Input() date ;
  constructor() { }

  ngOnInit() {
  }
  loveit()
  {
    this.loveits++;
  }
  dontloveit()
  {
    this.loveits--;
  }
}
