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

  constructor() { }

  ngOnInit() {
  }

  processPoll() {
    const q1 = document.getElementById('Q1').nodeValue;
    const q2 = document.getElementById('username').nodeValue;
    alert(' Actually process the poll! ' + q1 + q2 + this.uName);
  }
}
