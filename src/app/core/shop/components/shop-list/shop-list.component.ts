import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PeriodicElement } from '../../models/periodic-element.model';
import { ShopItemsService } from '../../services/shop-items.service';


@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ShopListComponent implements OnInit {
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  expandedElement: PeriodicElement | null;
  dataSource: PeriodicElement[];

  constructor(private service: ShopItemsService) {}

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.dataSource = data;
    })
  }
}

