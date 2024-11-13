import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMaplibreNativescript } from '@demo/shared';
import {} from '@nstudio/maplibre-nativescript';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMaplibreNativescript {}
