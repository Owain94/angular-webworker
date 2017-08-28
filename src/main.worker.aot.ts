import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformWorkerApp } from '@angular/platform-webworker';

import { AppModuleNgFactory } from '../ngfactory/src/app/app.module.ngfactory';

enableProdMode();
platformWorkerApp().bootstrapModuleFactory(AppModuleNgFactory);
