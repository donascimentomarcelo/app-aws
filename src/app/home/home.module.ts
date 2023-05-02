import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
