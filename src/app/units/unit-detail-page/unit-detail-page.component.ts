import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unit } from '../../common/types';

@Component({
  selector: 'app-unit-detail-page',
  templateUrl: './unit-detail-page.component.html',
  styleUrls: ['./unit-detail-page.component.scss'],
})
export class UnitDetailPageComponent {
  unit: Unit;

  constructor(private route: ActivatedRoute) {
    this.unit = this.route.snapshot.data['unit'];
  }
}
