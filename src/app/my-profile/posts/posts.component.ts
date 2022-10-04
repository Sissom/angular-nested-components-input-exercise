import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
[x: string]: any;
  @Input() showPosts: string [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
