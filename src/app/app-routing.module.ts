import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './common/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: 'units',
    loadChildren: () => import('./units-list-page/units-list-page.module').then(m => m.UnitsListPageModule),
  },
  {
    path: 'units/:unitId',
    loadChildren: () => import('./unit-detail-page/unit-detail-page.module').then(m => m.UnitDetailPageModule),
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
