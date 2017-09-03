import { Component, OnInit } from '@angular/core';
import { ClientMessageBrokerFactory, ClientMessageBroker, UiArguments, FnArg, SerializerTypes } from '@angular/platform-webworker';

import { BrokerService } from './services/broker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  private uiBroker: ClientMessageBroker;

  constructor(private clientMessageBrokerFactory: ClientMessageBrokerFactory,
              private brokerService: BrokerService) {}

  ngOnInit(): void {
    this.uiBroker = this.clientMessageBrokerFactory.createMessageBroker('UI_CHANNEL', false);

    this.brokerService.hello.subscribe(
      (name: string) => this.sendMessage(name)
    );
  }

  private runOnUi(broker: ClientMessageBroker, func: string, data?: any): Promise<any> {
    const args = new UiArguments(func);
    args.method = func;
    if (data) {
      const fnArg = new FnArg(data, SerializerTypes.PRIMITIVE);
      fnArg.value = data;
      fnArg.type = SerializerTypes.PRIMITIVE;
      args.args = [fnArg];
    }

    return broker.runOnService(args, SerializerTypes.PRIMITIVE);
  }

  public sendMessage(name: string): void {
    this.runOnUi(this.uiBroker, 'hello', name).then(
      (res: string) => {
        this.brokerService.helloResult.next(res);
      }
    );
  }
}
