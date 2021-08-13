import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Message } from '../models/message';

@Component({
  selector: 'app-diary-main',
  templateUrl: './diary-main.component.html',
  styleUrls: ['./diary-main.component.scss']
})
export class DiaryMainComponent implements OnInit {

  isEmojiPickerVisible = false;
  messageCtrl = new FormControl();
  messages: Message[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addEmoji(event: any) {
    const newVal = this.messageCtrl.value + event.emoji.native;
    this.messageCtrl.patchValue(newVal);
    this.isEmojiPickerVisible = false;
  }

  addMessage() {
    const message = new Message(new Date(), this.messageCtrl.value);
    this.messages = [message, ...this.messages];
    this.messageCtrl.patchValue('');
  }

}
