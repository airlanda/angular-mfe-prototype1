import { Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-shash-quash',
  templateUrl: './shash-quash.component.html',
  styleUrls: ['./shash-quash.component.css'],
})
export class ShashQuashComponent {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr) { }

  search() {
    alert('Not implemented for this demo!');
  }

  async terms() {
    const comp = await import('../lazy/lazy.component').then(m => m.LazyComponent);

    const factory = this.cfr.resolveComponentFactory(comp);
    this.viewContainer.createComponent(factory, 0, this.injector);
  }


}
