import './polyfills';

import { platformWorkerAppDynamic } from '@angular/platform-webworker-dynamic';

import { AppModule } from './app/app.module';

Error['stackTraceLimit'] = Infinity;
require('zone.js/dist/long-stack-trace-zone');

platformWorkerAppDynamic().bootstrapModule(AppModule);
