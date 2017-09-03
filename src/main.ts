import './polyfills'

import { PlatformRef } from '@angular/core';
import {
  bootstrapWorkerUi,
  WORKER_UI_LOCATION_PROVIDERS,
  ServiceMessageBrokerFactory,
  SerializerTypes
} from '@angular/platform-webworker';

import { bootloader } from '@angularclass/bootloader';

const bootstrap = () => {
  return bootstrapWorkerUi('webworker.bundle.js', WORKER_UI_LOCATION_PROVIDERS).then((platformRef: PlatformRef) => {
    const brokerFactory: ServiceMessageBrokerFactory = platformRef.injector.get(ServiceMessageBrokerFactory);
    const UiBroker = brokerFactory.createMessageBroker('UI_CHANNEL', false);

    UiBroker.registerMethod('hello', [ SerializerTypes.PRIMITIVE ], (name: string) => {
      return Promise.resolve(`Hi ${name}, from UI thread`)
    }, SerializerTypes.PRIMITIVE);
  });
}

bootloader(bootstrap);
