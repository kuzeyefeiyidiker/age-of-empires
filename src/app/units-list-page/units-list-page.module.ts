import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UnitsListPageComponent } from './units-list-page.component';

const routes: Routes = [{ path: '', component: UnitsListPageComponent }];

@NgModule({
  declarations: [UnitsListPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UnitsListPageModule {}
