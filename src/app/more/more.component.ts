import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  username = 'default';
  serverUsername = 'default';
  uName = 'part';
  uPassword = '';
  Q1 = '';
  uFar = '';

  @Input()
  hasViewedAboutLink: boolean;

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  processPoll() {
    alert('Actually process the poll! ' + this.uName + this.Q1  + ' hasViewedAboutLink ' + this.hasViewedAboutLink);
    this.notify.emit(this.uName);
  }
}
