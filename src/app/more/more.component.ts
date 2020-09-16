import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  username = 'default';
  serverUsername = 'default';
  uName = 'part';
  Q1 = '';

  constructor() { }

  ngOnInit() {
  }

  processPoll() {
    alert(' ctually process the poll! ' + this.uName + this.Q1);
  }
}
