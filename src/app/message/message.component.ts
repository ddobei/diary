import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() msgObj!: Message;

  constructor() { }

  ngOnInit(): void {
  }

}
