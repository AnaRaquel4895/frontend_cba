import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import {
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective
} from './accordion';
import { HasPermissionDirective } from './has-permission.directive';
import { MyserviceService } from '../myservice.service';

@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    HasPermissionDirective
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    HasPermissionDirective
  ],
  providers: [MenuItems, MyserviceService]
})
export class SharedModule {}
