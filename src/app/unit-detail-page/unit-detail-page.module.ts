import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitDetailPageComponent } from './unit-detail-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: UnitDetailPageComponent }];

@NgModule({
  declarations: [UnitDetailPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UnitDetailPageModule {}
