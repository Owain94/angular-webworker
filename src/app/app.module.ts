import { APP_BASE_HREF } from '@angular/common';
import { WorkerAppModule, WORKER_APP_LOCATION_PROVIDERS } from '@angular/platform-webworker';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ComputationComponent } from './computation/computation.component';
import { CommunicateComponent } from './communicate/communicate.component';

import { BrokerService } from './services/broker.service';

const routes: Routes = [
  {
    path: '',
    component: ComputationComponent,
    pathMatch: 'full'
  },
  {
    path: 'communicate',
    component: CommunicateComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ComputationComponent,
    CommunicateComponent
  ],
  imports: [
    WorkerAppModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [
    WORKER_APP_LOCATION_PROVIDERS,
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },

    BrokerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
