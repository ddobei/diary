export class Message {
  dateCreated: Date;
  msg: string;

  constructor(dateCreated: Date, msg: string) {
    this.dateCreated = dateCreated;
    this.msg = msg;
  }
}
