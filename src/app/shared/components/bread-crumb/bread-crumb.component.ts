import { Component, Input } from '@angular/core';
import { BreadCrumbItem } from '../../models/bread-crumb-item';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css'],
})
export class BreadCrumbComponent {
  @Input() items: Array<BreadCrumbItem> = [];

  public isTheLastItem(item: BreadCrumbItem): boolean {
    const index = this.items.indexOf(item);
    return index + 1 === this.items.length;
  }
}
