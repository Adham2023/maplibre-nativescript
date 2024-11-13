import { Component, NgZone } from '@angular/core';
import { DemoSharedMaplibreNativescript } from '@demo/shared';
import {} from '@nstudio/maplibre-nativescript';

@Component({
  selector: 'demo-maplibre-nativescript',
  templateUrl: 'maplibre-nativescript.component.html',
})
export class MaplibreNativescriptComponent {
  demoShared: DemoSharedMaplibreNativescript;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMaplibreNativescript();
  }
}
