import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Directive({
  selector: '[hasPermission]'
})
export class HasPermissionDirective {
  private currentUser;
  private permissions = [];
  private logicalOp = 'AND';
  private isHidden = true;

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: MyserviceService
  ) {

  }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log('permisoss del usuario: ', user);
      
      this.updateView();
    });
  }

  @Input()
  set hasPermission(val) {    
    this.permissions = val;
    this.updateView();
  }

  @Input()
  set hasPermissionOp(permop) {
    this.logicalOp = permop;
    this.updateView();
  }

  private updateView() {
    if (this.checkPermission()) {
      if(this.isHidden) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.isHidden = false;
      }
    } else {
      this.isHidden = true;
      this.viewContainer.clear();
    }
  }

  private checkPermission() {
    let hasPermission = false;

    if (this.currentUser && this.currentUser.permissions) {
      for (const checkPermission of this.permissions) {
        const permissionFound = this.currentUser.permissions.find(x => x.toUpperCase() === checkPermission.toUpperCase());

        if (permissionFound) {
          hasPermission = true;

          if (this.logicalOp === 'OR') {
            break;
          }
        } else {
          hasPermission = false;
          if (this.logicalOp === 'AND') {
            break;
          }
        }
      }
    }

    return hasPermission;
  }
}
