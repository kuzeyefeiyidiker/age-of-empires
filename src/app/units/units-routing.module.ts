import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitResolver } from './services/unit.resolver';
import { UnitDetailPageComponent } from './unit-detail-page/unit-detail-page.component';
import { UnitsListPageComponent } from './units-list-page/units-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: UnitsListPageComponent,
    data: {
      reuse: true,
      reuseIf: 'unitsList',
    },
  },
  {
    path: ':unitId',
    component: UnitDetailPageComponent,
    resolve: {
      unit: UnitResolver,
    },
    data: {
      reuseIf: 'unitsList',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitsRoutingModule {}
