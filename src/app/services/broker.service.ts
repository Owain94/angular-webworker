import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class BrokerService {
  public hello = new Subject<string>();
  public helloResult = new Subject<string>();
}
