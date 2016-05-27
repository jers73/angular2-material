import { bootstrap } from '@angular/platform-browser-dynamic';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import { enableProdMode } from '@angular/core'
import {provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {MdGestureConfig} from '@angular2-material/core/gestures/MdGestureConfig';
import {MdIconRegistry} from '@angular2-material/icon/icon-registry';
import {OVERLAY_CONTAINER_TOKEN} from '@angular2-material/core/overlay/overlay';
import {MdLiveAnnouncer} from '@angular2-material/core/live-announcer/live-announcer';
import {createOverlayContainer} from '@angular2-material/core/overlay/overlay-container';

import { RodolphAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(RodolphAppComponent, [
    provide(OVERLAY_CONTAINER_TOKEN, {useValue: createOverlayContainer()}),
    MdIconRegistry,
    HTTP_PROVIDERS,
    provide(HAMMER_GESTURE_CONFIG, {useClass: MdGestureConfig})
]);

