import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { ViewComponent } from './view/view.component';

import { SharedModule } from 'src/app/shared/shared.module'


@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
