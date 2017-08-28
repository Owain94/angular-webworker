import { Component, OnInit } from '@angular/core';

import { BrokerService } from '../services/broker.service';

import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-communicate',
  templateUrl: './communicate.component.pug',
  styleUrls: ['./communicate.component.scss']
})
export class CommunicateComponent implements OnInit {
  public name = '';
  public response: Subject<string>;

  constructor(private brokerService: BrokerService) {}

  ngOnInit(): void {
    this.response = this.brokerService.helloResult
  }

  public sendMessage(): void {
    this.brokerService.hello.next(this.name);
  }
}
